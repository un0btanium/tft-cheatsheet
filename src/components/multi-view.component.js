
import React, {Component} from 'react';

import TFTChampionGrid from './tft-champion-grid.component';
import TFTItemizer from './tft-itemizer.component';

export default class MultiView extends Component {

    render () {
        
        return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 0px 0px" }}>
                <TFTItemizer></TFTItemizer>
                <TFTChampionGrid></TFTChampionGrid>
            </div>
        </div>
    }
}