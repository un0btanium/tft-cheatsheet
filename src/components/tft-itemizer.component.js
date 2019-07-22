import React, {Component} from 'react';

import Item from './item.component.js';

import { Form, Container, Row, Col } from 'react-bootstrap';

import baseItems from '../itemdata/base-items';
import advancedItems from '../itemdata/advanced-items';
import itemRecipes from '../itemdata/item-recipes';

let recipesByItems = {};
for (let baseItemA in baseItems) {
    for (let baseItemB in baseItems) {
        recipesByItems[itemRecipes[baseItemA][baseItemB]] = [baseItemA, baseItemB];
    }
}


export default class TFTItemizer extends Component {
    
    constructor(props) {
        super(props);


        let defaultSettings = {
            isYAxisFlipped: false,
            isYAxisRightSided: false,
            isOtherHalfIgnored: true,
            isDescriptionVisible: false,
            highlightAlmostBuyableItems: true,
            additionalHighlighting: true,
            showAlmostBuyableItemImages: true,
            highlightOnHover: false
        }


        let isFirstVisit = true;
        for (let setting in defaultSettings) {
            let localStorageEntry = localStorage.getItem(setting);
            if (localStorageEntry === null && (localStorageEntry !== "true" || localStorageEntry !== "false")) {
                localStorage.setItem(setting, defaultSettings[setting]);
            } else {
                defaultSettings[setting] = (localStorage.getItem(setting) === "true");
                isFirstVisit = false;
            }
        }
        
        let selectedBaseItems = {};
        let order = [];
        for (let baseItem in baseItems) {
            selectedBaseItems[baseItem] = 0;
            order.push(baseItem);
        }


        this.state = {
            selectedBaseItems: selectedBaseItems,
            order: order,

            isYAxisFlipped: defaultSettings.isYAxisFlipped,
            isYAxisRightSided: defaultSettings.isYAxisRightSided,
            isOtherHalfIgnored: defaultSettings.isOtherHalfIgnored,
            isDescriptionVisible: defaultSettings.isDescriptionVisible,
            highlightAlmostBuyableItems: defaultSettings.highlightAlmostBuyableItems,
            additionalHighlighting: defaultSettings.additionalHighlighting,
            showAlmostBuyableItemImages: defaultSettings.showAlmostBuyableItemImages,
            highlightOnHover: defaultSettings.highlightOnHover,

            hoveredItem: null
        }

        this.toggleSetting = this.toggleSetting.bind(this);
        this.onItemHover = this.onItemHover.bind(this);
        this.onItemClick = this.onItemClick.bind(this);


        if (isFirstVisit) {
            
            setTimeout(() => {
                let selectedBaseItems2 = {...this.state.selectedBaseItems};
                selectedBaseItems2["Recurve Bow"] = selectedBaseItems2["Recurve Bow"]+1;
                this.setState({
                    selectedBaseItems: selectedBaseItems2
                });
            }, 1500);

            setTimeout(() => {
                let selectedBaseItems2 = {...this.state.selectedBaseItems};
                selectedBaseItems2["Chain Vest"] = selectedBaseItems2["Chain Vest"]+1;
                this.setState({
                    selectedBaseItems: selectedBaseItems2
                });
            }, 3000);

            setTimeout(() => {
                let selectedBaseItems2 = {...this.state.selectedBaseItems};
                selectedBaseItems2["Chain Vest"] = selectedBaseItems2["Chain Vest"]+1;
                this.setState({
                    selectedBaseItems: selectedBaseItems2
                });
            }, 4500);
            
            setTimeout(() => {
                let selectedBaseItems2 = {...this.state.selectedBaseItems};
                selectedBaseItems2["Recurve Bow"] = Math.max(0, selectedBaseItems2["Recurve Bow"]-1);
                selectedBaseItems2["Chain Vest"] = Math.max(0, selectedBaseItems2["Chain Vest"]-1);
                this.setState({
                    selectedBaseItems: selectedBaseItems2
                });
                
            }, 6000);

            setTimeout(() => {
                let selectedBaseItems2 = {...this.state.selectedBaseItems};
                selectedBaseItems2["Chain Vest"] = Math.max(0, selectedBaseItems2["Chain Vest"]-1);
                this.setState({
                    selectedBaseItems: selectedBaseItems2
                });
                
            }, 7500);
        }
    }

