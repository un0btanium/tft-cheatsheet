import React, {Component} from 'react';

import Item from '../item-grid/item.component';

import { Container, Row, Col } from 'react-bootstrap';


export default class ItemGrid extends Component {


	render () {

		let colStyle = {width: "100%", height: "100%", padding: "0px"};
		let rowStyle = {padding: "0px", margin: "0px"};

		let axisXHighlighted = [];
		let axisYHighlighted = [];
		if (this.props.hoveredItem !== null) {
			let colXhovered = this.props.hoveredItem.x;
			let rowYhovered = this.props.hoveredItem.y;
			for (let i = 0; i < this.props.order.length; i++) {
				axisXHighlighted[i] = false;
				axisYHighlighted[i] = false;
				if (colXhovered !== null) {
					if (colXhovered === i) {
						axisXHighlighted[i] = true;
					}
					if (this.props.itemGridIsYAxisFlipped) {
						if (this.props.order.length-colXhovered-1 === i) {
							axisYHighlighted[i] = true;
						}
					} else {
						if (colXhovered === i) {
							axisYHighlighted[i] = true;
						}
					}
				}
				if (rowYhovered !== null) {
					if (rowYhovered === i) {
						axisYHighlighted[i] = true;
					}
					if (this.props.itemGridIsYAxisFlipped) {
						if (this.props.order.length-rowYhovered-1 === i) {
							axisXHighlighted[i] = true;
						}
					} else {
						if (rowYhovered === i) {
							axisXHighlighted[i] = true;
						}
					}
				}
			}
		}

		let grid = this.props.order.map((itemNameY, posY) => {

			let baseItemName;
			if (this.props.itemGridIsYAxisFlipped) {
				baseItemName = this.props.order[this.props.order.length-posY-1];
			} else {
				baseItemName = this.props.order[posY];
			}

			let row = this.props.order.map((itemNameX, posX) => {

				let isHoverHighlighted = false;
				if (this.props.itemGridHighlightOnHover) {
					if (axisXHighlighted[posX]) {
						isHoverHighlighted = true;
					}
					if (axisYHighlighted[posY]) {
						isHoverHighlighted = true;
					}
				}

				let isItemIgnored = this.isItemIgnored(posX, posY);
				let itemName;
				if (this.props.itemGridIsYAxisFlipped) {
					itemName = this.props.itemRecipes[this.props.order[this.props.order.length-posY-1]][itemNameX];
				} else {
					itemName = this.props.itemRecipes[this.props.order[posY]][itemNameX];
				}

				let craftableItemAmount = 0;
				let isAlmostBuyable = false;

				let requiredItemA = this.props.recipesByItems[itemName][0];
				let requiredItemB = this.props.recipesByItems[itemName][1];
				
				let selectedBaseItems = {...this.props.selectedBaseItems};
				while (selectedBaseItems[requiredItemA] > 0 && selectedBaseItems[requiredItemB] > 0) {
					
					selectedBaseItems[requiredItemA] = selectedBaseItems[requiredItemA]-1;
					selectedBaseItems[requiredItemB] = selectedBaseItems[requiredItemB]-1;

					if (selectedBaseItems[requiredItemA] < 0) { // in case it requires the same item twice and only one was in inventory and two were subtracted
						isAlmostBuyable = true;
					} else {
						craftableItemAmount++;
					}
				}

				let missingItem = null;
				if (selectedBaseItems[requiredItemA]+selectedBaseItems[requiredItemB] > 0 || selectedBaseItems[requiredItemA]+selectedBaseItems[requiredItemB] === -2) {
					isAlmostBuyable = true;

					if (this.props.itemGridShowAlmostBuyableItemImages) {
						if (this.props.selectedBaseItems[requiredItemA]-this.props.selectedBaseItems[requiredItemB] > 0) {
							missingItem = this.props.baseItems[requiredItemB];
							missingItem.name = requiredItemB;
						} else {
							missingItem = this.props.baseItems[requiredItemA];
							missingItem.name = requiredItemA;
						}
					}
				}

				if (!this.props.itemGridHighlightAlmostBuyableItems) {
					isAlmostBuyable = false;
				}

				return <Col style={colStyle} key={"ItemCol-" + posX + "-" + posY}>
					<Item
						x={posX} y={posY}
						itemName={itemName}
						item={this.props.advancedItems[itemName]}
						itemImages={this.props.itemImages}
						craftableItemAmount={craftableItemAmount}
						useBlueColor={false}
						isAlmostBuyable={isAlmostBuyable}
						isItemIgnored={isItemIgnored}
						itemGridIsDescriptionVisible={this.props.itemGridIsDescriptionVisible}
						isHoverHighlighted={isHoverHighlighted}
						itemGridAdditionalHighlighting={this.props.itemGridAdditionalHighlighting}
						itemGridHighlightAlmostBuyableItems={this.props.itemGridHighlightAlmostBuyableItems}
						missingItem={missingItem}
						onItemHover={this.props.onItemHover}
						onItemClick={this.props.onItemClick}
					/>
				</Col>
			});

			
			let yAxisCol = <Col style={colStyle} key={"ItemCol--1-" + posY}>
				<Item
					x={null} y={posY}
					itemName={baseItemName}
					itemImages={this.props.itemImages}
					item={this.props.baseItems[baseItemName]}
					craftableItemAmount={this.props.selectedBaseItems[baseItemName]}
					useBlueColor={true}
					isAlmostBuyable={false}
					ignoreItem={false}
					itemGridIsDescriptionVisible={this.props.itemGridIsDescriptionVisible}
					isHoverHighlighted={axisYHighlighted[posY]}
					itemGridAdditionalHighlighting={this.props.itemGridAdditionalHighlighting}
					itemGridHighlightAlmostBuyableItems={false}
					missingItem={null}
					onItemHover={this.props.onItemHover}
					onItemClick={this.props.onItemClick}
				/>
			</Col>

			if (this.props.itemGridIsYAxisRightSided) {
				return <Row style={rowStyle} key={"ItemRow-" + posY}>{row}{yAxisCol}</Row>
			} else {
				return <Row style={rowStyle} key={"ItemRow-" + posY}>{yAxisCol}{row}</Row>
			}

		});



		let topRow = <Row style={rowStyle}>
			{!this.props.itemGridIsYAxisRightSided && <Col style={{...colStyle, backgroundColor: "#000000", borderTopLeftRadius: "5px" }}><div style={{ maxWidth: "64px", maxHeight: "64px", width: "100%", height: "100%"}}></div></Col>}
			{this.props.order.map((itemNameX, posX) => {
				let baseItemName = this.props.order[posX];
				return <Col style={colStyle} key={"ItemCol-" + posX + "--1"}>
					<Item
						x={posX} y={null}
						itemName={baseItemName}
						item={this.props.baseItems[baseItemName]}
						itemImages={this.props.itemImages}
						craftableItemAmount={this.props.selectedBaseItems[baseItemName]}
						useBlueColor={true}
						isAlmostBuyable={false}
						isItemIgnored={false}
						itemGridIsDescriptionVisible={this.props.itemGridIsDescriptionVisible}
						isHoverHighlighted={axisXHighlighted[posX]}
						itemGridAdditionalHighlighting={this.props.itemGridAdditionalHighlighting}
						itemGridHighlightAlmostBuyableItems={false}
						missingItem={null}
						onItemHover={this.props.onItemHover}
						onItemClick={this.props.onItemClick}
					/>
				</Col>
			})
			}
			{this.props.itemGridIsYAxisRightSided && <Col style={{...colStyle, backgroundColor: "#000000", borderTopRightRadius: "5px" }}></Col>}
		</Row>



		return <div className="disableSelection" style={{backgroundColor: "#4e5d6c", borderRadius: "5px", width: "100%", boxShadow: '2px 2px 5px #000000'}}>
			<div className="fadeIn" style={{ display: "flex", padding: "0px", margin: "0px" }}>
				<Container style={{ padding: "0px", backgroundColor: "#000000", margin: "12px", border: "solid 3px #000000", borderRadius: "5px"}}>
					{topRow}
					{grid}
				</Container>
			</div>
		</div>
	}


	isItemIgnored(x, y) {
		if (this.props.itemGridIsOtherHalfIgnored) {
			if (this.props.itemGridIsYAxisFlipped) {
				if (y+x > this.props.order.length-1) {
					return true;
				}
				return false;
			} else {
				if (x-y < 0) {
					return true;
				}
				return false;
			}
		} else {
			return false;
		}
	}
}