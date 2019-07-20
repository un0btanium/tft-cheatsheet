import React, {Component} from 'react';

import { Image } from 'react-bootstrap';


import cursedblade from '../images/cursedblade.png';
import darkin from '../images/darkin.png';
import dragonsclaw from '../images/dragonsclaw.png';
import hush from '../images/hush.png';
import ionicspark from '../images/ionicspark.png';
import redbuff from '../images/redbuff.png';
import spatula from '../images/spatula.png';
import swordbreaker from '../images/swordbreaker.png';
import yuumi from '../images/yuumi.png';
import zekesherald from '../images/zekesherald.png';

let altimages = {
    "cursedblade": cursedblade,
    "darkin": darkin,
    "dragonsclaw": dragonsclaw,
    "hush": hush,
    "ionicspark": ionicspark,
    "redbuff": redbuff,
    "spatula": spatula,
    "swordbreaker": swordbreaker,
    "yuumi": yuumi,
    "zekesherald": zekesherald
}

export default class Item extends Component {

    render () {

        if (this.props.item !== null && this.props.item !== undefined) {
            let src;
            if (this.props.item.img === null || this.props.item.img === undefined) {
                src = altimages[this.props.item.altimg];
            } else {
                src = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/item/" + this.props.item.img + ".png";
            }

            let imageStyle = { border: "solid 3px #000000" }; // black
            if (this.props.isItemIgnored) {
                imageStyle = { ...imageStyle, opacity: "0.15" }; // black (hidden/ignored)
            } else if (this.props.isHoverHighlighted) {
                imageStyle = { ...imageStyle, border: "solid 3px rgba(232, 198, 7)" }; // gold
            } else {
                if (this.props.additionalHighlighting) {
                    if (this.props.craftableItemAmount > 0) {
                        if (this.props.useBlueColor) {
                            imageStyle = { ...imageStyle, border: "solid 3px rgba(0, 125, 255)" }; // blue
                        } else {
                            imageStyle = { ...imageStyle, border: "solid 3px rgba(50, 255, 50)" }; // green
                        }
                    } else if (this.props.isAlmostBuyable) {
                        imageStyle = { ...imageStyle, border: "solid 3px rgb(25, 100, 50)" }; // dark green
                    }
                }
            }


            let descriptionText = this.props.item.effect;
            if (this.props.item.effect.length > 47) {
                if (this.props.item.effectShort === undefined || this.props.item.effectShort === null) {
                    descriptionText =  this.props.item.effect.substring(0, 47);
                } else {
                    descriptionText = this.props.item.effectShort;
                }

            }
            let description = null;
            if (this.props.isDescriptionVisible) {
                description = <div style={{ position: "absolute", textAlign: "center", zIndex: "20", top: "2px", left: "0px", width: "100%", height: "100%", color: "#FFFFFF", fontSize: "10px", pointerEvents: "none" }}>
                    <span style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                        {descriptionText}
                    </span>
                </div>
            }


            let overlayElements = [];
            if (this.props.craftableItemAmount > 0) {
                let style = {position: "absolute", bottom: "3px", right: "3px", fontSize: "18px", textAlign: "center", height: "24px", width: "24px"};
                if (this.props.useBlueColor) {
                    style = {...style, backgroundColor: "rgb(5, 95, 230)", color: "rgb(255, 255, 255)"}; // blue
                } else {
                    style = {...style, backgroundColor: "rgb(50, 255, 50)", color: "rgb(0, 0, 0)"}; // green
                }
                overlayElements.push(<span style={style} key={"ItemCounter-" + this.props.itemName}><b>{this.props.craftableItemAmount}</b></span>);
            }

            if (this.props.highlightAlmostBuyableItems) {
                if (!this.props.isHoverHighlighted && !(this.props.craftableItemAmount > 0 || this.props.isAlmostBuyable)) {
                    overlayElements.push(<span style={{ position: "absolute", zIndex: "3", top: "0px", left: "0px", height: "100%", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }} key={"ItemAlmostBuyable-" + this.props.itemName}></span>);
                }
            }

            let missingItemImage = null;
            if (this.props.missingItem !== null && (this.props.craftableItemAmount === 0)) {
                let missingItemSrc;
                if (this.props.missingItem.img === null || this.props.missingItem.img === undefined) {
                    missingItemSrc = altimages[this.props.missingItem.altimg];
                } else {
                    missingItemSrc = "http://ddragon.leagueoflegends.com/cdn/9.14.1/img/item/" + this.props.missingItem.img + ".png";
                }
                missingItemImage = <Image
                    key={"MissingItemImage" + this.props.itemName}
                    style={{ position: "absolute", bottom: "3px", right: "3px", zIndex: 10, border: "solid 2px rgb(25, 100, 50)"}}
                    width={24}
                    height={24}
                    src={missingItemSrc}
                    alt={this.props.missingItem.name}
                    onDragStart={this.preventEvent}
                    draggable={false}
                    onMouseEnter={(e) => { e.preventDefault(); this.props.onItemHover(this.props.missingItem.name, this.props.x, this.props.y)}}
                    onMouseLeave={(e) => { e.preventDefault(); this.props.onItemHover(null)}}>
                </Image>
            }

            if (this.props.isItemIgnored) {
                overlayElements=[];
                description = null;
                missingItemImage = null;
            }


            let divStyle = { display: "block-inline", backgroundColor: "#000000"};

            return <div style={divStyle}>
                {description}
                <div style={{ position: "absolute", zIndex: "5", top: "0", left: "0", width: "100%", height: "100%", pointerEvents: "none" }}>
                    {overlayElements}
                </div>
                {missingItemImage}
                <Image
                    style={imageStyle}
                    width={"100%"}
                    height={"100%"}
                    src={src}
                    alt={this.props.itemName}
                    onClick={(e) => this.props.onItemClick(e, this.props.itemName)}
                    onContextMenu={(e) => this.props.onItemClick(e, this.props.itemName)}
                    onDragStart={this.preventEvent}
                    draggable={false}
                    onMouseEnter={(e) => this.props.onItemHover(this.props.itemName, this.props.x, this.props.y)}
                    onMouseLeave={(e) => this.props.onItemHover(null)}>
                </Image>
            </div>
        } else {
            console.log("Unknown item! " + this.props.itemName)
            return <div style={{width: "100%", height: "100%"}}>Unknown item!</div>;
        }
    }

    preventEvent(e) {
        e.preventDefault();
    }
}