    render () {

        // TODO REWORK THIS MESS FOR MORE FUNCTIONALITY
        // DO I LIKE WITH THE CHAMPIONS: SEND SELECTEDBASEITEMS TO ITEMCOMPONENT AND LET IT HANDLE MOST THE HIGHLIGHTING.
        // FIGURE OUT THE LIMITATIONS OF THIS IMPLEMENTATION AND IF IT CAN BE CHANGED

        let colStyle = {width: "100%", height: "100%", padding: "0px"};
        let rowStyle = {padding: "0px", margin: "0px"};

        let axisXHighlighted = [];
        let axisYHighlighted = [];
        if (this.state.hoveredItem !== null) {
            let colXhovered = this.state.hoveredItem.x;
            let rowYhovered = this.state.hoveredItem.y;
            for (let i = 0; i < this.state.order.length; i++) {
                axisXHighlighted[i] = false;
                axisYHighlighted[i] = false;
                if (colXhovered !== null) {
                    if (colXhovered === i) {
                        axisXHighlighted[i] = true;
                    }
                    if (this.state.isYAxisFlipped) {
                        if (this.state.order.length-colXhovered-1 === i) {
                            axisYHighlighted[i] = true;
                        }
                    } else {
                        if (colXhovered === i) {
                            axisYHighlighted[i] = true;
                        }
                    }
                }
                if (rowYhovered !== null) {
                    if (rowYhovered === i) {
                        axisYHighlighted[i] = true;
                    }
                    if (this.state.isYAxisFlipped) {
                        if (this.state.order.length-rowYhovered-1 === i) {
                            axisXHighlighted[i] = true;
                        }
                    } else {
                        if (rowYhovered === i) {
                            axisXHighlighted[i] = true;
                        }
                    }
                }
            }
        }

        let grid = this.state.order.map((itemNameY, posY) => {

            let baseItemName;
            if (this.state.isYAxisFlipped) {
                baseItemName = this.state.order[this.state.order.length-posY-1];
            } else {
                baseItemName = this.state.order[posY];
            }

            let row = this.state.order.map((itemNameX, posX) => {

                let isHoverHighlighted = false;
                if (this.state.highlightOnHover) {
                    if (axisXHighlighted[posX]) {
                        isHoverHighlighted = true;
                    }
                    if (axisYHighlighted[posY]) {
                        isHoverHighlighted = true;
                    }
                }

                let isItemIgnored = this.isItemIgnored(posX, posY);
                let itemName;
                if (this.state.isYAxisFlipped) {
                    itemName = itemRecipes[this.state.order[this.state.order.length-posY-1]][itemNameX];
                } else {
                    itemName = itemRecipes[this.state.order[posY]][itemNameX];
                }

                let craftableItemAmount = 0;
                let isAlmostBuyable = false;

                let requiredItemA = recipesByItems[itemName][0];
                let requiredItemB = recipesByItems[itemName][1];
                
                let selectedBaseItems = {...this.state.selectedBaseItems};
                while (selectedBaseItems[requiredItemA] > 0 && selectedBaseItems[requiredItemB] > 0) {
                    
                    selectedBaseItems[requiredItemA] = selectedBaseItems[requiredItemA]-1;
                    selectedBaseItems[requiredItemB] = selectedBaseItems[requiredItemB]-1;

                    if (selectedBaseItems[requiredItemA] < 0) { // in case it requires the same item twice and only one was in inventory and two were subtracted
                        isAlmostBuyable = true;
                    } else {
                        craftableItemAmount++;
                    }
                }

                let missingItem = null;
                if (selectedBaseItems[requiredItemA]+selectedBaseItems[requiredItemB] > 0 || selectedBaseItems[requiredItemA]+selectedBaseItems[requiredItemB] === -2) {
                    isAlmostBuyable = true;

                    if (this.state.showAlmostBuyableItemImages) {
                        if (this.state.selectedBaseItems[requiredItemA]-this.state.selectedBaseItems[requiredItemB] > 0) {
                            missingItem = baseItems[requiredItemB];
                            missingItem.name = requiredItemB;
                        } else {
                            missingItem = baseItems[requiredItemA];
                            missingItem.name = requiredItemA;
                        }
                    }
                }

                if (!this.state.highlightAlmostBuyableItems) {
                    isAlmostBuyable = false;
                }

                return <Col style={colStyle} key={"ItemCol-" + posX + "-" + posY}>
                    <Item
                        x={posX} y={posY}
                        itemName={itemName}
                        item={advancedItems[itemName]}
                        craftableItemAmount={craftableItemAmount}
                        useBlueColor={false}
                        isAlmostBuyable={isAlmostBuyable}
                        isItemIgnored={isItemIgnored}
                        isDescriptionVisible={this.state.isDescriptionVisible}
                        isHoverHighlighted={isHoverHighlighted}
                        additionalHighlighting={this.state.additionalHighlighting}
                        highlightAlmostBuyableItems={this.state.highlightAlmostBuyableItems}
                        missingItem={missingItem}
                        onItemHover={this.onItemHover}
                        onItemClick={this.onItemClick}
                    />
                </Col>
            });

            
            let yAxisCol = <Col style={colStyle} key={"ItemCol--1-" + posY}>
                <Item
                    x={null} y={posY}
                    itemName={baseItemName}
                    item={baseItems[baseItemName]}
                    craftableItemAmount={this.state.selectedBaseItems[baseItemName]}
                    useBlueColor={true}
                    isAlmostBuyable={false}
                    ignoreItem={false}
                    isDescriptionVisible={this.state.isDescriptionVisible}
                    isHoverHighlighted={axisYHighlighted[posY]}
                    additionalHighlighting={this.state.additionalHighlighting}
                    highlightAlmostBuyableItems={false}
                    missingItem={null}
                    onItemHover={this.onItemHover}
                    onItemClick={this.onItemClick}
                />
            </Col>

            if (this.state.isYAxisRightSided) {
                return <Row style={rowStyle} key={"ItemRow-" + posY}>{row}{yAxisCol}</Row>
            } else {
                return <Row style={rowStyle} key={"ItemRow-" + posY}>{yAxisCol}{row}</Row>
            }

        });



        let topRow = <Row style={rowStyle}>
            {!this.state.isYAxisRightSided && <Col style={{...colStyle, backgroundColor: "#000000", borderTopLeftRadius: "5px" }}><div style={{ maxWidth: "64px", maxHeight: "64px", width: "100%", height: "100%"}}></div></Col>}
            {this.state.order.map((itemNameX, posX) => {
                let baseItemName = this.state.order[posX];
                return <Col style={colStyle} key={"ItemCol-" + posX + "--1"}>
                    <Item
                        x={posX} y={null}
                        itemName={baseItemName}
                        item={baseItems[baseItemName]}
                        craftableItemAmount={this.state.selectedBaseItems[baseItemName]}
                        useBlueColor={true}
                        isAlmostBuyable={false}
                        ignoreItem={false}
                        isDescriptionVisible={this.state.isDescriptionVisible}
                        isHoverHighlighted={axisXHighlighted[posX]}
                        additionalHighlighting={this.state.additionalHighlighting}
                        highlightAlmostBuyableItems={false}
                        missingItem={null}
                        onItemHover={this.onItemHover}
                        onItemClick={this.onItemClick}
                    />
                </Col>
            })
            }
            {this.state.isYAxisRightSided && <Col style={{...colStyle, backgroundColor: "#000000", borderTopRightRadius: "5px" }}></Col>}
        </Row>



        let hoveredItemText = null;
        if (this.state.hoveredItem !== null && this.state.hoveredItem !== undefined) {
            let descriptionText;
            if (baseItems[this.state.hoveredItem.itemName] !== undefined) {
                descriptionText = baseItems[this.state.hoveredItem.itemName].effect;
            } else if (advancedItems[this.state.hoveredItem.itemName] !== undefined) {
                descriptionText = advancedItems[this.state.hoveredItem.itemName].effect;
            } else {
                descriptionText = "No description available! Check back later :)";
            }
            hoveredItemText = <div style={{ textAlign: "center"}}>
                <h5 style={{margin: "0px 0px 0px 0px"}}>{this.state.hoveredItem.itemName}</h5>
                <p style={{margin: "auto auto auto auto", maxWidth: "525px", wordWrap: "normal"}}>{descriptionText}</p>
            </div>
        } else {
            hoveredItemText = <div style={{ textAlign: "center"}}>
            <p style={{margin: "0px auto auto auto", maxWidth: "550px", wordWrap: "normal"}}>If you acquire a base item in your match, <b>Leftclick</b> on the item. <b>Rightclick</b> will remove it again. If you are combining two items into an upgraded one, <b>Leftclick</b> on the item you just crafted to remove the two required base items.</p>
        </div>
        }


        return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
            {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ins class="adsbygoogle"
                style={{ display: "block"}}
                data-ad-client="ca-pub-9546873194593525"
                data-ad-slot="7292539265"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script> */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 15px 0px" }}>
                <div style={{ maxWidth: "640px" }}>
                    <Container style={{display: "block", margin: "0px 0px 15px 0px", padding: "5px 15px 5px 15px", minHeight: "80px", width: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
                        <Row className="fadeIn">
                            <Col>
                                <Form.Check id="toggleFlippedYAxis" draggable={false} type="checkbox" className="custom-switch" custom="true" label="Flip Y Axis" checked={this.state.isYAxisFlipped} onChange={(e) => this.toggleSetting("isYAxisFlipped")} />
                            </Col>
                            <Col>
                                <Form.Check id="toggleYAxisSide" draggable={false} type="checkbox" className="custom-switch" custom="true" label="Rightsided Y Axis" checked={this.state.isYAxisRightSided} onChange={(e) => this.toggleSetting("isYAxisRightSided")} />
                            </Col>
                            <Col>
                                <Form.Check id="toggleDescriptionText" type="checkbox" className="custom-switch" custom="true" label="Show Descriptions" checked={this.state.isDescriptionVisible} onChange={(e) => this.toggleSetting("isDescriptionVisible")} />
                            </Col>
                        </Row>
                        <Row className="fadeIn">
                            <Col xs={4}>
                                <Form.Check id="toggleIsOtherHalfIgnored" type="checkbox" className="custom-switch" custom="true" label="Hide Duplicate Items" checked={this.state.isOtherHalfIgnored} onChange={(e) => this.toggleSetting("isOtherHalfIgnored")} />
                            </Col>
                            <Col xs={4}>
                                <Form.Check id="toggleShowAlmostBuyableItemImages" type="checkbox" className="custom-switch" custom="true" label="Show Required Item" checked={this.state.showAlmostBuyableItemImages} onChange={(e) => this.toggleSetting("showAlmostBuyableItemImages")} />
                            </Col>
                            <Col xs={4}>
                                <Form.Check id="toggleHighlightOnHover" type="checkbox" className="custom-switch" custom="true" label="Highlight on Hover" checked={this.state.highlightOnHover} onChange={(e) => this.toggleSetting("highlightOnHover")} />
                            </Col>
                        </Row>
                        <Row className="fadeIn">
                            <Col xs={4}>
                            <Form.Check id="toggleAdditonalHighlighting" type="checkbox" className="custom-switch" custom="true" label="Highlight Borders" checked={this.state.additionalHighlighting} onChange={(e) => this.toggleSetting("additionalHighlighting")} />
                            </Col>
                            <Col xs={8}>
                                <Form.Check id="toggleMissingItemHighlight" type="checkbox" className="custom-switch" custom="true" label="Highlight Almost Buyable Items" checked={this.state.highlightAlmostBuyableItems} onChange={(e) => this.toggleSetting("highlightAlmostBuyableItems")} />
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{display: "block", margin: "0px 0px 15px 0px", padding: "5px 15px 5px 15px", minHeight: "85px", width: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
                        <Row className="fadeIn">
                            <Col>
                                {hoveredItemText}
                            </Col>
                        </Row>
                    </Container>
                    <div style={{backgroundColor: "#4e5d6c", borderRadius: "5px", width: "100%", boxShadow: '2px 2px 5px #000000'}}>
                        <div className="fadeIn" style={{ display: "flex", padding: "0px", margin: "0px" }}>
                            <Container style={{ padding: "0px", backgroundColor: "#000000", margin: "12px", border: "solid 3px #000000", borderRadius: "5px"}}>
                                {topRow}
                                {grid}
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }


    isItemIgnored(x, y) {
        if (this.state.isOtherHalfIgnored) {
            if (this.state.isYAxisFlipped) {
                if (y+x > this.state.order.length-1) {
                    return true;
                }
                return false;
            } else {
                if (x-y < 0) {
                    return true;
                }
                return false;
            }
        } else {
            return false;
        }
    }

    toggleSetting(key) {
        localStorage.setItem(key, !this.state[key]);
        this.setState({
            [key]: !this.state[key]
        });
    }

    onItemHover(itemName, x, y) {
        if (itemName === null) {
            this.setState({
                hoveredItem: null
            })
        } else {
            let item = {
                itemName: itemName,
                x: x,
                y: y
            }
            this.setState({
                hoveredItem: item
            })
        }
    }

    onItemClick(e, itemName) {
        e.preventDefault();

        if (baseItems[itemName] !== undefined) {
            if (e.type === 'click') {
                let selectedBaseItems = {...this.state.selectedBaseItems};
                selectedBaseItems[itemName] = selectedBaseItems[itemName]+1;
                this.setState({
                    selectedBaseItems
                });
            } else if (e.type === 'contextmenu') {
                let selectedBaseItems = {...this.state.selectedBaseItems};
                selectedBaseItems[itemName] = Math.max(0, selectedBaseItems[itemName]-1)
                this.setState({
                    selectedBaseItems
                });
            }
            
        } else if (advancedItems[itemName] !== undefined) {
            if (e.type === 'click') {
                let selectedBaseItems = {...this.state.selectedBaseItems};
                for (let requiredItem of recipesByItems[itemName]) {
                    selectedBaseItems[requiredItem] = Math.max(0, selectedBaseItems[requiredItem]-1);
                }
                this.setState({
                    selectedBaseItems
                });
            } else if (e.type === 'contextmenu') {
                // let selectedBaseItems = {...this.state.selectedBaseItems};
                // for (let requiredItem of recipesByItems[itemName]) {
                //     selectedBaseItems[requiredItem] = selectedBaseItems[requiredItem]+1;
                // }
                // this.setState({
                //     selectedBaseItems
                // });
            }
        }

    }
}