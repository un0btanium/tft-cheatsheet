import React, {Component} from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';
import ChampionContainer from '../champion-grid/champion-container.component';

export default class ChampionGrid extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			showIconTooltip: null
		}

		this.showIconTooltip = this.showIconTooltip.bind(this);
	}

	render () {

		let colStyle = {width: "100%", height: "100%", padding: "0px"};
		let rowStyle = {padding: "0px", margin: "0px"};

		let grid = this.props.origins.map((originName, posY) => {

			let row = this.props.classes.map((className, posX) => {

				let champions = this.props.grid[posX][posY];

				// is a champ selected, then highlight border
				let finalColStyle;
				let isChampionSelected = false;
				if (champions !== undefined && champions !== null && champions.length !== 0) {
					for (let champion of champions) {
						if (this.props.selectedChampions[champion.name]) {
							isChampionSelected = true;
							break;
						}
					}
				}
				if (isChampionSelected) {
					// finalColStyle = { ...colStyle, border: "solid 3px rgb(232, 198, 7)"}; // golden border
					finalColStyle = { ...colStyle, border: "solid 3px rgb(255, 100, 150)"}; // red border
				} else {
					let intensity = Math.min(255, (Math.max(this.props.selectedOrigins[originName], this.props.selectedClasses[className]))*40);        
					if (intensity === 0) {
						finalColStyle = { ...colStyle, border: "solid 3px rgb(" + intensity + ", 0, 0)"};
					} else {
						finalColStyle = { ...colStyle, border: "solid 3px rgb(" + intensity + ", 50, 50)"};
					}
				}

				if (champions === null || champions === undefined || champions.length === 0) {
					return <Col style={finalColStyle} key={"ChampionCol-" + posX + "-" + posY} onContextMenu={this.preventEvent} onClick={this.preventEvent} >
						<ChampionContainer
							x={posX} y={posY}
							champions={champions}
							advancedItems={this.props.advancedItems}
							itemImages={this.props.itemImages}
							className={className}
							originName={originName}
							selectedChampions={this.props.selectedChampions}
							selectedClasses={this.props.selectedClasses}
							selectedOrigins={this.props.selectedOrigins}
							showChampionTierBorder={this.props.championGridShowChampionTierBorder}
							showChampionTierOverlay={this.props.championGridShowChampionTierOverlay}
							showChampionTooltip={this.props.championGridShowChampionTooltip}
							onChampionHover={this.props.onChampionHover}
							onChampionClick={this.props.onChampionClick}
							addClassOrOriginToChampion={this.props.addClassOrOriginToChampion}
						/>
					</Col>
				} else {
					return <Col style={finalColStyle} key={"ChampionCol-" + posX + "-" + posY}>
						<ChampionContainer
							x={posX} y={posY}
							champions={champions}
							advancedItems={this.props.advancedItems}
							itemImages={this.props.itemImages}
							className={className}
							originName={originName}
							selectedChampions={this.props.selectedChampions}
							selectedClasses={this.props.selectedClasses}
							selectedOrigins={this.props.selectedOrigins}
							showChampionTierBorder={this.props.championGridShowChampionTierBorder}
							showChampionTierOverlay={this.props.championGridShowChampionTierOverlay}
							showChampionTooltip={this.props.championGridShowChampionTooltip}
							onChampionHover={this.props.onChampionHover}
							onChampionClick={this.props.onChampionClick}
							addClassOrOriginToChampion={this.props.addClassOrOriginToChampion}
						/>
					</Col>
				}
			});


			let tooltip = null;
			if (this.props.championGridShowOriginAndClassTooltips && this.state.showIconTooltip !== null && this.state.showIconTooltip === originName) {
				let unitRequirements = [];
				for (let effect of this.props.originsData[originName].effects) {
					let unitRequirement = <Row key={originName + "Units" + effect.requiredUnits}>
						<Col sm={1}></Col>
						<Col sm={2}>{effect.requiredUnits}+ Units</Col>
						<Col style={{whiteSpace: "normal"}} sm={9}>{effect.effect}</Col>
					</Row>
					unitRequirements.push(unitRequirement);
				}
				tooltip = <div style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", fontSize: "14px", pointerEvents: "none"}}>
					<div style={{ position: "relative", display: "inline-block", zIndex: "100" }}>
						<div style={{ position: "absolute", zIndex: "1", whiteSpace: "nowrap", top: "-75px", border: "solid 3px #FFFFFF", minWidth: "500px", left: "56px", padding: "15px", background: "rgba(0,0,0,0.9)", color: "#FFFFFF" }}>
							<h5 style={{textAlign: "center"}}><b>{originName}</b></h5>
							<hr style={{ margin: "7px 0px 7px 0px", borderColor: "#FFFFFF"}}/>
							<h6 style={{textAlign: "center", whiteSpace: "normal"}}><b>{this.props.originsData[originName].description}</b></h6>
							<hr style={{ margin: "7px 0px 7px 0px", borderColor: "#FFFFFF"}}/>
							{unitRequirements}
						</div>
					</div>
				</div>
			}

			let originColumn = <Col 
				style={{...colStyle, borderRight: "solid 4px #FFFFFF"}}
				key={"OriginCol"+originName}
				onMouseEnter={(e) => this.showIconTooltip(originName)}
				onMouseLeave={(e) => this.showIconTooltip(null)}
			>
				<Image
					style={{ margin: "0px", padding: "9px" }}
					width={"100%"}
					height={"100%"}
					src={this.props.originIcons[originName]}
					alt={originName}
					onDragStart={this.props.preventEvent}
					draggable={false}
				/>
				{tooltip}
			</Col>

			return <Row style={rowStyle} key={"ChampionRow-" + posY} onContextMenu={this.props.preventEvent} onClick={this.props.preventEvent}>{originColumn}{row}</Row>

		});


		let classesRow = this.props.classes.map((className, i) => {

			let tooltip = null;
			if (this.props.championGridShowOriginAndClassTooltips && this.state.showIconTooltip !== null && this.state.showIconTooltip === className) {
				let unitRequirements = [];
				for (let effect of this.props.classesData[className].effects) {
					let unitRequirement = <Row key={className + "Units" + effect.requiredUnits}>
						<Col sm={1}></Col>
						<Col sm={2}>{effect.requiredUnits}+ Units</Col>
						<Col style={{whiteSpace: "normal"}} sm={9}>{effect.effect}</Col>
					</Row>
					unitRequirements.push(unitRequirement);
				}
				let tooltipStyle = { position: "absolute", bottom: "-41px", width: "100%", height: "100%", fontSize: "14px", pointerEvents: "none"};
				tooltipStyle.left = -200 + -(i-4)*61 + "px";
				tooltip = <div style={tooltipStyle}>
					<div style={{ position: "relative", display: "inline-block", zIndex: "100" }}>
						<div style={{position: "absolute", zIndex: "10", whiteSpace: "nowrap", minWidth: "500px", border: "solid 3px #FFFFFF", padding: "15px", background: "rgba(0,0,0,0.9)", color: "#FFFFFF"}}>
							<h5 style={{textAlign: "center"}}><b>{className}</b></h5>
							<hr style={{ margin: "7px 0px 7px 0px", borderColor: "#FFFFFF"}}/>
							<h6 style={{textAlign: "center", whiteSpace: "normal"}}><b>{this.props.classesData[className].description}</b></h6>
							<hr style={{ margin: "7px 0px 7px 0px", borderColor: "#FFFFFF"}}/>
							{unitRequirements}
						</div>
					</div>
				</div>
			}

			return <Col
				style={{...colStyle, borderBottom: "solid 4px #FFFFFF"}}
				key={"Class"+className}
				onMouseEnter={(e) => this.showIconTooltip(className)}
				onMouseLeave={(e) => this.showIconTooltip(null)}>
					<Image
						style={{ margin: "0px", padding: "2px 10px 7px 10px" }}
						width={"100%"}
						height={"100%"}
						src={this.props.classIcons[className]}
						alt={className}
						onDragStart={this.props.preventEvent}
						draggable={false}
					/>
					{tooltip}
			</Col>
		});


		return <div className="disableSelection" style={{backgroundColor: "#4e5d6c", borderRadius: "5px", width: "100%", boxShadow: '2px 2px 5px #000000'}}>
			<div className="fadeIn" style={{ display: "flex", padding: "0px", margin: "0px" }}>
				<Container style={{ padding: "0px", backgroundColor: "#000000", margin: "12px", border: "solid 3px #000000", borderRadius: "5px"}}>
					<Row style={rowStyle} key="ClassesRow">
						<Col style={{...colStyle, visibility: "hidden"}} key={"HiddenCornerCol"}>
							<Image
								style={{ margin: "0px", padding: "2px 10px 7px 10px"  }}
								width={"100%"}
								height={"100%"}
								src={this.props.originIcons["Demon"]}
								alt={"HiddenCornerImage"}
								onDragStart={this.props.preventEvent}
								draggable={false}
								// onMouseEnter={(e) => this.props.onItemHover(this.props.itemName, this.props.x, this.props.y)}
								// onMouseLeave={(e) => this.props.onItemHover(null)}
							/>
						</Col>
						{classesRow}
					</Row>

					{grid}
				</Container>
			</div>
		</div>
	}


	showIconTooltip(classOrOrigin) {
		if (this.props.championGridShowOriginAndClassTooltips) {
			this.setState({
				showIconTooltip: classOrOrigin
			})
		}
	}

}


