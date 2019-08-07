import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import Fullscreen from "react-full-screen";

import logo from "./images/spatula.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/bootstrap.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import ChampionGridPage from './components/pages/champion-grid-page.component';
import ItemGridPage from './components/pages/item-grid-page.component';
import PoolTablePage from './components/pages/pool-table-page.component';
import MultiViewPage from './components/pages/multi-view-page.component';
import AboutPage from './components/pages/about-page.component';
import ContactPage from './components/pages/contact-page.component';

import tftData from './tft-data/data.js';


let synergyBackgroundColors = [
	{
		rgb: "50, 168, 82",
		alpha: 0.6,
		offset: 0.1
	},
	{
		rgb: "254, 214, 81",
		alpha: 0.85,
		offset: 0
	},
	{
		rgb: "186, 197, 197",
		alpha: 1.25,
		offset: 0.25
	},
	{
		rgb: "210, 140, 75",
		alpha: 1.2,
		offset: 0.2
	},
	{
		rgb: "50, 168, 82",
		alpha: 0.6,
		offset: 0.15,
	}
]

const BG = "dark"; // primary, dark, light
const VARIANT = "dark"; // dark, light

const reloadWindow = () => window.location.reload();


const WEBSITE_URL = "tft-cheatsheet.com";

class App extends Component {


