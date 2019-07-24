import React, {Component} from 'react';

import { Container, Row, Col} from 'react-bootstrap';

export default class ItemGridInfo extends Component {
	
	render () {

		let hoveredItemText = null;
		if (this.props.hoveredItem !== null && this.props.hoveredItem !== undefined) {
			let descriptionText;
			if (this.props.baseItems[this.props.hoveredItem.itemName] !== undefined) {
				descriptionText = this.props.baseItems[this.props.hoveredItem.itemName].effect;
			} else if (this.props.advancedItems[this.props.hoveredItem.itemName] !== undefined) {
				descriptionText = this.props.advancedItems[this.props.hoveredItem.itemName].effect;
			} else {
				descriptionText = "No description available! Check back later :)";
			}
			hoveredItemText = <div style={{ textAlign: "center"}}>
				<h5 style={{margin: "0px 0px 0px 0px"}}>{this.props.hoveredItem.itemName}</h5>
				<p style={{margin: "auto auto auto auto", maxWidth: "525px", wordWrap: "normal"}}>{descriptionText}</p>
			</div>
		} else {
			hoveredItemText = <div style={{ textAlign: "center"}}>
				<p style={{margin: "0px auto auto auto", maxWidth: "550px", wordWrap: "normal"}}>If you acquire a base item in your match, <b>Leftclick</b> on the item. <b>Rightclick</b> will remove it again. If you are combining two items into an upgraded one, <b>Leftclick</b> on the item you just crafted to remove the two required base items.</p>
			</div>
		}

		return <Container className="disableSelection" style={{display: "block", margin: "0px 0px 15px 0px", padding: "5px 15px 5px 15px", minHeight: "85px", width: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
			<Row className="fadeIn">
				<Col>
					{hoveredItemText}
				</Col>
			</Row>
		</Container>
	}

}