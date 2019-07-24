import React, {Component} from 'react';

import { Form, Container, Row, Col} from 'react-bootstrap';

export default class ItemGridSettings extends Component {
	
	render () {

		return <Container className="disableSelection" style={{display: "block", marginBottom: "15px", padding: "5px 15px 5px 15px", minHeight: "80px", width: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
			<Row className="fadeIn">
				<Col>
					<Form.Check id="toggleFlippedYAxis" draggable={false} type="checkbox" className="custom-switch" custom="true" label="Flip Y Axis" checked={this.props.itemGridIsYAxisFlipped} onChange={(e) => this.props.toggleSetting("itemGridIsYAxisFlipped")} />
				</Col>
				<Col>
					<Form.Check id="toggleYAxisSide" draggable={false} type="checkbox" className="custom-switch" custom="true" label="Rightsided Y Axis" checked={this.props.itemGridIsYAxisRightSided} onChange={(e) => this.props.toggleSetting("itemGridIsYAxisRightSided")} />
				</Col>
				<Col>
					<Form.Check id="toggleDescriptionText" type="checkbox" className="custom-switch" custom="true" label="Show Descriptions" checked={this.props.itemGridIsDescriptionVisible} onChange={(e) => this.props.toggleSetting("itemGridIsDescriptionVisible")} />
				</Col>
			</Row>
			<Row className="fadeIn">
				<Col xs={4}>
					<Form.Check id="toggleIsOtherHalfIgnored" type="checkbox" className="custom-switch" custom="true" label="Hide Duplicate Items" checked={this.props.itemGridIsOtherHalfIgnored} onChange={(e) => this.props.toggleSetting("itemGridIsOtherHalfIgnored")} />
				</Col>
				<Col xs={4}>
					<Form.Check id="toggleShowAlmostBuyableItemImages" type="checkbox" className="custom-switch" custom="true" label="Show Required Item" checked={this.props.itemGridShowAlmostBuyableItemImages} onChange={(e) => this.props.toggleSetting("itemGridShowAlmostBuyableItemImages")} />
				</Col>
				<Col xs={4}>
					<Form.Check id="toggleHighlightOnHover" type="checkbox" className="custom-switch" custom="true" label="Highlight on Hover" checked={this.props.itemGridHighlightOnHover} onChange={(e) => this.props.toggleSetting("itemGridHighlightOnHover")} />
				</Col>
			</Row>
			<Row className="fadeIn">
				<Col xs={4}>
					<Form.Check id="toggleAdditonalHighlighting" type="checkbox" className="custom-switch" custom="true" label="Highlight Borders" checked={this.props.itemGridAdditionalHighlighting} onChange={(e) => this.props.toggleSetting("itemGridAdditionalHighlighting")} />
				</Col>
				<Col xs={8}>
					<Form.Check id="toggleMissingItemHighlight" type="checkbox" className="custom-switch" custom="true" label="Highlight Almost Buyable Items" checked={this.props.itemGridHighlightAlmostBuyableItems} onChange={(e) => this.props.toggleSetting("itemGridHighlightAlmostBuyableItems")} />
				</Col>
			</Row>
		</Container>
	}

}