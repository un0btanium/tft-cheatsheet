import React, {Component} from 'react';


import ChampionGridInfo from '../champion-grid/champion-grid-info.component';
import ChampionGridSettings from '../champion-grid/champion-grid-settings.component';
import ChampionGrid from '../champion-grid/champion-grid.component';


export default class ChampionGridPage extends Component {
	
	// constructor(props) {
	// 	super(props);

		// if (isFirstVisit) { // TODO start this when user activates tutorial rundown

			// setTimeout(() => {
			// 	this.toggleChampionSelection(championsByName["Lucian"]);
			// }, 1000);

			// setTimeout(() => {
			// 	this.toggleChampionSelection(championsByName["Tristana"]);
			// }, 2000);

			// setTimeout(() => {
			// 	this.toggleChampionSelection(championsByName["Kennen"]);
			// }, 3000);
			
			// setTimeout(() => {
			// 	this.toggleChampionSelection(championsByName["Poppy"]);
			// }, 4000);

			// setTimeout(() => {
			// 	this.toggleChampionSelection(championsByName["Garen"]);
			// }, 5000);

			// setTimeout(() => {
			// 	this.toggleChampionSelection(championsByName["Fiora"]);
			// }, 6000);

			// setTimeout(() => {
			// 	this.toggleChampionSelection(championsByName["Draven"]);
			// }, 7000);

			// setTimeout(() => {
			// 	this.toggleChampionSelection(championsByName["Yasuo"]);
			// }, 8000);
			

			// setTimeout(() => {
			// 	this.toggleChampionSelection(championsByName["Lucian"]);
			// 	this.toggleChampionSelection(championsByName["Tristana"]);
			// 	this.toggleChampionSelection(championsByName["Kennen"]);
			// 	this.toggleChampionSelection(championsByName["Poppy"]);
			// 	this.toggleChampionSelection(championsByName["Garen"]);
			// 	this.toggleChampionSelection(championsByName["Fiora"]);
			// 	this.toggleChampionSelection(championsByName["Draven"]);
			// 	this.toggleChampionSelection(championsByName["Yasuo"]);
			// }, 11000);
		// }
	// }



	render () {
		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 15px 0px" }}>
				<div style={{ maxWidth: "700px" }}>
					<ChampionGridSettings 
						toggleSetting={this.props.toggleSetting}
						championGridShowChampionTierBorder={this.props.championGridShowChampionTierBorder}
						championGridShowChampionTierOverlay={this.props.championGridShowChampionTierOverlay}
						championGridShowChampionTooltip={this.props.championGridShowChampionTooltip}
						championGridShowOriginAndClassTooltips={this.props.championGridShowOriginAndClassTooltips}
						championGridShowOnlySynergeticChampions={this.props.championGridShowOnlySynergeticChampions}
					/>
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
					<ChampionGrid
						{...this.props}
					/>
				</div>
			</div>
		</div>
	}

}