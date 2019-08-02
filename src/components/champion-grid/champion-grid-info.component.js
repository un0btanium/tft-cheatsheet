import React, {Component} from 'react';

import { Container, Row, Col} from 'react-bootstrap';

import ChampionContainer from './champion-container.component';

export default class ChampionGridInfo extends Component {
	
	render () {

		let colStyle = {width: "100%", height: "100%", padding: "0px"};
		let rowStyle = {padding: "0px", margin: "0px"};

		let selectedChampionList = [];
		let i = 0;
		for (let champion of this.props.selectedChampionsByTier) {
			if (selectedChampionList.length < 11) {
				selectedChampionList.push(<Col sm={1} style={{...colStyle, maxWidth: "8.2%", margin: "2px"}} key={"ChampionList-" + champion.name}>
					<ChampionContainer
						x={i-1} y={-1}
						tooltipDirection="bottom"
						champions={[champion]}
						advancedItems={this.props.advancedItems}
						itemImages={this.props.itemImages}
						className={null}
						originName={null}
						isChampionSelected={[]}
						traitsSelectedChampionsCount={this.props.traitsSelectedChampionsCount}
						showChampionTierBorder={this.props.championGridShowChampionTierBorder}
						showChampionTierOverlay={this.props.championGridShowChampionTierOverlay}
						showChampionTooltip={this.props.championGridShowChampionTooltip}
						onChampionHover={this.props.onChampionHover}
						onChampionClick={this.props.onChampionClick}
						addTraitToChampion={this.props.addTraitToChampion}
					/>
				</Col>);
			}
			i++;
		}

		if (selectedChampionList.length === 0) {
			selectedChampionList = <Col style={{ textAlign: "center"}}>
				<p style={{margin: "5px auto", maxWidth: "600px", wordWrap: "normal"}}><b>Leftclick</b> on a champion to add him to your team. <b>Leftclick</b> again to remove him. <b>Rightclick</b> allows you to add additional origins and classes via the spatula items.</p>
			</Col>
		}


		return <Container className="disableSelection" style={{display: "block", margin: "15px 0px 15px 0px", padding: "5px", minHeight: "80px", width: "100%", maxWidth: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
			<Row className="fadeIn" key="SelectedChampionOverviewList" style={{ ...rowStyle, margin: "5px"}}>
				{selectedChampionList}
			</Row>
		</Container>
	}

}