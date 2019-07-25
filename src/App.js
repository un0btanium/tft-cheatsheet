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
import MultiViewPage from './components/pages/multi-view-page.component';
import AboutPage from './components/pages/about-page.component';
import ContactPage from './components/pages/contact-page.component';

import tftData from './tft-data/data.js';

import baseItems from './itemdata/base-items';
import advancedItems from './itemdata/advanced-items';
import itemRecipes from './itemdata/item-recipes';


const BG = "dark"; // primary, dark, light
const VARIANT = "dark"; // dark, light

const reloadWindow = () => window.location.reload();


const WEBSITE_URL = "tft-cheatsheet.com";
const PATCH_VERSION = "9.14.1";

class App extends Component {


  	constructor(props) {
		super(props);


		/* Classes and Origins  */
		let selectedClasses = {};
		let selectedOrigins = {};
		let origins = [];
		let classes = [];
		for (let championName in tftData.champions) {
			let champion = tftData.champions[championName];
			for (let className of champion.classes) {
				if (selectedClasses[className] === null || selectedClasses[className] === undefined) {
					selectedClasses[className] = 0;
					classes.push(className);
				}
			}
			for (let originName of champion.origins) {
				if (selectedOrigins[originName] === null || selectedOrigins[originName] === undefined) {
					selectedOrigins[originName] = 0;
					origins.push(originName);
				}
			}
		}

		
		/* Item Recipes by Name */
		let recipesByItems = {};
		for (let baseItemA in baseItems) {
			for (let baseItemB in baseItems) {
				recipesByItems[itemRecipes[baseItemA][baseItemB]] = [baseItemA, baseItemB];
			}
		}


		/* Dynamically import images from folder */
		let imageContext = require.context('./images/', false, /\.(png)$/);
		let images = this.importImages(imageContext);

		/* Classes and Origins Icons */
		let classIcons = {};
		let originIcons = {};
		for (let className of classes) {
			classIcons[className] = images[className];
		}
		for (let originName of origins) {
			originIcons[originName] = images[originName];
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


		/* Sort Classes and Origins by Alphabetically */
		let sortFunction = function (a, b) {
			if (a < b) {
				return -1;
			} else if (a > b) {
				return 1;
			}
			return 0;
		};
		classes = classes.sort(sortFunction);
		origins = origins.sort(sortFunction);


		/* Selection Champions */
		let selectedChampions = [];
		for (let championName in tftData.champions) {
			let champion = tftData.champions[championName];
			champion["defaultClasses"] = [...champion.classes];
			champion["defaultOrigins"] = [...champion.origins];
			selectedChampions[champion.name] = false;
		}


		/* Champion Grid */
		let championGrid = this.createGrid(tftData.champions, classes, origins);


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
		this.onClassOrOriginHover = this.onClassOrOriginHover.bind(this);
		this.onChampionClick = this.onChampionClick.bind(this);
		this.addClassOrOriginToChampion = this.addClassOrOriginToChampion.bind(this);

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

				classes: classes,
				origins: origins,
				grid: championGrid,

				selectedChampions: selectedChampions,
				selectedChampionsByTier: [],
				selectedClasses: selectedClasses,
				selectedOrigins: selectedOrigins,

				classIcons: classIcons,
				originIcons: originIcons,

			/* Methods */
				/* Settings Related Methods */
					toggleSetting:  this.toggleSetting,
					preventEvent: this.preventEvent,
		
				/* Champion Grid Related Methods */
					onChampionHover: this.onChampionHover,
					onClassOrOriginHover: this.onClassOrOriginHover,
					onChampionClick: this.onChampionClick,
					addClassOrOriginToChampion: this.addClassOrOriginToChampion,

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
								<b>{' ' + WEBSITE_URL}</b>
							</a>
							</Navbar.Brand>

							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: "10%"}}>
								<Nav className="mr-auto">
									<Nav.Link as={Link} variant="light" to="/items"><b>Items</b></Nav.Link>
									<Nav.Link as={Link} variant="light" to="/champions"><b>Champions</b></Nav.Link>
									<Nav.Link as={Link} variant="light" to="/multiview"><b>Multiview</b></Nav.Link>
								</Nav>

								<Nav>
									<Nav.Link as={Link} variant="light" to="/about"><b>About</b></Nav.Link>
									<Nav.Link as={Link} variant="light" to="/contact"><b>Contact</b></Nav.Link>
									<Navbar.Text style={{ color: "rgb(223, 105, 26)", marginLeft: "20px"}}><b>Patch {PATCH_VERSION}</b></Navbar.Text>
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

