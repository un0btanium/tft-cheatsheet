import React, {Component} from 'react';

import { Image, Dropdown, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


let borderColorsByTier = [
	"#FFFFFF",
	"#00e33d",
	"#0099ff",
	"#cc00ff",
	"#ffdd00"
]

let pictureStretch = [
	"100%",
	"180%",
	"160%",
	"140%",
	"120%"
]

let textIndent = [
	"0%",
	"25%",
	"15%",
	"5%",
	"2%"
]

export default class ChampionContainer extends Component {

	constructor(props) {
		super(props);

		this.toggleContextMenu = this.toggleContextMenu.bind(this);
		this.onChampionHover = this.onChampionHover.bind(this);

		let extraOriginsAndClasses = [
			{
				name: "Assassin",
				item: this.props.advancedItems["Youmuu's Ghostblade"]
			},
			{
				name: "Sorcerer",
				item: this.props.advancedItems["Yuumi"]
			},
			{
				name: "Blademaster",
				item: this.props.advancedItems["Blade of the Ruined King"]
			},
			{
				name: "Demon",
				item: this.props.advancedItems["Darkin"]
			},
			{
				name: "Knight",
				item: this.props.advancedItems["Knight's Vow"]
			},
			{
				name: "Glacial",
				item: this.props.advancedItems["Frozen Mallet"]
			}
		];

		this.state = {
			showContextMenu: null,
			showChampionTooltip: null,
			extraOriginsAndClasses: extraOriginsAndClasses
		}

	}

	render () {

		let champions = this.props.champions;
		
		if (champions === null || champions === undefined || champions.length === 0) {

			let intensity = Math.min(255, (Math.max(this.props.selectedOrigins[this.props.originName], this.props.selectedClasses[this.props.className]))*40);

			let backgroundColor;
			if (intensity === 0) {
				backgroundColor = "#000000";
			} else {
				backgroundColor = "rgb(" + intensity + ", 50, 50)";
			}

			return <div onContextMenu={this.preventEvent} onClick={this.preventEvent} style={{ display: "block", width: "100%", height: "100%", background: backgroundColor}}>
				
				<div style={{ visibility: "hidden", maxWidth: "100%", overflow: "hidden", pointerEvents: "none" }}>
					<Image
						style={{ maxWidth: "initial", margin: "0", padding: "0", pointerEvents: "none" }}
						width={"100%"}
						height={"100%"}
						src={"http://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/Ashe.png"}
						alt={""}
						onDragStart={this.preventEvent}
						draggable={false}
					/>
				</div>
		</div>
		} else {

			let championImages = champions.map((champion, i) => {


				let src;
				if (champion.icon !== null && champion.icon !== undefined) {
					src = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/" + champion.icon + ".png";
				} else {
					src = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/" + champion.name + ".png";
				}

				let championPictureBorder;
				if (this.props.showChampionTierBorder) {
					championPictureBorder = "solid 3px " + borderColorsByTier[champion.tier-1]; 
				} else {
					championPictureBorder = "solid 0px " + borderColorsByTier[champion.tier-1]; 
				}
				let championPictureStretch = pictureStretch[Math.min(champions.length-1, pictureStretch.length-1)];
				let championPictureWidth = (1/champions.length)*100 + "%";
				let championPicturexOffsetInPercent = (i*(1/champions.length))*100 + "%";
				let championPictureTextIndent = textIndent[Math.min(champions.length-1, textIndent.length-1)];
				let championPictureTextIndentNegative = "-" + championPictureTextIndent;

				let overlayName = "champion-image-default";
				if (this.props.selectedChampions[champion.name]) {
					overlayName = "champion-image-selected";
				} else if (this.props.showChampionTierOverlay) {
					overlayName = "champion-image-tier"+champion.tier;
				}
				
				let tooltip = null;
				if (this.props.showChampionTooltip && this.state.showChampionTooltip && this.state.showChampionTooltip.name === champion.name) {
					
					tooltip = <div style={{ position: "relative", display: "inline-block", zIndex: "100" }}>
						<div style={{ position: "absolute", zIndex: "1", whiteSpace: "nowrap", fontSize: "14px", bottom: "20px", width: "700px", left: "-320px", padding: "15px", background: "rgba(0,0,0,0.85)", border: "solid 3px " + borderColorsByTier[champion.tier-1], color: "#FFFFFF" }}>
							<h5 style={{textAlign: "center",}}><b>{this.state.showChampionTooltip.name}</b></h5>
							<h6 style={{textAlign: "center",}}><b>{this.state.showChampionTooltip.specialAbility.name}</b></h6>
							<h6 style={{textAlign: "center", whiteSpace: "normal"}}><b>{this.state.showChampionTooltip.specialAbility.originalDescription}</b></h6>
							<Row>
								<Col sm={5}></Col>
								<Col sm={1}>Tier</Col>
								<Col sm={3}>{champion.tier}</Col>
							</Row>
							<Row>
								<Col sm={5}></Col>
								<Col sm={1}>{champion.classes.length > 1 ? "Classes" : "Class"}</Col>
								<Col sm={3}>{champion.classes.join(", ")}</Col>
							</Row>
							<Row>
								<Col sm={5}></Col>
								<Col sm={1}>{champion.origins.length > 1 ? "Origins" : "Origin"}</Col>
								<Col sm={3}>{champion.origins.join(", ")}</Col>
							</Row>
							
							<hr style={{ margin: "7px 0px 7px 0px", borderColor: borderColorsByTier[champion.tier-1]}}/>
							<Row>
								<Col sm={1}><h6><b></b></h6></Col>
								<Col sm={1}><h6><b>Champion Stats (1/2/3 stars)</b></h6></Col>
								<Col sm={5}><h6><b></b></h6></Col>
								<Col sm={1}><h6><b>Ability Stats (0/1/2/3/4 stars)</b></h6></Col>
							</Row>
							
							<Row>
								<Col sm={3}>Healthpoints</Col>
								<Col sm={2}>{champion.maxHealthpoints}/{this.roundNumber(champion.maxHealthpoints*champion.hpScaleFactor)}/{this.roundNumber(champion.maxHealthpoints*champion.hpScaleFactor*champion.hpScaleFactor)}</Col>
								<Col sm={1}></Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 0 ? champion.specialAbility.variables[0].name : ""}</Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 0 ? champion.specialAbility.variables[0].values.join("/") : ""}</Col>
							</Row>
							<Row>
								<Col sm={3}>Mana</Col>
								<Col sm={2}>{champion.maxMana}</Col>
								<Col sm={1}></Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 1 ? champion.specialAbility.variables[1].name : ""}</Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 1 ? champion.specialAbility.variables[1].values.join("/") : ""}</Col>
							</Row>
							<Row>
								<Col sm={3}>Attack Damage</Col>
								<Col sm={2}>{champion.damage}/{this.roundNumber(champion.damage*champion.damageScaleFactor)}/{this.roundNumber(champion.damage*champion.damageScaleFactor*champion.damageScaleFactor)}</Col>
								<Col sm={1}></Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 2 ? champion.specialAbility.variables[2].name : ""}</Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 2 ? champion.specialAbility.variables[2].values.join("/") : ""}</Col>							
							</Row>
							<Row>
								<Col sm={3}>Armor</Col>
								<Col sm={2}>{champion.armor}</Col>
								<Col sm={1}></Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 3 ? champion.specialAbility.variables[3].name : ""}</Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 3 ? champion.specialAbility.variables[3].values.join("/") : ""}</Col>
							</Row>
							<Row>
								<Col sm={3}>Magic Resistance</Col>
								<Col sm={2}>{champion.magicResistance}</Col>
								<Col sm={1}></Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 4 ? champion.specialAbility.variables[4].name : ""}</Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 4 ? champion.specialAbility.variables[4].values.join("/") : ""}</Col>
							</Row>
							<Row>
								<Col sm={3}>Base Attack Speed</Col>
								<Col sm={2}>{champion.attackSpeed}</Col>
								<Col sm={1}></Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 5 ? champion.specialAbility.variables[5].name : ""}</Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 5 ? champion.specialAbility.variables[5].values.join("/") : ""}</Col>
							</Row>
							<Row>
								<Col sm={3}>Auto Attack Range</Col>
								<Col sm={2}>{champion.range}</Col>
								<Col sm={1}></Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 6 ? champion.specialAbility.variables[6].name : ""}</Col>
								<Col sm={3}>{champion.specialAbility.variables.length > 6 ? champion.specialAbility.variables[6].values.join("/") : ""}</Col>
							</Row>
							
						</div>
					</div>
				}


				let contextMenu = null;
				if (this.state.showContextMenu && this.state.showContextMenu.name === champion.name) {
					
					let dropDownEntries = [];
					for (let extra of this.state.extraOriginsAndClasses) {
						if (champion.defaultClasses.indexOf(extra.name) === -1 && champion.defaultOrigins.indexOf(extra.name) === -1) {
							let src;
							
								if (extra.item.img === null || extra.item.img === undefined) {
									src = this.props.itemImages[extra.item.altimg];
								} else {
									src = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/item/" + extra.item.img + ".png"; // TODO version number
								}

							dropDownEntries.push(
								<Dropdown.Item
									key={"Extra" + champion.name + extra.name}
									onClick={(e) => { e.preventDefault(); this.props.addClassOrOriginToChampion(champion, extra.name); this.setState({ showContextMenu: false}); }}
								>
									{(champion.classes.indexOf(extra.name) >= 0 || champion.origins.indexOf(extra.name) >= 0) ? <FontAwesomeIcon style={{marginRight: "20px", color: "lightgreen"}}icon={faCheck} /> : <FontAwesomeIcon style={{visibility: "hidden", marginRight: "20px"}} icon={faCheck} />}
									<div style={{ display: "inline"}}>
										<Image
											width={"20%"}
											height={"20%"} 
											src={src}
											alt={extra.item.altimg}
											// onClick={(e) => this.props.onItemClick(e, this.props.itemName)}
											// onContextMenu={(e) => this.props.onItemClick(e, this.props.itemName)}
											onDragStart={this.preventEvent}
											draggable={false}
											// onMouseEnter={(e) => this.props.onItemHover(this.props.itemName, this.props.x, this.props.y)}
											// onMouseLeave={(e) => this.props.onItemHover(null)}
										/>
									</div>
									<span style={{ marginLeft: "15px"}}>{extra.name}</span>
									
								</Dropdown.Item>
							);
						}
					}

					contextMenu = <Dropdown.Menu show onContextMenu={this.preventEvent} >
						<Dropdown.Header>Add class or origin to champion</Dropdown.Header>
						<Dropdown.Divider />
						{dropDownEntries}
					</Dropdown.Menu>
				}


				return <div key={"champion"+champion.name} style={{ position: "absolute", top: "0px", left: championPicturexOffsetInPercent, width: "100%", height: "100%"}}>
					<div className={overlayName} style={{ position: "absolute", top: "0px", left: "0px", width: championPictureWidth, height: "100%", overflow: "hidden", border: championPictureBorder}}>
						<div style={{ width: championPictureStretch, height: "100%", maxWidth: championPictureStretch, textIndent: championPictureTextIndentNegative }}>
							
							<Image
								style={{ textIndent: championPictureTextIndent, margin: "0", padding: "0" }}
								width={"100%"}
								height={"100%"}
								src={src}
								alt={champion.name}
								onClick={(e) => this.props.onChampionClick(e, champion)}
								onContextMenu={(e) => { this.toggleContextMenu(e, champion)}}
								onDragStart={this.preventEvent}
								draggable={false}
								onMouseEnter={(e) => this.onChampionHover(champion)}
								onMouseLeave={(e) => this.onChampionHover(null)}
							/>
						</div>
					</div>
					<div style={{ position: "absolute", top: "70%", left: "70%"}}>
						{contextMenu}
					</div>
					{tooltip}
				</div>
				
			});

			
			let srcHiddenImage;
			if (champions[0].icon !== null && champions[0].icon !== undefined) {
				srcHiddenImage = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/" + champions[0].icon + ".png";
			} else {
				srcHiddenImage = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/" + champions[0].name + ".png";
			}

			return <div style={{ display: "block", width: "100%", height: "100%", backgroundColor: "#000000"}}>
				<div style={{ visibility: "hidden", maxWidth: "100%", textIndent: "-25%", overflow: "hidden"}}>
					<Image
						style={{ maxWidth: "initial", margin: "0", padding: "0", pointerEvents: "none" }}
						width={"100%"}
						height={"100%"}
						src={srcHiddenImage}
						alt={""}
						onDragStart={this.preventEvent}
						draggable={false}
					/>
				</div>
				
				{championImages}
				
			</div>
		}
	}

	toggleContextMenu(e, champion) {
		if (this.state.showContextMenu === null || this.state.showContextMenu.name !== champion.name) {
			this.preventEvent(e);
			this.setState({
				showContextMenu: champion
			});
		} else {
			this.preventEvent(e);
			this.setState({
				showContextMenu: null
			});
		}
	}

	onChampionHover(champion) {
		if (this.props.showChampionTooltip) {
			this.setState({
				showChampionTooltip: champion
			});
		}
	}

	preventEvent(e) {
		e.preventDefault();
	}

	roundNumber(number) {
		return parseFloat((Math.round(number * 100)/100).toFixed(2));
	}
}
