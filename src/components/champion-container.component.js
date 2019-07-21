import React, {Component} from 'react';

import { Image, OverlayTrigger, Popover } from 'react-bootstrap';


let borderColorsByTier = [
    "#FFFFFF",
    "#00e33d",
    "#0099ff",
    "#cc00ff",
    "#ffdd00"
]

let pictureStretch = [
    "100%",
    "180%",
    "160%",
    "140%",
    "120%"
]

let textIndent = [
    "0%",
    "25%",
    "15%",
    "5%",
    "2%"
]

export default class ChampionContainer extends Component {

    render () {

        let champions = this.props.champions;
        
        if (champions === null || champions === undefined) {

            let intensity = Math.min(255, (Math.max(this.props.selectedOrigins[this.props.originName], this.props.selectedClasses[this.props.className]))*40);

            let backgroundColor;
            if (intensity === 0) {
                backgroundColor = "#000000";
            } else {
                backgroundColor = "rgb(" + intensity + ", 50, 50)";
            }

            return <div style={{ display: "block", width: "100%", height: "100%", background: backgroundColor, pointerEvents: "none"}}>
                
                <div style={{ visibility: "hidden", maxWidth: "100%", overflow: "hidden", pointerEvents: "none" }}>
                    <Image
                        style={{ maxWidth: "initial", margin: "0", padding: "0", pointerEvents: "none" }}
                        width={"100%"}
                        height={"100%"}
                        src={"http://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/Ashe.png"}
                        alt={""}
                        onDragStart={this.preventEvent}
                        draggable={false}
                    />
                </div>
        </div>
        } else {

            let championImages = champions.map((champion, i) => {


                let src;
                if (champion.icon !== null && champion.icon !== undefined) {
                    src = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/" + champion.icon + ".png";
                } else {
                    src = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/" + champion.name + ".png";
                }

                let championPictureBorder;
                if (this.props.showChampionTierBorder) {
                    championPictureBorder = "solid 3px " + borderColorsByTier[champion.tier-1]; 
                } else {
                    championPictureBorder = "solid 0px " + borderColorsByTier[champion.tier-1]; 
                }
                let championPictureStretch = pictureStretch[Math.min(champions.length-1, pictureStretch.length-1)];
                let championPictureWidth = (1/champions.length)*100 + "%";
                let championPicturexOffsetInPercent = (i*(1/champions.length))*100 + "%";
                let championPictureTextIndent = textIndent[Math.min(champions.length-1, textIndent.length-1)];
                let championPictureTextIndentNegative = "-" + championPictureTextIndent;

                let overlayName = "champion-image-default";
                if (this.props.selectedChampions[champion.name]) {
                    overlayName = "champion-image-selected";
                } else if (this.props.showChampionTierOverlay) {
                    overlayName = "champion-image-tier"+champion.tier;
                }
                
                let tooltipShowDelay = 50;
                if (!this.props.showChampionTooltip) {
                    tooltipShowDelay = 9999999;
                }

                return <div key={"champion"+champion.name} style={{ position: "absolute", top: "0px", left: championPicturexOffsetInPercent, width: "100%", height: "100%"}}>
                    <div className={overlayName} style={{ position: "absolute", top: "0px", left: "0px", width: championPictureWidth, height: "100%", overflow: "hidden", border: championPictureBorder}}>
                        <div style={{ width: championPictureStretch, height: "100%", maxWidth: championPictureStretch, textIndent: championPictureTextIndentNegative }}>
                            
                            <OverlayTrigger
                                placement={this.props.tooltipDirection ? this.props.tooltipDirection : "top"}
                                delay={{ show: tooltipShowDelay, hide: 0 }}
                                overlay={
                                    <Popover
                                        style={{ background: 'rgba(0,0,0, 0.8)', backgroundColor: 'rgba(0,0,0, 0.8)', textAlign: 'left', wordBreak: 'keep-all', whiteSpace: 'pre'}}
                                        //arrowProps={style="{{background: 'rgba(0,0,0, 0.8)'}}"}
                                        id="tooltipHighlighting"
                                    >
                                        <><span><h6>{champion.name}</h6></span></>
                                    </Popover>
                                }
                            >
                                <Image
                                    style={{ textIndent: championPictureTextIndent, margin: "0", padding: "0" }}
                                    width={"100%"}
                                    height={"100%"}
                                    src={src}
                                    alt={champion.name}
                                    onClick={(e) => this.props.onChampionClick(e, champion)}
                                    onContextMenu={(e) => this.props.onChampionClick(e, champion)}
                                    onDragStart={this.preventEvent}
                                    draggable={false}
                                    // onMouseEnter={(e) => this.props.onItemHover(this.props.itemName, this.props.x, this.props.y)}
                                    // onMouseLeave={(e) => this.props.onItemHover(null)}
                                />
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
                
            });

            
            let srcHiddenImage;
            if (champions[0].icon !== null && champions[0].icon !== undefined) {
                srcHiddenImage = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/" + champions[0].icon + ".png";
            } else {
                srcHiddenImage = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/" + champions[0].name + ".png";
            }

            return <div style={{ display: "block", width: "100%", height: "100%", backgroundColor: "#000000"}}>
                <div style={{ visibility: "hidden", maxWidth: "100%", textIndent: "-25%", overflow: "hidden"}}>
                    <Image
                        style={{ maxWidth: "initial", margin: "0", padding: "0", pointerEvents: "none" }}
                        width={"100%"}
                        height={"100%"}
                        src={srcHiddenImage}
                        alt={""}
                        onDragStart={this.preventEvent}
                        draggable={false}
                    />
                </div>
                
                {championImages}
                
            </div>
        }
    }

    preventEvent(e) {
        e.preventDefault();
    }
}
