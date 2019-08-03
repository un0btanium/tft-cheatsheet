
/* Folder Structure:

- Folder: tft-data
-- Folder: raw-data (directly copied over)
--- date-time1
--- date-time2
--- date-time3...
-- Folder: converted-data (used and displayed on website)
--- 9.14.1
--- 9.14.2
--- 9.15.0...
-- Folder: patchnotes (displayed on website under patchnotes or for personal purpose, always compared to the last version)
--- 9.14.1->9.14.2
--- 9.14.2->9.15.0
--- 9.14.1->9.15.0
--- 9.14.2->9.15.0...

*/


// ask user which raw data folder he wants to convert to a custom json version ready for the website.
// ask user as which LoL version this is saved as (folder data name)
// ask user if he wants to create a patchnote
// if yes, ask user which LoL version he want to compare it to
// convert to custom json version
// optional: compare and create patchnotes
const { readdirSync, readFileSync, writeFileSync } = require('fs')
const readlineSync = require('readline-sync');


let MANUAL_DATA = JSON.parse(readFileSync("./tft-data/manual-data/data.json"));


getUserInput();


function getUserInput() {

	let rawFolderNames = getDirectories("./tft-data/raw-data/")
	let rawFolderNamesIndex = readlineSync.keyInSelect(rawFolderNames, 'Which raw data folder do you want to convert?');
	if (rawFolderNamesIndex === -1) {
		return;
	}
	let rawDataFolderName = rawFolderNames[rawFolderNamesIndex];
	console.log("> " + rawDataFolderName);

	let lolVersion = readlineSync.question('As which LoL version do you want to save it? ');
	if (lolVersion === "") {
		return;
	}
	console.log("> " + lolVersion);

	convertRawDataToCustomFormat(rawDataFolderName, lolVersion)
}

function getDirectories(source) {
	return readdirSync(source, { withFileTypes: true })
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name)
}