	onClassOrOriginHover(classOrOrigin, x, y) {
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
		let selectedChampions = {...this.state.selectedChampions};
		let selectedClasses = {...this.state.selectedClasses};
		let selectedOrigins = {...this.state.selectedOrigins};

		if (selectedChampions[champion.name]) { // is selected, got unselected, remove
			for (let className of champion.classes) {
				selectedClasses[className] = selectedClasses[className]-1;
			}
			for (let originName of champion.origins) {
				selectedOrigins[originName] = selectedOrigins[originName]-1;
			}
		} else { // is not selected, got selected, add
			for (let className of champion.classes) {
				selectedClasses[className] = selectedClasses[className]+1;
			}
			for (let originName of champion.origins) {
				selectedOrigins[originName] = selectedOrigins[originName]+1;
			}
		}
		selectedChampions[champion.name] = !selectedChampions[champion.name];
		
		let selectedChampionsByTier = [];
		for (let championName in selectedChampions) {
			if (selectedChampions[championName]) {
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

		this.setState({
			selectedChampions: selectedChampions,
			selectedChampionsByTier: selectedChampionsByTier,
			selectedClasses: selectedClasses,
			selectedOrigins: selectedOrigins
		})
	}

	addClassOrOriginToChampion(champion, classOrOrigin) {
		if (this.state.classes.indexOf(classOrOrigin) >= 0) {
			if (champion.classes.indexOf(classOrOrigin) < 0) {
				// add class
				
				let championNew = this.state.championsByName[champion.name];
				championNew.classes.push(classOrOrigin);

				let championsByName = {...this.state.championsByName};
				championsByName[champion.name] = championNew;

				let selectedClasses = {...this.state.selectedClasses};
				if (this.state.selectedChampions[champion.name]) {
					selectedClasses[classOrOrigin] = selectedClasses[classOrOrigin]+1;
				}

				this.setState({
					championsByName: championsByName,
					selectedClasses: selectedClasses,
					grid: this.createGrid(championsByName, this.state.classes, this.state.origins)
				});

			} else {
				// remove class
				
				let championNew = this.state.championsByName[champion.name];
				championNew.classes.splice(championNew.classes.indexOf(classOrOrigin), 1);

				let championsByName = {...this.state.championsByName};
				championsByName[champion.name] = championNew;

				let selectedClasses = {...this.state.selectedClasses};
				if (this.state.selectedChampions[champion.name]) {
					selectedClasses[classOrOrigin] = selectedClasses[classOrOrigin]-1;
				}

				this.setState({
					championsByName: championsByName,
					selectedClasses: selectedClasses,
					grid: this.createGrid(championsByName, this.state.classes, this.state.origins)
				});
			}

		} else if (this.state.origins.indexOf(classOrOrigin) >= 0) {
			if (champion.origins.indexOf(classOrOrigin) < 0) {
				// add origin
				
				let championNew = this.state.championsByName[champion.name];
				championNew.origins.push(classOrOrigin);

				let championsByName = {...this.state.championsByName};
				championsByName[champion.name] = championNew;

				let selectedOrigins = {...this.state.selectedOrigins};
				if (this.state.selectedChampions[champion.name]) {
					selectedOrigins[classOrOrigin] = selectedOrigins[classOrOrigin]+1;
				}

				this.setState({
					championsByName: championsByName,
					selectedOrigins: selectedOrigins,
					grid: this.createGrid(championsByName, this.state.classes, this.state.origins)
				});

			} else {
				// remove origin
				
				let championNew = this.state.championsByName[champion.name];
				championNew.origins.splice(championNew.origins.indexOf(classOrOrigin), 1);

				let championsByName = {...this.state.championsByName};
				championsByName[champion.name] = championNew;

				let selectedOrigins = {...this.state.selectedOrigins};
				if (this.state.selectedChampions[champion.name]) {
					selectedOrigins[classOrOrigin] = selectedOrigins[classOrOrigin]-1;
				}

				this.setState({
					championsByName: championsByName,
					selectedOrigins: selectedOrigins,
					grid: this.createGrid(championsByName, this.state.classes, this.state.origins)
				});
			}
		}
	}

	createGrid(championsByName, classes, origins) {
		let grid = [];

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

		if (baseItems[itemName] !== undefined) {
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
			
		} else if (advancedItems[itemName] !== undefined) {
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