  	constructor(props) {
		super(props);


		/* Classes and Origins  */
		let classNames = tftData.classNames;
		let originNames = tftData.originNames;
		let traitsSelectedChampionsCount = {};
		for (let traitName in tftData.traits) {
			traitsSelectedChampionsCount[traitName] = 0;
		}

		/* Sort Classes and Origins by Alphabetically */
		let sortFunction = function (a, b) {
			if (a < b) {
				return -1;
			} else if (a > b) {
				return 1;
			}
			return 0;
		};
		classNames = classNames.sort(sortFunction);
		originNames = originNames.sort(sortFunction);
		


		/* Dynamically import images from folder */
		let imageContext = require.context('./images/', false, /\.(png)$/);
		let images = this.importImages(imageContext);

		/* Classes and Origins Icons and Synergies */
		let traitIcons = {};
		let traitSynergyInfo = {};
		for (let traitName in tftData.traits) {
			traitIcons[traitName + "4"]  = images[traitName];
			traitIcons[traitName + "1"] = images[traitName + "1"];
			traitIcons[traitName + "2"] = images[traitName + "2"];
			traitIcons[traitName + "3"] = images[traitName + "3"];
			traitSynergyInfo[traitName] = this.getSynergyInfo(traitName, 0, tftData.traits[traitName]);
		}



		/* Selection Champions */
		let isChampionSelected = [];
		for (let championName in tftData.champions) {
			let champion = tftData.champions[championName];
			champion["defaultClasses"] = [...champion.classes];
			champion["defaultOrigins"] = [...champion.origins];
			isChampionSelected[champion.name] = false;
		}

		/* Champion Grid */
		let championGrid = this.createGrid(tftData.champions, classNames, originNames);


		/* Items */
		let baseItems = tftData.baseItems;
		let advancedItems = tftData.advancedItems;
		let itemRecipes = tftData.itemRecipes;
		
		/* Item Recipes by Name */
		let recipesByItems = {};
		for (let baseItemA in baseItems) {
			for (let baseItemB in baseItems) {
				recipesByItems[itemRecipes[baseItemA][baseItemB]] = [baseItemA, baseItemB];
			}
		}

		/* Item Images */
		let itemImages = {};
		for (let itemName in baseItems) {
			let item = baseItems[itemName];
			if (item.img === null || item.img === undefined) {
				itemImages[item.altimg] = images[item.altimg];
			}
		}
		for (let itemName in advancedItems) {
			let item = advancedItems[itemName];
			if (item.img === null || item.img === undefined) {
				itemImages[item.altimg] = images[item.altimg];
			}
		}

		/* Base Items */
		let selectedBaseItems = {};
		let order = [];
		for (let baseItem in baseItems) {
			selectedBaseItems[baseItem] = 0;
			order.push(baseItem);
		}



		/* Settings Related Methods */
		this.toggleSetting = this.toggleSetting.bind(this);
		this.preventEvent = this.preventEvent.bind(this);

		/* Champion Grid Related Methods */
		this.onChampionHover = this.onChampionHover.bind(this);
		this.onTraitHover = this.onTraitHover.bind(this);
		this.onChampionClick = this.onChampionClick.bind(this);
		this.addTraitToChampion = this.addTraitToChampion.bind(this);

		/* Item Grid Related Methods */
		this.onItemHover = this.onItemHover.bind(this);
		this.onItemClick = this.onItemClick.bind(this);
		


		/* Default Settings */
		let defaultSettings = {
			/* Multi View */ 
			multiViewSwapSide: false,
			multiViewShowSettings: false,

			/* Champion Grid */ 
			championGridShowChampionTierBorder: true,
			championGridShowChampionTierOverlay: true,
			championGridShowChampionTooltip: true,
			championGridShowOriginAndClassTooltips: true,
			championGridShowOnlySynergeticChampions: true,
			
			/* Item Grid */ 
			itemGridIsYAxisFlipped: false,
			itemGridIsYAxisRightSided: false,
			itemGridIsOtherHalfIgnored: true,
			itemGridIsDescriptionVisible: false,
			itemGridHighlightAlmostBuyableItems: true,
			itemGridAdditionalHighlighting: true,
			itemGridShowAlmostBuyableItemImages: true,
			itemGridHighlightOnHover: false
		}

		/* Load local storage */
		for (let setting in defaultSettings) {
			let localStorageEntry = localStorage.getItem(setting);
			if (localStorageEntry === null && (localStorageEntry !== "true" || localStorageEntry !== "false")) {
				localStorage.setItem(setting, defaultSettings[setting]);
			} else {
				defaultSettings[setting] = (localStorage.getItem(setting) === "true");
			}
		}

		/* Set initial state */
		this.state = {
			/* Settings */
				...defaultSettings,
				isFullScreen: false,

			/* Item Grid */
				baseItems: baseItems,
				advancedItems: advancedItems,
				itemRecipes: itemRecipes,
				recipesByItems: recipesByItems,

				selectedBaseItems: selectedBaseItems,
				order: order,

				hoveredItem: null,

				itemImages: itemImages,

			/* Champion Grid */ 
				championsByName: tftData.champions,

				littleLegendLevel: 1,

				classNames: classNames,
				originNames: originNames,
				traitData: tftData.traits,
				grid: championGrid,

				isChampionSelected: isChampionSelected,
				selectedChampionsCount: 0,
				selectedChampionsByTier: [],
				traitsSelectedChampionsCount: traitsSelectedChampionsCount,
				traitSynergyInfo: traitSynergyInfo,

				traitIcons: traitIcons,

			/* Pool Table */
				rollChances: tftData.rollchances,
				championPool: tftData.championpool,

			/* Methods */
				/* Settings Related Methods */
					toggleSetting:  this.toggleSetting,
					preventEvent: this.preventEvent,
		
				/* Champion Grid Related Methods */
					onChampionHover: this.onChampionHover,
					onTraitHover: this.onTraitHover,
					onChampionClick: this.onChampionClick,
					addTraitToChampion: this.addTraitToChampion,

				/* Item Grid Related Methods */
					onItemHover: this.onItemHover,
					onItemClick: this.onItemClick
		};



		// let url = '' + window.location.href;
		// if ( !(url.indexOf("localhost") >= 0 || url.indexOf(WEBSITE_URL) >= 0)  ) {
		//   console.log("Yo wtf u doin?");
		//   window.location.assign("http://" + WEBSITE_URL + "/");
		// }

		// TODO axios request latest league patch for icon url

	}

