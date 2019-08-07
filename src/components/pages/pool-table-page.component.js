import React, {Component} from 'react';

import PoolTable from '../pool-table/pool-table.component';


export default class PoolTablePage extends Component {

	render () {


		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 15px 0px" }}>
				<div style={{ width: "640px" }}>
					<PoolTable
						selectedChampionsCount={this.props.selectedChampionsCount}
						rollChances={this.props.rollChances}
						championPool={this.props.championPool}
					/>
				</div>
			</div>
		</div>;
	}
}