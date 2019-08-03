import React, {Component} from 'react';

import { Container, Row, Col} from 'react-bootstrap';

export default class PoolTable extends Component {
	
	render () {

		let rows = this.props.rollChances.map((row, y) => {

			let columns = row.map((col, x) => {
				return <Col sm={2}>
					{col + '%'}
				</Col>
			});

			let rowStyle = {};
			console.log(this.props.selectedChampionsCount);
			console.log(y+2);
			if (this.props.selectedChampionsCount === y+2 || (y+2 === 2 && this.props.selectedChampionsCount < 3) || (y+2 === 9 && this.props.selectedChampionsCount > 9)) {
				rowStyle = {color: "#ffdd00"}
			}

			return <Row style={rowStyle}>
				<Col style={{textAlign: "center"}} sm={2}>{y+2}</Col>
				{columns}
			</Row>
		});

		let units = this.props.championPool.map((col, x) => {
			return <Col>
				{col}
			</Col>
		});

		return <Container className="disableSelection" style={{display: "block", textAlign: "right", fontSize: "16px", margin: "0px 0px 15px 0px", padding: "5px 15px 5px 15px", minHeight: "85px", width: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
			<div className="fadeIn">
				<Row>
					<Col style={{textAlign: "center"}} sm={2}>Level</Col>
					<Col sm={2}>Tier 1</Col>
					<Col sm={2}>Tier 2</Col>
					<Col sm={2}>Tier 3</Col>
					<Col sm={2}>Tier 4</Col>
					<Col sm={2}>Tier 5</Col>
				</Row>

				{rows}

				<br />
				
				<Row>
					<Col style={{textAlign: "center"}} sm={2}>Poolsize</Col>
					{units}
				</Row>
			</div>
		</Container>
	}

}