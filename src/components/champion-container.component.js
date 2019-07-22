import React, {Component} from 'react';

import { Image, OverlayTrigger, Popover, Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import advancedItems from '../itemdata/advanced-items';

import darkin from '../images/darkin.png';
import yuumi from '../images/yuumi.png';

let altimages = {
    "darkin": darkin,
    "yuumi": yuumi
}


const extraOriginsAndClasses = [
    {
        name: "Assassin",
        item: advancedItems["Youmuu's Ghostblade"]
    },
    {
        name: "Sorcerer",
        item: advancedItems["Yuumi"]
    },
    {
        name: "Blademaster",
        item: advancedItems["Blade of the Ruined King"]
    },
    {
        name: "Demon",
        item: advancedItems["Darkin"]
    },
    {
        name: "Knight",
        item: advancedItems["Knight's Vow"]
    },
    {
        name: "Glacial",
        item: advancedItems["Frozen Mallet"]
    }
];

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

    constructor(props) {
        super(props);

        this.toggleContextMenu = this.toggleContextMenu.bind(this);

        this.state = {
            showContextMenu: null,
        }

    }

    render () {

        let champions = this.props.champions;
        
        if (champions === null || champions === undefined || champions.length === 0) {

            let intensity = Math.min(255, (Math.max(this.props.selectedOrigins[this.props.originName], this.props.selectedClasses[this.props.className]))*40);

            let backgroundColor;
            if (intensity === 0) {
                backgroundColor = "#000000";
            } else {
                backgroundColor = "rgb(" + intensity + ", 50, 50)";
            }

            return <div onContextMenu={this.preventEvent} onClick={this.preventEvent} style={{ display: "block", width: "100%", height: "100%", background: backgroundColor}}>
                
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
                

                let contextMenu = null;
                if (this.state.showContextMenu && this.state.showContextMenu.name === champion.name) {
                    
                    let dropDownEntries = [];
                    for (let extra of extraOriginsAndClasses) {
                        if (champion.defaultClasses.indexOf(extra.name) === -1 && champion.defaultOrigins.indexOf(extra.name) === -1) {
                            let src;
                            
                                if (extra.item.img === null || extra.item.img === undefined) {
                                    src = altimages[extra.item.altimg];
                                } else {
                                    src = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/item/" + extra.item.img + ".png"; // TODO version number
                                }

                            dropDownEntries.push(
                                <Dropdown.Item
                                    key={"Extra" + champion.name + extra.name}
                                    onClick={(e) => { e.preventDefault(); this.props.addClassOrOriginToChampion(champion, extra.name); this.setState({ showContextMenu: false}); }}
                                >
                                    {(champion.classes.indexOf(extra.name) >= 0 || champion.origins.indexOf(extra.name) >= 0) ? <FontAwesomeIcon style={{marginRight: "20px", color: "lightgreen"}}icon={faCheck} /> : <FontAwesomeIcon style={{visibility: "hidden", marginRight: "20px"}} icon={faCheck} />}
                                    <div style={{ display: "inline"}}>
                                        <Image
                                            width={"20%"}
                                            height={"20%"} 
                                            src={src}
                                            alt={extra.item.altimg}
                                            // onClick={(e) => this.props.onItemClick(e, this.props.itemName)}
                                            // onContextMenu={(e) => this.props.onItemClick(e, this.props.itemName)}
                                            onDragStart={this.preventEvent}
                                            draggable={false}
                                            // onMouseEnter={(e) => this.props.onItemHover(this.props.itemName, this.props.x, this.props.y)}
                                            // onMouseLeave={(e) => this.props.onItemHover(null)}
                                        />
                                    </div>
                                    <span style={{ marginLeft: "15px"}}>{extra.name}</span>
                                    
                                </Dropdown.Item>
                            );
                        }
                    }

                    contextMenu = <Dropdown.Menu show onContextMenu={this.preventEvent} >
                        <Dropdown.Header>Add class or origin to champion</Dropdown.Header>
                        <Dropdown.Divider />
                        {dropDownEntries}
                    </Dropdown.Menu>
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
                                    onContextMenu={(e) => { this.toggleContextMenu(e, champion)}}
                                    onDragStart={this.preventEvent}
                                    draggable={false}
                                    // onMouseEnter={(e) => this.props.onItemHover(this.props.itemName, this.props.x, this.props.y)}
                                    // onMouseLeave={(e) => this.props.onItemHover(null)}
                                />
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div style={{ position: "absolute", top: "70%", left: "70%"}}>
                        {contextMenu}
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

    toggleContextMenu(e, champion) {
        if (this.state.showContextMenu === null || this.state.showContextMenu.name !== champion.name) {
            this.preventEvent(e);
            this.setState({
                showContextMenu: champion
            });
        } else {
            this.preventEvent(e);
            this.setState({
                showContextMenu: null
            });
        }
    }

    preventEvent(e) {
        e.preventDefault();
    }
}
