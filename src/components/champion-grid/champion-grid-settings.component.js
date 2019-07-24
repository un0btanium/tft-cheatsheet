import React, {Component} from 'react';

import { Form, Container, Row, Col} from 'react-bootstrap';

export default class ChampionGridSettings extends Component {
	
	render () {
		return <Container className="disableSelection" style={{display: "block", margin: "0px 0px 15px 0px", padding: "5px 15px 5px 15px", minHeight: "35px", width: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
			<Row className="fadeIn">
				<Col xs={6}>
					<Form.Check id="toggleChampionGridShowChampionTierBorder" type="checkbox" className="custom-switch" custom="true" label="Show Champion Tier Borders" checked={this.props.championGridShowChampionTierBorder} onChange={(e) => this.props.toggleSetting("championGridShowChampionTierBorder")} />
				</Col>
				<Col xs={6}>
					<Form.Check id="toggleChampionGridShowChampionTierOverlay" type="checkbox" className="custom-switch" custom="true" label="Show Champion Tier Overlays" checked={this.props.championGridShowChampionTierOverlay} onChange={(e) => this.props.toggleSetting("championGridShowChampionTierOverlay")} />
				</Col>
			</Row>
			<Row className="fadeIn">
				<Col xs={6}>
					<Form.Check id="toggleChampionGridShowChampionTooltip" type="checkbox" className="custom-switch" custom="true" label="Show Champion Tooltips on Hover" checked={this.props.championGridShowChampionTooltip} onChange={(e) => this.props.toggleSetting("championGridShowChampionTooltip")} />
				</Col>
				<Col xs={6}>
					<Form.Check id="toogleChampionGridShowOriginAndClassTooltips" type="checkbox" className="custom-switch" custom="true" label="Show Origin & Class Tooltips on Hover" checked={this.props.championGridShowOriginAndClassTooltips} onChange={(e) => this.props.toggleSetting("championGridShowOriginAndClassTooltips")} />
				</Col>
			</Row>
		</Container>
	}

}