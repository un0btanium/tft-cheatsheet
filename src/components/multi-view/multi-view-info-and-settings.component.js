import React, {Component} from 'react';

import { Form, Container, Row, Col } from 'react-bootstrap';
import ChampionGridInfo from '../champion-grid/champion-grid-info.component';
import PoolTable from '../pool-table/pool-table.component';


export default class MultiViewInfoAndSettings extends Component {

	constructor(props) {
		super(props);

		// PIN Icon/Feature

		this.state = {
			onHoverItemInfoBox: false
		}
	}

	render () {



		let settingsBox = <Container className="disableSelection" style={{display: "block", margin: "0px 0px 15px 0px", padding: "5px 15px 5px 15px", minHeight: "35px", width: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
			<Row className="fadeIn">
				<Col xs={6}>
					<Form.Check id="toggleMultiViewSwapSide" type="checkbox" className="custom-switch" custom="true" label="Swap Sides" checked={this.props.multiViewSwapSide} onChange={(e) => this.props.toggleSetting("multiViewSwapSide")} />
				</Col>
				<Col xs={6}>
					<Form.Check id="toggleMultiViewShowSettings" type="checkbox" className="custom-switch" custom="true" label="Show Settings" checked={this.props.multiViewShowSettings} onChange={(e) => this.props.toggleSetting("multiViewShowSettings")} />
				</Col>
			</Row>
		</Container>


		let itemInfoBox = null;
		if (this.props.hoveredItem !== null && this.props.hoveredItem !== undefined) {
			let descriptionText;
			if (this.props.baseItems[this.props.hoveredItem.itemName] !== undefined) {
				descriptionText = this.props.baseItems[this.props.hoveredItem.itemName].effect;
			} else if (this.props.advancedItems[this.props.hoveredItem.itemName] !== undefined) {
				descriptionText = this.props.advancedItems[this.props.hoveredItem.itemName].effect;
			} else {
				descriptionText = "No description available! Check back later :)";
			}
			itemInfoBox = <Container
				onMouseEnter={(e) => { this.toggleSetting("onHoverItemInfoBox")}}
				onMouseLeave={(e) => { this.toggleSetting("onHoverItemInfoBox")}}
				className="disableSelection"
				style={{display: "block", margin: "0px 0px 15px 0px", padding: "5px 15px 5px 15px", minHeight: "85px", width: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}
			>
				<Row className="fadeIn">
					<Col>
						<div style={{ textAlign: "center"}}>
							<h5 style={{margin: "0px 0px 0px 0px"}}>{this.props.hoveredItem.itemName}</h5>
							<p style={{margin: "auto auto auto auto", maxWidth: "550px", wordWrap: "normal"}}>{descriptionText}</p>
						</div>
					</Col>
				</Row>
			</Container>
		} else if (this.props.selectedChampionsCount > 0) {
			itemInfoBox = <div
				onMouseEnter={(e) => { this.toggleSetting("onHoverItemInfoBox")}}
			>
				<PoolTable
					selectedChampionsCount={this.props.selectedChampionsCount}
					rollChances={this.props.rollChances}
					championPool={this.props.championPool}
					minifiedVersion={true}
				/>
			</div>
		} else {
			itemInfoBox = 
			<Container
				onMouseEnter={(e) => { this.toggleSetting("onHoverItemInfoBox")}}
				onMouseLeave={(e) => { this.toggleSetting("onHoverItemInfoBox")}}
				className="disableSelection"
				style={{display: "block", margin: "0px 0px 15px 0px", padding: "5px 15px 5px 15px", minHeight: "85px", width: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}
			>
				<Row className="fadeIn">
					<Col>
						<div style={{ textAlign: "center"}}>
							<p style={{margin: "0px auto auto auto", maxWidth: "550px", wordWrap: "normal"}}>If you acquire a base item in your match, <b>Leftclick</b> on the item. <b>Rightclick</b> will remove it again. If you are combining two items into an upgraded one, <b>Leftclick</b> on the item you just crafted to remove the two required base items.</p>
						</div>
					</Col>
				</Row>
			</Container>
		}

		/*
			Nothing selected: Show info texts
			If Champion selected: show champion list and show roll chances
			If Hovered over Item: Overwrite item info text and roll chances
			If hover over roll chances or item info text: Show full roll changes
		*/

		if (this.state.onHoverItemInfoBox) {
			return <div
				onMouseLeave={(e) => { this.toggleSetting("onHoverItemInfoBox")}}
			>
				<PoolTable
					selectedChampionsCount={this.props.selectedChampionsCount}
					rollChances={this.props.rollChances}
					championPool={this.props.championPool}
					smallVersion={true}
				/>
			</div>
		} else {
			return <>
				{settingsBox}
				<ChampionGridInfo
					selectedChampionsByTier={this.props.selectedChampionsByTier}
					advancedItems={this.props.advancedItems}
					itemImages={this.props.itemImages}
					traitsSelectedChampionsCount={this.props.traitsSelectedChampionsCount}
					championGridShowChampionTierBorder={this.props.championGridShowChampionTierBorder}
					championGridShowChampionTierOverlay={this.props.championGridShowChampionTierOverlay}
					championGridShowChampionTooltip={this.props.championGridShowChampionTooltip}
					onChampionHover={this.props.onChampionHover}
					onChampionClick={this.props.onChampionClick}
					addTraitToChampion={this.props.addTraitToChampion}
				/>
				{itemInfoBox}
			</>
		}
	}

	toggleSetting(key) {
		localStorage.setItem(key, !this.state[key]);
		this.setState({
			[key]: !this.state[key]
		});
	}

}
