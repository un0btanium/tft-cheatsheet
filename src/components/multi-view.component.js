import React, {Component} from 'react';

import { Form, Container, Row, Col } from 'react-bootstrap';

import TFTChampionGrid from './tft-champion-grid.component';
import TFTItemizer from './tft-itemizer.component';

export default class MultiView extends Component {

	
	constructor(props) {
		super(props);

		let defaultSettings = {
			swapSide: false
		}

		for (let setting in defaultSettings) {
			let localStorageEntry = localStorage.getItem(setting);
			if (localStorageEntry === null && (localStorageEntry !== "true" || localStorageEntry !== "false")) {
				localStorage.setItem(setting, defaultSettings[setting]);
			} else {
				defaultSettings[setting] = (localStorage.getItem(setting) === "true");
			}
		}

		this.state = {
			swapSide: defaultSettings.swapSide
		};
	}

	render () {

		let settingsBox = <div style={{ position :"center"}}>
			<Container style={{display: "block", margin: "20px auto 0px auto", padding: "5px 15px 5px 15px", minHeight: "35px", width: "100%", maxWidth: "200px", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
				<Row className="fadeIn">
					<Col xs={12}>
						<Form.Check id="toggleMultiViewSwapSide" type="checkbox" className="custom-switch" custom="true" label="Swap Sides" checked={this.state.swapSide} onChange={(e) => this.toggleSetting("swapSide")} />
					</Col>
				</Row>
			</Container>
		</div>

		if (this.state.swapSide) {
			return <div style={{ display: "inline-block", marginBottom: "0px", width: "100%", height:"100%"}}>
				{settingsBox}
				<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 0px 0px" }}>
					<TFTChampionGrid></TFTChampionGrid>
					<TFTItemizer></TFTItemizer>
				</div>
			</div>
		} else {
			return <div style={{ display: "inline-block", marginBottom: "0px", width: "100%", height:"100%"}}>
				{settingsBox}
				<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 0px 0px" }}>
					<TFTItemizer></TFTItemizer>
					<TFTChampionGrid></TFTChampionGrid>
				</div>
			</div>
		}
	}

	toggleSetting(key) {
		localStorage.setItem(key, !this.state[key]);
		this.setState({
			[key]: !this.state[key]
		});
	}
}