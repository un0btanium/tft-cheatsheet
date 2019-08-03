
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

// optional: git stash, git pull, git stash pop
// compile and run parser src/test/java/types/filetypes/TestWAD.testCDragonWAD()
// compile and run src/test/java/types/util/TestDivStuff.buildTFTDataFiles()
// copy TFT data folder to this repo, changed name to current Date and Time

/*
 * Takes two converted .json tft data files and generates a patchnote based on the changes, additions and removals.
 */

const { readdirSync, readFileSync, writeFileSync } = require('fs')
const readlineSync = require('readline-sync');


const TFT_DATA_PATH = "./tft-data/converted-data/";
const PATCHNOTES_PATH = "./tft-data/patchnotes/";



// getUserInput();
createPatchnotes("9.15.0.json", "9.15.0a.json");

function getUserInput() {
	let convertedFolderNames = getFiles(TFT_DATA_PATH)

	if (convertedFolderNames.length <= 1) {
		console.log("There are not enough versions to compare! Exiting...");
		return;
	}

	let convertedFolderNamesIndex = readlineSync.keyInSelect(convertedFolderNames, 'Which version do you want to use as your ground truth?');

	if (convertedFolderNamesIndex === -1) {
		return;
	}
	let groundTruthVersion = convertedFolderNames[convertedFolderNamesIndex];
	console.log("> " + groundTruthVersion);

	let convertedFolderNamesIndex2 = readlineSync.keyInSelect(convertedFolderNames, 'Which version do you want to use as your ground truth?');

	if (convertedFolderNamesIndex2 === -1) {
		return;
	}
	let compareToVersion = convertedFolderNames[convertedFolderNamesIndex2];
	console.log("> " + compareToVersion);


	createPatchnotes(groundTruthVersion, compareToVersion);
}

function getFiles(source) {
	return readdirSync(source, { withFileTypes: true })
		.filter(dirent => dirent.isFile())
		.map(file => file.name)
}


function createPatchnotes(groundTruthVersion, compareToVersion) {

	let verA = JSON.parse(readFileSync(TFT_DATA_PATH + groundTruthVersion));
	let verB = JSON.parse(readFileSync(TFT_DATA_PATH + compareToVersion));

	let additions = {}
	let changes = {};
	let deletions = {};

	let res = checkChampions(verA, verB);
	// let res = diff(verA, verB);
	
	let stringifiedJSON = JSON.stringify(res, null, 4);
	writeFileSync(PATCHNOTES_PATH + groundTruthVersion + "_to_" + compareToVersion + ".json", stringifiedJSON);
}




function checkChampions(verA, verB) {

	let additions = {}
	let removals = {};
	let changes = {};

	// check for additions
	for (let championName in verB.champions) {
		if (verA.champions[championName] === undefined) {
			console.log("Added " + championName);
			additions[championName] = {
				is: verA.champions[championName]
			}
		}
	}

	// check for removals
	for (let championName in verA.champions) {
		if (verB.champions[championName] === undefined) {
			console.log("Removed " + championName);
			removals[championName] = {
				was: verA.champions[championName]
			}
		}
	}

	// check for changes
	for (let championName in verB.champions) {
		let championB = verB.champions[championName];
		if (verA.champions[championName] !== undefined) {
			let championA = verA.champions[championName];
			
			for (let key in championB) {
				let valueB = championB[key];
				let valueA = championA[key];

				if (valueB === null || valueB === undefined) {
					console.log(championName + "." + key + " is null or undefined");
				} 
				
				if (valueA === null || valueA === undefined) {
					addProperty(changes, championName, key, null, valueB); // new property
				}
				
				if (valueB.constructor === String || valueB.constructor === Number || valueB.constructor === Boolean) {
					
					if (valueB !== valueA) {
						addProperty(changes, championName, key, valueA, valueB);
					}

				} else if (valueB.constructor === Array) { // array
					
					if (valueA.constructor !== Array || valueB.length !== valueA.length) {
						addProperty(changes, championName, key, valueA, valueB)
					} else {
						for (let i = 0; i < valueB.length; i++) {
							if (valueB[i] !== valueA[i]) { // TODO requires same order
								addProperty(changes, championName, key, valueA, valueB)
								break;
							}
						}
					}

				} else if (key === "specialAbility" && valueB.constructor === Object) { // object
					
					for (let abilityKey in valueB) {
						let abilityValueA = valueA[abilityKey];
						let abilityValueB = valueB[abilityKey];

						if (abilityValueB === null || abilityValueB === undefined) {
							console.log(championName + "." + key + " is null or undefined");
						} 
						
						if (abilityValueA === null || abilityValueA === undefined) {
							addProperty2(changes, championName, key, abilityKey, null, abilityValueB); // new property
						}
						
						if (abilityValueB.constructor === String || abilityValueB.constructor === Number || abilityValueB.constructor === Boolean) {
							
							if (abilityValueB !== abilityValueA) {
								addProperty2(changes, championName, key, abilityKey, abilityValueA, abilityValueB);
							}
		
						} else if (abilityKey === "variables" && abilityValueB.constructor === Array) { // array
							
							if (abilityValueA.constructor !== Array || abilityValueB.length !== abilityValueA.length) {
								addProperty2(changes, championName, key, abilityKey, abilityValueA, abilityValueB); // probably variables added or removed
							} else {
								for (let i = 0; i < abilityValueB.length; i++) {
									if (abilityValueB[i].name !== abilityValueA[i].name) { // TODO requires same order
										addPropertyAbilityVariables(changes, championName, abilityValueB[i].name, "name", abilityValueA[i].name, abilityValueB[i].name);
									}
									if (abilityValueB[i].values.length !== abilityValueA[i].values.length) {
										addPropertyAbilityVariables(changes, championName, abilityValueB[i].name, "values", abilityValueA[i].values, abilityValueB[i].values); // added or removed values
									} else {
										for (let j = 0; j < abilityValueB[i].values.length; j++) {
											if (abilityValueB[i].values[j] !== abilityValueA[i].values[j]) {
												addPropertyAbilityVariables(changes, championName, abilityValueB[i].name, "values", abilityValueA[i].values, abilityValueB[i].values);
											}
										}
									}
								}
							}
		
						} else {
							console.log(abilityKey + " is other");
						}
					}

					for (let abilityKey in valueA) {
						let abilityValueA = valueA[abilityKey];
						let abilityValueB = valueB[abilityKey];
						if (abilityValueB === null || abilityValueB === undefined) {
							addProperty2(changes, championName, key, abilityKey, abilityValueA, null); // removed property
						}
					}
					

				} else {
					console.log(key + " is other");
				}
			}

			for (let key in championA) {
				let valueB = championB[key];
				let valueA = championA[key];
				if (valueB === null || valueB === undefined) {
					addProperty(changes, championName, key, valueA, null) // removed property
				}
			}

		}
	}


	return {
		additions: additions,
		removals: removals,
		changes: changes
	}
}

