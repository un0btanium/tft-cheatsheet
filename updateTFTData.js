/*
 * Loads a .json file with tft data and copies it over into the tft-data folder as a .js file.
 */
const { readdirSync, readFileSync, writeFileSync } = require('fs')
const readlineSync = require('readline-sync');

const TFT_DATA_PATH = "./tft-data/converted-data/";
const TFT_DATA_WEBSITE_FILE = "./src/tft-data/data.js";

getUserInput();

function getUserInput() {

	let fileNames = getFiles(TFT_DATA_PATH)
	let fileIndex = readlineSync.keyInSelect(fileNames, 'Which data do you want to use on the website?');
	if (fileIndex === -1) {
		return;
	}
	let fileName = fileNames[fileIndex];
	console.log("> " + fileName);

	copyData(fileName)
}


function getFiles(source) {
	return readdirSync(source, { withFileTypes: true })
		.filter(dirent => dirent.isFile())
		.map(file => file.name)
}


function copyData(fileName) {
	let jsonData = JSON.parse(readFileSync(TFT_DATA_PATH + fileName));
	let stringifiedJSON = JSON.stringify(jsonData, null, 4);
	let fileText = "var data = " + stringifiedJSON + "\nexport default data;";
	writeFileSync(TFT_DATA_WEBSITE_FILE, fileText);
}