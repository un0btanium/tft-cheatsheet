import React, {Component} from 'react';

import { Form, Container, Row, Col } from 'react-bootstrap';

import ItemGridInfo from '../item-grid/item-grid-info.component';
import ItemGridSettings from '../item-grid/item-grid-settings.component';
import ItemGrid from '../item-grid/item-grid.component';

import ChampionGridInfo from '../champion-grid/champion-grid-info.component';
import ChampionGridSettings from '../champion-grid/champion-grid-settings.component';
import ChampionGrid from '../champion-grid/champion-grid.component';

export default class MultiViewPage extends Component {

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
								{settingsBox}
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
								<ChampionGridInfo 
									selectedChampionsByTier={this.props.selectedChampionsByTier}
									advancedItems={this.props.advancedItems}
									itemImages={this.props.itemImages}
									selectedClasses={this.props.selectedClasses}
									selectedOrigins={this.props.selectedOrigins}
									championGridShowChampionTierBorder={this.props.championGridShowChampionTierBorder}
									championGridShowChampionTierOverlay={this.props.championGridShowChampionTierOverlay}
									championGridShowChampionTooltip={this.props.championGridShowChampionTooltip}
									onChampionHover={this.props.onChampionHover}
									onChampionClick={this.props.onChampionClick}
									addClassOrOriginToChampion={this.props.addClassOrOriginToChampion}
								/>
								<ItemGridInfo
									hoveredItem={this.props.hoveredItem}
									baseItems ={this.props.baseItems}
									advancedItems ={this.props.advancedItems}
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
								{settingsBox}
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
								<ChampionGridInfo 
									selectedChampionsByTier={this.props.selectedChampionsByTier}
									advancedItems={this.props.advancedItems}
									itemImages={this.props.itemImages}
									selectedClasses={this.props.selectedClasses}
									selectedOrigins={this.props.selectedOrigins}
									championGridShowChampionTierBorder={this.props.championGridShowChampionTierBorder}
									championGridShowChampionTierOverlay={this.props.championGridShowChampionTierOverlay}
									championGridShowChampionTooltip={this.props.championGridShowChampionTooltip}
									onChampionHover={this.props.onChampionHover}
									onChampionClick={this.props.onChampionClick}
									addClassOrOriginToChampion={this.props.addClassOrOriginToChampion}
								/>
								<ItemGridInfo
									hoveredItem={this.props.hoveredItem}
									baseItems ={this.props.baseItems}
									advancedItems ={this.props.advancedItems}
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