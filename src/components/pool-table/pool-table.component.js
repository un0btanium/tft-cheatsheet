import React, {Component} from 'react';

import { Container, Row, Col} from 'react-bootstrap';

let tierColors = [
	"#FFFFFF",
	"#00e33d",
	"#00ccff",
	"#ff00ff",
	"#ffdd00"
]

export default class PoolTable extends Component {
	
	render () {

		let showInMinifiedVersion = false;
		let shownRowsInMinifiedVersion = 0;
		let rows = this.props.rollChances.map((row, y) => {

			let rowStyle = {textAlign: "right" }
			if (this.props.selectedChampionsCount === y+2 || (y+2 === 2 && this.props.selectedChampionsCount < 3) || (y+2 === 9 && this.props.selectedChampionsCount > 9)) {
				rowStyle = { ...rowStyle, color: "#ffdd00", fontSize: "20px", backgroundColor: "#444444"};
				showInMinifiedVersion = true;
			}

			let columns = row.map((col, x) => {
				return <Col style={{ color: tierColors[x] }} sm={2} key={"RollChances" + x + "-" + y}>
					{col + '%'}
				</Col>
			});
			
			if (this.props.minifiedVersion) {

				if ((showInMinifiedVersion || (!showInMinifiedVersion && this.props.selectedChampionsCount > 6 && y > 4) ) && (shownRowsInMinifiedVersion < 3)) {
					shownRowsInMinifiedVersion++;
					return <Row style={rowStyle} key={"RollChancesRow" + y}>
						<Col style={{textAlign: "center"}} sm={2} key={"RollChancesYAxis" + y}>{y+2}</Col>
						{columns}
					</Row>
				} else {
					return null;
				}

			} else {
				return <Row style={rowStyle} key={"RollChancesRow" + y}>
					<Col style={{textAlign: "center"}} sm={2} key={"RollChancesYAxis" + y}>{y+2}</Col>
					{columns}
				</Row>
			}

		});

		let units = this.props.championPool.map((col, x) => {
			return <Col style={{ color: tierColors[x] }} key={"PoolUnits" + x}>
				{col}
			</Col>
		});

		let containerMargin = "0px 0px 15px 0px";
		if (this.props.smallVersion) {
			containerMargin = "0px 0px 13px 0px";
		} else if (this.props.minifiedVersion) {
			containerMargin = "0px 0px 12px 0px";
		}

		return <Container className="disableSelection" style={{display: "block", textAlign: "right", fontSize: "16px", color: "#AAAAAA", margin: containerMargin, padding: "5px 15px 5px 15px", minHeight: "85px", width: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
			<div className="fadeIn">
				{ !this.props.minifiedVersion && <Row>
					<Col style={{textAlign: "center"}} sm={2}>Level</Col>
					<Col sm={2} style={{ color: tierColors[0] }}>Tier 1</Col>
					<Col sm={2} style={{ color: tierColors[1] }}>Tier 2</Col>
					<Col sm={2} style={{ color: tierColors[2] }}>Tier 3</Col>
					<Col sm={2} style={{ color: tierColors[3] }}>Tier 4</Col>
					<Col sm={2} style={{ color: tierColors[4] }}>Tier 5</Col>
				</Row>}

				{rows}
				
				{ !this.props.smallVersion && !this.props.minifiedVersion && <>
						<br />
						<Row>
						<Col style={{textAlign: "center"}} sm={2}>Poolsize</Col>
						{units}
					</Row>
				</>}
			</div>
		</Container>
	}

}