  	render() {

		return (
			<Router>
				<Fullscreen
					enabled={this.state.isFullScreen}
					onChange={isFullScreen => this.setState({isFullScreen})}
				>
					<div className="full-screenable-node">
						<Navbar bg={BG} variant={VARIANT} expand="xl" style={{ boxShadow: '0px 2px 5px #000000'}}>
							<Navbar.Brand style={{ marginLeft: "15%"}}>
								<a href={"http://" + WEBSITE_URL}>
									<img src={logo} width="35" height="35" alt="Logo" />
									<b>{' TFT CheatSheet'}</b>
								</a>
							</Navbar.Brand>

							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: "10%"}}>
								<Nav className="mr-auto">
									<Nav.Link as={Link} variant="light" to="/multiview"><b>Multiview</b></Nav.Link>
									<Nav.Link as={Link} variant="light" to="/items"><b>Items</b></Nav.Link>
									<Nav.Link as={Link} variant="light" to="/champions"><b>Champions</b></Nav.Link>
									<Nav.Link as={Link} variant="light" to="/pool"><b>Pool</b></Nav.Link>
								</Nav>

								<Nav>
									<Nav.Link as={Link} variant="light" to="/about"><b>About</b></Nav.Link>
									<Nav.Link as={Link} variant="light" to="/contact"><b>Contact</b></Nav.Link>
									<Navbar.Text style={{ color: "rgb(223, 105, 26)", marginLeft: "20px"}}><b>Patch {tftData.patchVersion}</b></Navbar.Text>
									{/* <Form inline style={{marginLeft: "20px"}}><Form.Check id="toggleIsFullScreen" type="checkbox" className="custom-switch" custom="true" label="Go Fullscreen" checked={this.state.isFullScreen} onChange={(e) => this.toggleSetting("isFullScreen")} /></Form> */}
								</Nav>
							</Navbar.Collapse>
						</Navbar>

						{/* <div>
							<div style={{ width: "100%", height:"100%"}}>
							<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0x 0px 0px 0px" }}>
								<iframe style={{marginTop: "25px"}} frameBorder="0" border="0" width="320" height="50" title="Amazon" src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=288&l=ez&f=ifr&linkID=16a5d25b2b5cdbac352adcd7eddf3054&t=tftcheatsheet-21&tracking_id=tftcheatsheet-21"></iframe>
							</div>
							</div>
						</div> */}