function addProperty(jsonObject, keyA, keyB, was, is) {
	if (jsonObject[keyA] === undefined) {
		jsonObject[keyA] = {};
	}

	if (was === null) {
		jsonObject[keyA][keyB] = {
			is: is
		}
	} else if (is === null) {
		jsonObject[keyA][keyB] = {
			was: was
		}
	} else {
		jsonObject[keyA][keyB] = {
			was: was,
			is: is
		}
	}
}


function addProperty2(jsonObject, keyA, keyB, keyC, was, is) {
	if (jsonObject[keyA] === undefined) {
		jsonObject[keyA] = {};
	}
	
	if (jsonObject[keyA][keyB] === undefined) {
		jsonObject[keyA][keyB] = {};
	}

	if (was === null) {
		jsonObject[keyA][keyB][keyC] = {
			is: is
		}
	} else if (is === null) {
		jsonObject[keyA][keyB][keyC] = {
			was: was
		}
	} else {
		jsonObject[keyA][keyB][keyC] = {
			was: was,
			is: is
		}
	}
}

function addPropertyAbilityVariables(jsonObject, keyA, keyB, keyC, was, is) {
	if (jsonObject[keyA] === undefined) {
		jsonObject[keyA] = {};
	}

	if (jsonObject[keyA]["specialAbility"] === undefined) {
		jsonObject[keyA]["specialAbility"] = {};
	}
	
	if (jsonObject[keyA]["specialAbility"]["variables"] === undefined) {
		jsonObject[keyA]["specialAbility"]["variables"] = {};
	}

	if (jsonObject[keyA]["specialAbility"]["variables"][keyB] === undefined) {
		jsonObject[keyA]["specialAbility"]["variables"][keyB] = {};
	}

	if (was === null) {
		jsonObject[keyA]["specialAbility"]["variables"][keyB][keyC] = {
			is: is
		}
	} else if (is === null) {
		jsonObject[keyA]["specialAbility"]["variables"][keyB][keyC] = {
			was: was
		}
	} else {
		jsonObject[keyA]["specialAbility"]["variables"][keyB][keyC] = {
			was: was,
			is: is
		}
	}
}


function diff(obj1, obj2) {
    const result = {};
    if (Object.is(obj1, obj2)) {
        return undefined;
    }
    if (!obj2 || typeof obj2 !== 'object') {
        return obj2;
    }
    Object.keys(obj1 || {}).concat(Object.keys(obj2 || {})).forEach(key => {
        if(obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
            result[key] = obj2[key];
        }
        if(typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
            const value = diff(obj1[key], obj2[key]);
            if (value !== undefined) {
				result[key] = value;
            }
        }
	});
	if (result !== {}) {
		return result;
	} else {
		return null;
	}
}


