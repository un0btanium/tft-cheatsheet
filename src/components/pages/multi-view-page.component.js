import React, {Component} from 'react';

import ItemGridSettings from '../item-grid/item-grid-settings.component';
import ItemGrid from '../item-grid/item-grid.component';

import ChampionGridSettings from '../champion-grid/champion-grid-settings.component';
import ChampionGrid from '../champion-grid/champion-grid.component';

import MultiViewInfoAndSettings from '../multi-view/multi-view-info-and-settings.component';

export default class MultiViewPage extends Component {

	render () {


		if (this.props.multiViewSwapSide) {
			return <div style={{ display: "inline-block", marginBottom: "0px", width: "100%", height:"100%"}}>
				<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0px 0px 0px 0px" }}>
					
					<div style={{ display: "inline-block", width: "100%", height:"100%"}}>
						<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "15px 0px 5px 0px" }}>
							<div style={{ maxWidth: "700px" }}>
								{this.props.multiViewShowSettings &&
								<ChampionGridSettings 
									toggleSetting={this.props.toggleSetting}
									championGridShowChampionTierBorder={this.props.championGridShowChampionTierBorder}
									championGridShowChampionTierOverlay={this.props.championGridShowChampionTierOverlay}
									championGridShowChampionTooltip={this.props.championGridShowChampionTooltip}
									championGridShowOriginAndClassTooltips={this.props.championGridShowOriginAndClassTooltips}
									championGridShowOnlySynergeticChampions={this.props.championGridShowOnlySynergeticChampions}
								/>
								}
								<ChampionGrid
									{...this.props}
								/>
							</div>
						</div>
					</div>

					<div style={{ display: "inline-block", width: "100%", height:"100%"}}>
						<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "15px 0px 5px 0px" }}>
							<div style={{ maxWidth: "640px" }}>
								{this.props.multiViewShowSettings &&
								<ItemGridSettings
									toggleSetting={this.props.toggleSetting}
									itemGridIsYAxisFlipped={this.props.itemGridIsYAxisFlipped}
									itemGridIsYAxisRightSided={this.props.itemGridIsYAxisRightSided}
									itemGridIsDescriptionVisible={this.props.itemGridIsDescriptionVisible}
									itemGridIsOtherHalfIgnored={this.props.itemGridIsOtherHalfIgnored}
									itemGridShowAlmostBuyableItemImages={this.props.itemGridShowAlmostBuyableItemImages}
									itemGridHighlightOnHover={this.props.itemGridHighlightOnHover}
									itemGridAdditionalHighlighting={this.props.itemGridAdditionalHighlighting}
									itemGridHighlightAlmostBuyableItems={this.props.itemGridHighlightAlmostBuyableItems}
								/>}
								<MultiViewInfoAndSettings
									selectedChampionsByTier={this.props.selectedChampionsByTier}
									itemImages={this.props.itemImages}
									traitsSelectedChampionsCount={this.props.traitsSelectedChampionsCount}
									championGridShowChampionTierBorder={this.props.championGridShowChampionTierBorder}
									championGridShowChampionTierOverlay={this.props.championGridShowChampionTierOverlay}
									championGridShowChampionTooltip={this.props.championGridShowChampionTooltip}
									onChampionHover={this.props.onChampionHover}
									onChampionClick={this.props.onChampionClick}
									addTraitToChampion={this.props.addTraitToChampion}
					
									hoveredItem={this.props.hoveredItem}
									baseItems ={this.props.baseItems}

									advancedItems ={this.props.advancedItems}
									
									selectedChampionsCount={this.props.selectedChampionsCount}
									rollChances={this.props.rollChances}
									championPool={this.props.championPool}
									toggleSetting={this.props.toggleSetting}
									multiViewSwapSide={this.props.multiViewSwapSide}
									multiViewShowSettings={this.props.multiViewShowSettings}
								/>
								<ItemGrid
									{...this.props}
								/>
							</div>
						</div>
					</div>

				</div>
			</div>
		} else {
			return <div style={{ display: "inline-block", marginBottom: "0px", width: "100%", height:"100%"}}>
				<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0px 0px 0px 0px" }}>
					
					<div style={{ display: "inline-block", width: "100%", height:"100%"}}>
						<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "15px 0px 5px 0px" }}>
							<div style={{ maxWidth: "640px" }}>
								{this.props.multiViewShowSettings && <ItemGridSettings
									toggleSetting={this.props.toggleSetting}
									itemGridIsYAxisFlipped={this.props.itemGridIsYAxisFlipped}
									itemGridIsYAxisRightSided={this.props.itemGridIsYAxisRightSided}
									itemGridIsDescriptionVisible={this.props.itemGridIsDescriptionVisible}
									itemGridIsOtherHalfIgnored={this.props.itemGridIsOtherHalfIgnored}
									itemGridShowAlmostBuyableItemImages={this.props.itemGridShowAlmostBuyableItemImages}
									itemGridHighlightOnHover={this.props.itemGridHighlightOnHover}
									itemGridAdditionalHighlighting={this.props.itemGridAdditionalHighlighting}
									itemGridHighlightAlmostBuyableItems={this.props.itemGridHighlightAlmostBuyableItems}
								/>}
								<MultiViewInfoAndSettings
									selectedChampionsByTier={this.props.selectedChampionsByTier}
									itemImages={this.props.itemImages}
									traitsSelectedChampionsCount={this.props.traitsSelectedChampionsCount}
									championGridShowChampionTierBorder={this.props.championGridShowChampionTierBorder}
									championGridShowChampionTierOverlay={this.props.championGridShowChampionTierOverlay}
									championGridShowChampionTooltip={this.props.championGridShowChampionTooltip}
									onChampionHover={this.props.onChampionHover}
									onChampionClick={this.props.onChampionClick}
									addTraitToChampion={this.props.addTraitToChampion}
					
									hoveredItem={this.props.hoveredItem}
									baseItems ={this.props.baseItems}

									advancedItems ={this.props.advancedItems}
									
									selectedChampionsCount={this.props.selectedChampionsCount}
									rollChances={this.props.rollChances}
									championPool={this.props.championPool}
									toggleSetting={this.props.toggleSetting}
									multiViewSwapSide={this.props.multiViewSwapSide}
									multiViewShowSettings={this.props.multiViewShowSettings}
								/>
								<ItemGrid
									{...this.props}
								/>
							</div>
						</div>
					</div>

					<div style={{ display: "inline-block", width: "100%", height:"100%"}}>
						<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "15px 0px 5px 0px" }}>
							<div style={{ maxWidth: "700px" }}>
								{this.props.multiViewShowSettings &&
								<ChampionGridSettings 
									toggleSetting={this.props.toggleSetting}
									championGridShowChampionTierBorder={this.props.championGridShowChampionTierBorder}
									championGridShowChampionTierOverlay={this.props.championGridShowChampionTierOverlay}
									championGridShowChampionTooltip={this.props.championGridShowChampionTooltip}
									championGridShowOriginAndClassTooltips={this.props.championGridShowOriginAndClassTooltips}
									championGridShowOnlySynergeticChampions={this.props.championGridShowOnlySynergeticChampions}
								/>}
								<ChampionGrid
									{...this.props}
								/>
							</div>
						</div>
					</div>

				</div>
			</div>
		}
	}
}