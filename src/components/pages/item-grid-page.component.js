import React, {Component} from 'react';

import ItemGridInfo from '../item-grid/item-grid-info.component';
import ItemGridSettings from '../item-grid/item-grid-settings.component';
import ItemGrid from '../item-grid/item-grid.component';


export default class ItemGridPage extends Component {
	
	// constructor(props) {
	// 	super(props);

	// 	if (isFirstVisit) {
			
	// 		setTimeout(() => {
	// 			let selectedBaseItems2 = {...this.state.selectedBaseItems};
	// 			selectedBaseItems2["Recurve Bow"] = selectedBaseItems2["Recurve Bow"]+1;
	// 			this.setState({
	// 				selectedBaseItems: selectedBaseItems2
	// 			});
	// 		}, 1500);

	// 		setTimeout(() => {
	// 			let selectedBaseItems2 = {...this.state.selectedBaseItems};
	// 			selectedBaseItems2["Chain Vest"] = selectedBaseItems2["Chain Vest"]+1;
	// 			this.setState({
	// 				selectedBaseItems: selectedBaseItems2
	// 			});
	// 		}, 3000);

	// 		setTimeout(() => {
	// 			let selectedBaseItems2 = {...this.state.selectedBaseItems};
	// 			selectedBaseItems2["Chain Vest"] = selectedBaseItems2["Chain Vest"]+1;
	// 			this.setState({
	// 				selectedBaseItems: selectedBaseItems2
	// 			});
	// 		}, 4500);
			
	// 		setTimeout(() => {
	// 			let selectedBaseItems2 = {...this.state.selectedBaseItems};
	// 			selectedBaseItems2["Recurve Bow"] = Math.max(0, selectedBaseItems2["Recurve Bow"]-1);
	// 			selectedBaseItems2["Chain Vest"] = Math.max(0, selectedBaseItems2["Chain Vest"]-1);
	// 			this.setState({
	// 				selectedBaseItems: selectedBaseItems2
	// 			});
				
	// 		}, 6000);

	// 		setTimeout(() => {
	// 			let selectedBaseItems2 = {...this.state.selectedBaseItems};
	// 			selectedBaseItems2["Chain Vest"] = Math.max(0, selectedBaseItems2["Chain Vest"]-1);
	// 			this.setState({
	// 				selectedBaseItems: selectedBaseItems2
	// 			});
				
	// 		}, 7500);
	// 	}
	// }

	render () {

		// TODO REWORK THIS MESS FOR MORE FUNCTIONALITY
		// DO I LIKE WITH THE CHAMPIONS: SEND SELECTEDBASEITEMS TO ITEMCOMPONENT AND LET IT HANDLE MOST THE HIGHLIGHTING.
		// FIGURE OUT THE LIMITATIONS OF THIS IMPLEMENTATION AND IF IT CAN BE CHANGED


		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 15px 0px" }}>
				<div style={{ maxWidth: "640px" }}>
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
		</div>;
	}
}