						<Switch>
							<Route exact path="/" render={(props) => <ItemGridPage {...props}
									{...this.state}
								/>}
							/>
							<Route exact path="/items" render={(props) => <ItemGridPage {...props}
									{...this.state}
								/>}
							/>
							<Route exact path="/champions" render={(props) => <ChampionGridPage {...props}
									{...this.state}
								/>}
							/>
							<Route exact path="/pool" render={(props) => <PoolTablePage {...props}
									{...this.state}
								/>}
							/>
							<Route exact path="/multiview" render={(props) => <MultiViewPage {...props}
									{...this.state}
								/>}
							/>
							<Route exact path="/about" render={(props) => <AboutPage {...props}
							
								/>}
							/>
							<Route exact path="/contact" render={(props) => <ContactPage {...props}
							
								/>}
							/>
							<Route exact path="/sitemap.xml" onEnter={reloadWindow} />
							<Route exact path="/robots.txt" onEnter={reloadWindow} />
							<Route render={(props) => <ItemGridPage {...props}
							
								/>}
							/>
						</Switch>
					</div>
				</Fullscreen>
			</Router>
		);
	}



	/* Dynamic Image Import */

	importImages(imageContext) {
		let images = {};
		imageContext.keys().forEach((imageName) => {
			let trimmedFileName = imageName.replace('./', '').replace('.png', '');
			images[trimmedFileName] = imageContext(imageName);
		});
		return images;
	}



	/* Settings */

	toggleSetting(key) {
		localStorage.setItem(key, !this.state[key]);
		this.setState({
			[key]: !this.state[key]
		});
	}

	preventEvent(e) {
		e.preventDefault();
	}



	/* Champion Grid */
	
	onChampionHover(champion, x, y) {
		if (champion === null) {
			this.setState({
				hoveredChampion: null
			});
		} else {
			this.setState({
				hoveredChampion: champion
			});
		}
	}

	onTraitHover(classOrOrigin, x, y) {
		if (classOrOrigin === null) {
			this.setState({
				hoveredClassOrOrigin: null
			});
		} else {
			this.setState({
				hoveredClassOrOrigin: classOrOrigin
			});
		}
	}

	onChampionClick(e, champion) {
		e.preventDefault();

		if (e.type === 'click') {
			this.toggleChampionSelection(champion);
		}
	}
	
	toggleChampionSelection(champion) {
		let isChampionSelected = {...this.state.isChampionSelected};
		let traitsSelectedChampionsCount = {...this.state.traitsSelectedChampionsCount};
		let traitSynergyInfo = {...this.state.traitSynergyInfo};

		if (isChampionSelected[champion.name]) { // is selected, got unselected, remove
			for (let className of champion.classes) {
				traitsSelectedChampionsCount[className] = traitsSelectedChampionsCount[className]-1;
			}
			for (let originName of champion.origins) {
				traitsSelectedChampionsCount[originName] = traitsSelectedChampionsCount[originName]-1;
			}
		} else { // is not selected, got selected, add
			for (let className of champion.classes) {
				traitsSelectedChampionsCount[className] = traitsSelectedChampionsCount[className]+1;
			}
			for (let originName of champion.origins) {
				traitsSelectedChampionsCount[originName] = traitsSelectedChampionsCount[originName]+1;
			}
		}
		for (let className of champion.classes) {
			traitSynergyInfo[className] = this.getSynergyInfo(className, traitsSelectedChampionsCount[className], this.state.traitData[className]);
		}
		for (let originName of champion.origins) {
			traitSynergyInfo[originName] = this.getSynergyInfo(originName, traitsSelectedChampionsCount[originName], this.state.traitData[originName]);
		}
		isChampionSelected[champion.name] = !isChampionSelected[champion.name];
		
		let selectedChampionsByTier = [];
		for (let championName in isChampionSelected) {
			if (isChampionSelected[championName]) {
				selectedChampionsByTier.push(this.state.championsByName[championName]);
			}
		}
		selectedChampionsByTier = selectedChampionsByTier.sort((champion1, champion2) => {
			if (champion1.tier > champion2.tier) {
				return -1;
			} else if (champion1.tier < champion2.tier) {
				return 1;
			}
			return 0;
		});

		let selectedChampionsCount;
		if (isChampionSelected[champion.name]) { // if true, then champion is now selected and vise versa
			selectedChampionsCount = this.state.selectedChampionsCount+1;
		} else {
			selectedChampionsCount = this.state.selectedChampionsCount-1;
		}

		this.setState({
			isChampionSelected: isChampionSelected,
			selectedChampionsCount: selectedChampionsCount,
			selectedChampionsByTier: selectedChampionsByTier,
			traitsSelectedChampionsCount: traitsSelectedChampionsCount,
			traitSynergyInfo: traitSynergyInfo
		})
	}

	addTraitToChampion(champion, traitName) {
		if (this.state.classNames.indexOf(traitName) >= 0) {
			if (champion.classes.indexOf(traitName) < 0) {
				// add class
				
				let championNew = this.state.championsByName[champion.name];
				championNew.classes.push(traitName);

				let championsByName = {...this.state.championsByName};
				championsByName[champion.name] = championNew;

				let traitsSelectedChampionsCount = {...this.state.traitsSelectedChampionsCount};
				if (this.state.isChampionSelected[champion.name]) {
					traitsSelectedChampionsCount[traitName] = traitsSelectedChampionsCount[traitName]+1;
				}

				let traitSynergyInfo = {...this.state.traitSynergyInfo};
				traitSynergyInfo[traitName] = this.getSynergyInfo(traitName, traitsSelectedChampionsCount[traitName], this.state.traitData[traitName]);

				this.setState({
					championsByName: championsByName,
					traitsSelectedChampionsCount: traitsSelectedChampionsCount,
					traitSynergyInfo: traitSynergyInfo,
					grid: this.createGrid(championsByName, this.state.classNames, this.state.originNames)
				});

			} else {
				// remove class
				
				let championNew = this.state.championsByName[champion.name];
				championNew.classes.splice(championNew.classes.indexOf(traitName), 1);

				let championsByName = {...this.state.championsByName};
				championsByName[champion.name] = championNew;

				let traitsSelectedChampionsCount = {...this.state.traitsSelectedChampionsCount};
				if (this.state.isChampionSelected[champion.name]) {
					traitsSelectedChampionsCount[traitName] = traitsSelectedChampionsCount[traitName]-1;
				}

				let traitSynergyInfo = {...this.state.traitSynergyInfo};
				traitSynergyInfo[traitName] = this.getSynergyInfo(traitName, traitsSelectedChampionsCount[traitName], this.state.traitData[traitName]);

				this.setState({
					championsByName: championsByName,
					traitsSelectedChampionsCount: traitsSelectedChampionsCount,
					traitSynergyInfo: traitSynergyInfo,
					grid: this.createGrid(championsByName, this.state.classNames, this.state.originNames)
				});
			}

		} else if (this.state.originNames.indexOf(traitName) >= 0) {
			if (champion.origins.indexOf(traitName) < 0) {
				// add origin
				
				let championNew = this.state.championsByName[champion.name];
				championNew.origins.push(traitName);

				let championsByName = {...this.state.championsByName};
				championsByName[champion.name] = championNew;

				let traitsSelectedChampionsCount = {...this.state.traitsSelectedChampionsCount};
				if (this.state.isChampionSelected[champion.name]) {
					traitsSelectedChampionsCount[traitName] = traitsSelectedChampionsCount[traitName]+1;
				}

				let traitSynergyInfo = {...this.state.traitSynergyInfo};
				traitSynergyInfo[traitName] = this.getSynergyInfo(traitName, traitsSelectedChampionsCount[traitName], this.state.traitData[traitName]);

				this.setState({
					championsByName: championsByName,
					traitsSelectedChampionsCount: traitsSelectedChampionsCount,
					traitSynergyInfo: traitSynergyInfo,
					grid: this.createGrid(championsByName, this.state.classNames, this.state.originNames)
				});

			} else {
				// remove origin
				
				let championNew = this.state.championsByName[champion.name];
				championNew.origins.splice(championNew.origins.indexOf(traitName), 1);

				let championsByName = {...this.state.championsByName};
				championsByName[champion.name] = championNew;

				let traitsSelectedChampionsCount = {...this.state.traitsSelectedChampionsCount};
				if (this.state.isChampionSelected[champion.name]) {
					traitsSelectedChampionsCount[traitName] = traitsSelectedChampionsCount[traitName]-1;
				}

				let traitSynergyInfo = {...this.state.traitSynergyInfo};
				traitSynergyInfo[traitName] = this.getSynergyInfo(traitName, traitsSelectedChampionsCount[traitName], this.state.traitData[traitName]);

				this.setState({
					championsByName: championsByName,
					traitsSelectedChampionsCount: traitsSelectedChampionsCount,
					traitSynergyInfo: traitSynergyInfo,
					grid: this.createGrid(championsByName, this.state.classNames, this.state.originNames)
				});
			}
		}
	}

	getSynergyInfo(traitName, selectedChampions, traitData) {
		let synergy = 4;
		let effectAmount = traitData.effects.length;
		for (let i = effectAmount-1; i >= 0 ; i--) {
			if (traitName === "Ninja") {
				if (selectedChampions === traitData.effects[i].requiredUnits) {
					synergy = i;
					break;
				}
			} else {
				if (selectedChampions >= traitData.effects[i].requiredUnits) {
					synergy = i;
					break;
				}
			}
		}
		if (synergy !== 4) {
			synergy = effectAmount-synergy;
		}

		let remainingRequiredUnits;
		let totalRequiredUnits;
		if (synergy === 4) {
			remainingRequiredUnits = traitData.effects[0].requiredUnits - selectedChampions; // units required till first synergy
			totalRequiredUnits = traitData.effects[0].requiredUnits;
		} else if (synergy === 1) {
			remainingRequiredUnits = 0; // already at max synergy
			totalRequiredUnits = 1;
		} else if (synergy === 2) {
			remainingRequiredUnits = traitData.effects[effectAmount-1].requiredUnits - selectedChampions; // units required till third synergy
			totalRequiredUnits = traitData.effects[effectAmount-1].requiredUnits - (traitData.effects[effectAmount-2].requiredUnits || 0);
		} else if (synergy === 3) {
			remainingRequiredUnits = traitData.effects[effectAmount-2].requiredUnits - selectedChampions; // units required till second synergy
			totalRequiredUnits = traitData.effects[effectAmount-2].requiredUnits - (traitData.effects[effectAmount-3].requiredUnits || 0);
		} else {
			remainingRequiredUnits = 0; // just for safety
			totalRequiredUnits = 1; // just for safety
		}

		let synergyLevelInfo = {
			priority: 1 - (remainingRequiredUnits / totalRequiredUnits),
			color: "rgba(" + synergyBackgroundColors[synergy].rgb + ", " + (synergyBackgroundColors[synergy].alpha - (remainingRequiredUnits * synergyBackgroundColors[synergy].offset)) + ")",
			synergy: synergy
		}
		
		return synergyLevelInfo;
	}

	createGrid(championsByName, classes, origins) {
		let grid = [];

		// TODO create seperate champion collection and save their grid coordinate pairs, then just add, remove and check them.
		// can be used to update grid and not create a new grid every time. 
		// can also save more data in the grid itself, like if a champions is being hoevered, highlight all occurencers of that champion 

		// initialize grid
		for (let className of classes) {
			let classIndex = classes.indexOf(className);
			grid[classIndex] = [];
			for (let originName of origins) {
				let originIndex = origins.indexOf(originName);
				grid[classIndex][originIndex] = [];
			}
		}

		for (let championName in championsByName) {
			let champion = championsByName[championName];
			for (let className of champion.classes) {
				for (let originName of champion.origins) {
					let classIndex = classes.indexOf(className);
					let originIndex = origins.indexOf(originName);
					grid[classIndex][originIndex].push(champion);
				}
			}
		}
		return grid;
	}



	/* Item Grid */

	onItemHover(itemName, x, y) {
		if (itemName === null) {
			this.setState({
				hoveredItem: null
			})
		} else {
			let item = {
				itemName: itemName,
				x: x,
				y: y
			}
			this.setState({
				hoveredItem: item
			})
		}
	}

	onItemClick(e, itemName) {
		e.preventDefault();

		if (tftData.baseItems[itemName] !== undefined) {
			if (e.type === 'click') {
				let selectedBaseItems = {...this.state.selectedBaseItems};
				selectedBaseItems[itemName] = selectedBaseItems[itemName]+1;
				this.setState({
					selectedBaseItems: selectedBaseItems
				});
			} else if (e.type === 'contextmenu') {
				let selectedBaseItems = {...this.state.selectedBaseItems};
				selectedBaseItems[itemName] = Math.max(0, selectedBaseItems[itemName]-1)
				this.setState({
					selectedBaseItems: selectedBaseItems
				});
			}
			
		} else if (tftData.advancedItems[itemName] !== undefined) {
			if (e.type === 'click') {
				let selectedBaseItems = {...this.state.selectedBaseItems};
				for (let requiredItem of this.state.recipesByItems[itemName]) {
					selectedBaseItems[requiredItem] = Math.max(0, selectedBaseItems[requiredItem]-1);
				}
				this.setState({
					selectedBaseItems: selectedBaseItems
				});
			} else if (e.type === 'contextmenu') {
				// let selectedBaseItems = {...this.state.selectedBaseItems};
				// for (let requiredItem of this.state.recipesByItems[itemName]) {
				//     selectedBaseItems[requiredItem] = selectedBaseItems[requiredItem]+1;
				// }
				// this.setState({
				//     selectedBaseItems: selectedBaseItems
				// });
			}
		}
	}
}

export default withRouter(App);