function convertRawDataToCustomFormat(rawDataFolderName, lolVersion) {
	let tftData = JSON.parse(readFileSync("./tft-data/raw-data/" + rawDataFolderName + "/en_gb_TFT.json"));

	let convertedTftData = {};
	convertedTftData.champions = {};
	for (let championId in tftData.champions) {
		let c = tftData.champions[championId];
		
		let classes = [];
		let origins = [];
		for (let trait of c.traits) {
			if (MANUAL_DATA.classes.indexOf(trait) >= 0) {
				classes.push(trait);
			} else if (MANUAL_DATA.origins.indexOf(trait) >= 0) {
				origins.push(trait);
			} else {
				console.error("[" + c.name + "] Unknown champion trait: " + trait);
				console.error("");
			}
		}

		let originalDescription = c.ability.desc.split(/(?:<br>)/).join("");
		let variables = [];
		for (let variable of c.ability.variables) {
			if (Array.isArray(variable.values)) {
				let inlineVariableKey = "@" + variable.key + "@";
				let index = originalDescription.indexOf(inlineVariableKey);
				if (index !== -1) {
					let inlineVariableValue = variable.values[1] + "/" + variable.values[2] + "/" + variable.values[3];
					if (variable.values[1] === variable.values[2] && variable.values[2] === variable.values[3]) {
						inlineVariableValue = variable.values[1];
					}
					originalDescription = originalDescription.replace(inlineVariableKey, inlineVariableValue);
				} else { // for Rengar @CritBuff*100@%
					let inlineVariableKey = "@" + variable.key + "*100@";
					let index = originalDescription.indexOf(inlineVariableKey);
					if (index !== -1) {
						let inlineVariableValue = variable.values[1]*100 + "/" + variable.values[2]*100 + "/" + variable.values[3]*100;
						if (variable.values[1] === variable.values[2] && variable.values[2] === variable.values[3]) {
							inlineVariableValue = variable.values[1]*100;
						}
						originalDescription = originalDescription.replace(inlineVariableKey, inlineVariableValue);
					}
					// console.log("[" + c.name + "] Unused ability variable in description text: " + variable.key);
				}
				let variableName = "";
				let variableOriginalName = variable.key;
				if (variable.key.startsWith("CC")) {
					variableName = "CC ";
					variableOriginalName = variableOriginalName.substring(2);
				} else if (variable.key.startsWith("RCC")) {
					variableName = "CC ";
					variableOriginalName = variableOriginalName.substring(3);
				}
				variableName += variableOriginalName.split(/(?=[A-Z])/).join(" ");
				variableName = variableName
					.replace("A D ", "Attack Damage ")
					.replace("A S ", "Attackspeed ")
					.replace("D R ", "Damage Reduction ")
					.replace("Num ", "Number of ")
					.replace("Ho T ", "Healing over Time ")
					.replace("Q ", "")
					.replace("W ", "")
					.replace("E ", "")
					.replace("R ", "")
					.replace("Mult ", "Multiplier ");
				variables.push({
					name: variableName,
					values: variable.values.splice(0, 5)
				});
			} else {
				console.error("[" + c.name + "] The special ability values are not an array: " + variable.key);
				console.error("");
			}
		}


		let champion = {
			name: c.name,
			tier: c.cost,
			classes: classes,
			origins: origins,
			maxHealthpoints: c.stats.hp,
			hpScaleFactor: c.stats.hpScaleFactor,
			maxMana: c.stats.mana,
			damage: c.stats.damage,
			damageScaleFactor: c.stats.damageScaleFactor,
			armor: c.stats.armor,
			magicResistance: c.stats.magicResist,
			critMultiplier: c.stats.critMultiplier,
			critChance: c.stats.critChance,
			attackSpeed: c.stats.attackSpeed,
			range: c.stats.range,
			specialAbility: {
				name: c.ability.name,
				originalDescription: originalDescription,
				variables: variables
			}
		}

		if (MANUAL_DATA.notes.champions[c.name] !== null && MANUAL_DATA.notes.champions[c.name] !== undefined) {
			for (let key in MANUAL_DATA.notes.champions[c.name]) {
				champion[key] = MANUAL_DATA.notes.champions[c.name][key];
			}
		}

		convertedTftData.champions[c.name] = champion;
	}


	convertedTftData.traits = {};
	convertedTftData.classNames = [];
	convertedTftData.originNames = [];
	for (let t of tftData.traits) {
		let descArray = t.desc
			.split(/(?:<br>|<\/expandRow>|<\/row>|<expandRow>|<row>)/).join("")
			.split(/(?:\(\@MinUnits\@\))\s/);

		let mainDescriptionText;
		if (descArray.length === 1) {
			descArray.shift("");
			mainDescriptionText = "";
		} else {
			mainDescriptionText = descArray[0];
			for (let variable of t.effects[0].vars) {
				let inlineVar = "@" + variable.name + "@";
				mainDescriptionText = mainDescriptionText.split(inlineVar).join(variable.value);
			}
		}

		let effects = [];
		for (let i = 0 ; i < t.effects.length; i++) {
			let effect = t.effects[i];
			let effectText = "";

			if (i > descArray.length-2) {
				effectText = descArray[descArray.length-1];
			} else {
				effectText = descArray[i+1];
			}


			for (let variable of effect.vars) {
				let inlineVar = "@" + variable.name + "@";
				effectText = effectText.split(inlineVar).join(variable.value);
			}
			effects.push({
				requiredUnits: effect.minUnits,
				effect: effectText
			});

		}

		mainDescriptionText = mainDescriptionText
			.replace("%  ", "% chance ")
			.replace("sA", "s. A")
			.replace("yA", "y. A")

		let trait = {
			name: t.name,
			description: mainDescriptionText,
			effects: effects
		}

		if (MANUAL_DATA.notes.traits[trait.name] !== null && MANUAL_DATA.notes.traits[trait.name] !== undefined) {
			for (let key in MANUAL_DATA.notes.traits[trait.name]) {
				if (trait[key] !== undefined) {
					console.error("[" + trait.name + "] The key '" + key + "' already existed and is overwritten by the manual data:" );
					console.error("[ORIGINAL " + trait.name + " " + key + "]");
					console.error(trait[key]);
					console.error("[NEW      " + trait.name + " " + key + "]");
					console.error(MANUAL_DATA.notes.traits[trait.name][key]);
					console.error("");
				}
				trait[key] = MANUAL_DATA.notes.traits[trait.name][key];
			}
		}

		convertedTftData.traits[trait.name] = trait;
		if (MANUAL_DATA.classes.indexOf(trait.name) >= 0) {
			convertedTftData.classNames.push(trait.name);
		} else if (MANUAL_DATA.origins.indexOf(trait.name) >= 0) {
			convertedTftData.originNames.push(trait.name);
		} else {
			console.error("New class or origin (not categorized in manual data yet): " + trait.name);
			console.error("");
		}
	}
	
	convertedTftData.baseItems = MANUAL_DATA.baseItems;
	convertedTftData.advancedItems = MANUAL_DATA.advancedItems;
	convertedTftData.itemRecipes = MANUAL_DATA.itemRecipes;
	convertedTftData.rollchances = MANUAL_DATA.rollchances;
	convertedTftData.championpool = MANUAL_DATA.championpool;


	let stringifiedJSON = JSON.stringify(convertedTftData, null, 4);
	writeFileSync('./tft-data/converted-data/' + lolVersion + ".json", stringifiedJSON);
}