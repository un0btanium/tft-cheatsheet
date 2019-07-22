import React, {Component} from 'react';

import { Form, Container, Row, Col, Image, OverlayTrigger, Popover } from 'react-bootstrap';

import ChampionContainer from './champion-container.component';

import championData from '../championdata/champions';

let classIcons = {};
let originIcons = {};

export default class TFTChampionGrid extends Component {
    
    constructor(props) {
        super(props);

        let defaultSettings = {
            championGridShowChampionTierBorder: true,
            championGridShowChampionTierOverlay: true,
            championGridShowChampionTooltip: true,
            championGridShowOriginAndClassTooltips: true
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


        let champions = championData.list;
        
        let selectedClasses = {};
        let selectedOrigins = {};
        let origins = [];
        let classes = [];
        for (let champion of champions) {
            for (let className of champion.classes) {
                if (selectedClasses[className] === null || selectedClasses[className] === undefined) {
                    selectedClasses[className] = 0;
                    classes.push(className);
                }
            }
            for (let originName of champion.origins) {
                if (selectedOrigins[originName] === null || selectedOrigins[originName] === undefined) {
                    selectedOrigins[originName] = 0;
                    origins.push(originName);
                }
            }
        }

        
        let imageContext = require.context('../images/', false, /\.(png)$/);
        let images = this.importImages(imageContext);
        for (let className of classes) {
            classIcons[className] = images[className];
        }
        for (let originName of origins) {
            originIcons[originName] = images[originName];
        }

        let sortFunction = function (a, b) {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            return 0;
        };
        classes = classes.sort(sortFunction);
        origins = origins.sort(sortFunction);

        let selectedChampions = {};
        for (let champion of champions) {
            selectedChampions[champion.name] = false;
        }

        let grid = [];
        for (let champion of champions) {
            for (let className of champion.classes) {
                for (let originName of champion.origins) {
                    let classIndex = classes.indexOf(className);
                    let originIndex = origins.indexOf(originName);
                    if (grid[classIndex] === null || grid[classIndex] === undefined) {
                        grid[classIndex] = [];
                    }
                    let entry = grid[classIndex][originIndex];
                    if (entry === null || entry === undefined) {
                        grid[classIndex][originIndex] = [];
                    }
                    grid[classIndex][originIndex].push(champion);
                }
            }
        }
            
        let championsByName = {};
        for (let champion of champions) {
            championsByName[champion.name] = champion;
        }

        this.state = {
            champions: champions,
            championsByName: championsByName,

            littleLegendLevel: 1,

            classes: classes,
            origins: origins,
            grid: grid,

            selectedChampions: selectedChampions,
            selectedClasses: selectedClasses,
            selectedOrigins: selectedOrigins,

            championGridShowChampionTierBorder: defaultSettings.championGridShowChampionTierBorder,
            championGridShowChampionTierOverlay: defaultSettings.championGridShowChampionTierOverlay,
            championGridShowChampionTooltip: defaultSettings.championGridShowChampionTooltip,
            championGridShowOriginAndClassTooltips: defaultSettings.championGridShowOriginAndClassTooltips,

            hoveredChampion: null,
            hoveredClassOrOrigin: null
        }

        this.toggleSetting = this.toggleSetting.bind(this);
        this.onChampionHover = this.onChampionHover.bind(this);
        this.onClassOrOriginHover = this.onClassOrOriginHover.bind(this);
        this.onChampionClick = this.onChampionClick.bind(this);


        if (isFirstVisit) {

            setTimeout(() => {
                this.toggleChampionSelection(championsByName["Lucian"]);
            }, 1000);

            setTimeout(() => {
                this.toggleChampionSelection(championsByName["Tristana"]);
            }, 2000);

            setTimeout(() => {
                this.toggleChampionSelection(championsByName["Kennen"]);
            }, 3000);
            
            setTimeout(() => {
                this.toggleChampionSelection(championsByName["Poppy"]);
            }, 4000);

            setTimeout(() => {
                this.toggleChampionSelection(championsByName["Garen"]);
            }, 5000);

            setTimeout(() => {
                this.toggleChampionSelection(championsByName["Fiora"]);
            }, 6000);

            setTimeout(() => {
                this.toggleChampionSelection(championsByName["Draven"]);
            }, 7000);

            setTimeout(() => {
                this.toggleChampionSelection(championsByName["Yasuo"]);
            }, 8000);
            

            setTimeout(() => {
                this.toggleChampionSelection(championsByName["Lucian"]);
                this.toggleChampionSelection(championsByName["Tristana"]);
                this.toggleChampionSelection(championsByName["Kennen"]);
                this.toggleChampionSelection(championsByName["Poppy"]);
                this.toggleChampionSelection(championsByName["Garen"]);
                this.toggleChampionSelection(championsByName["Fiora"]);
                this.toggleChampionSelection(championsByName["Draven"]);
                this.toggleChampionSelection(championsByName["Yasuo"]);
            }, 11000);
        }
    }

    importImages(imageContext) {
        let images = {};
        imageContext.keys().forEach((imageName) => {
            let classOrOriginName = imageName.replace('./', '').replace('.png', '');
            images[classOrOriginName] = imageContext(imageName);
        });
        return images;
    }


    render () {

        let colStyle = {width: "100%", height: "100%", padding: "0px"};
        let rowStyle = {padding: "0px", margin: "0px"};

        let tooltimeShowDelay = 25;
        if (!this.state.championGridShowOriginAndClassTooltips) {
            tooltimeShowDelay = 999999;
        }

        let grid = this.state.origins.map((originName, posY) => {

            let row = this.state.classes.map((className, posX) => {

                let champions = this.state.grid[posX][posY];

                // is a champ selected, then highlight border
                let finalColStyle;
                let isChampionSelected = false;
                if (champions !== undefined && champions !== null) {
                    for (let champion of champions) {
                        if (this.state.selectedChampions[champion.name]) {
                            isChampionSelected = true;
                            break;
                        }
                    }
                }
                if (isChampionSelected) {
                    // finalColStyle = { ...colStyle, border: "solid 3px rgb(232, 198, 7)"}; // golden border
                    finalColStyle = { ...colStyle, border: "solid 3px rgb(255, 100, 150)"}; // red border
                } else {
                    let intensity = Math.min(255, (Math.max(this.state.selectedOrigins[originName], this.state.selectedClasses[className]))*40);        
                    if (intensity === 0) {
                        finalColStyle = { ...colStyle, border: "solid 3px rgb(" + intensity + ", 0, 0)"};
                    } else {
                        finalColStyle = { ...colStyle, border: "solid 3px rgb(" + intensity + ", 50, 50)"};
                    }
                }

                return <Col style={finalColStyle} key={"ChampionCol-" + posX + "-" + posY}>
                    <ChampionContainer
                        x={posX} y={posY}
                        champions={champions}
                        className={className}
                        originName={originName}
                        selectedChampions={this.state.selectedChampions}
                        selectedClasses={this.state.selectedClasses}
                        selectedOrigins={this.state.selectedOrigins}
                        showChampionTierBorder={this.state.championGridShowChampionTierBorder}
                        showChampionTierOverlay={this.state.championGridShowChampionTierOverlay}
                        showChampionTooltip={this.state.championGridShowChampionTooltip}
                        onChampionHover={this.onChampionHover}
                        onChampionClick={this.onChampionClick}
                    />
                </Col>
            });

            let originColumn = <Col style={{...colStyle, borderRight: "solid 4px #FFFFFF"}} key={"OriginCol"+originName}>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: tooltimeShowDelay, hide: 100 }}
                    overlay={
                        <Popover
                            style={{ background: 'rgba(0,0,0, 0.8)', backgroundColor: 'rgba(0,0,0, 0.8)', textAlign: 'left', wordBreak: 'keep-all', whiteSpace: 'pre'}}
                            //arrowProps={style="{{background: 'rgba(0,0,0, 0.8)'}}"}
                            id="tooltipHighlighting"
                        >
                            <><span><h6>{originName}</h6></span></>
                        </Popover>
                    }
                >
                    <Image
                        style={{ margin: "0px", padding: "9px" }}
                        width={"100%"}
                        height={"100%"}
                        src={originIcons[originName]}
                        alt={originName}
                        onDragStart={this.preventEvent}
                        draggable={false}
                        // onMouseEnter={(e) => this.props.onItemHover(this.props.itemName, this.props.x, this.props.y)}
                        // onMouseLeave={(e) => this.props.onItemHover(null)}
                    />
                </OverlayTrigger>
            </Col>

            return <Row style={rowStyle} key={"ChampionRow-" + posY}>{originColumn}{row}</Row>

        });


        let classesRow = this.state.classes.map((className, i) => {
            return <Col style={{...colStyle, borderBottom: "solid 4px #FFFFFF"}} key={"Class"+className} >
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: tooltimeShowDelay, hide: 100 }}
                    overlay={
                        <Popover
                            style={{ background: 'rgba(0,0,0, 0.8)', backgroundColor: 'rgba(0,0,0, 0.8)', textAlign: 'left', wordBreak: 'keep-all', whiteSpace: 'pre'}}
                            //arrowProps={style="{{background: 'rgba(0,0,0, 0.8)'}}"}
                            id="tooltipHighlighting"
                        >
                            <><span><h6>{className}</h6></span></>
                        </Popover>
                    }   
                >
                    <Image
                        style={{ margin: "0px", padding: "2px 10px 7px 10px" }}
                        width={"100%"}
                        height={"100%"}
                        src={classIcons[className]}
                        alt={className}
                        onDragStart={this.preventEvent}
                        draggable={false}
                        // onMouseEnter={(e) => this.props.onItemHover(this.props.itemName, this.props.x, this.props.y)}
                        // onMouseLeave={(e) => this.props.onItemHover(null)}
                    />
                </OverlayTrigger>
            </Col>
        });

        let selectedChampionsByTier = [];
        let selectedChampionList = [];
        for (let championName in this.state.selectedChampions) {
            if (this.state.selectedChampions[championName]) {
                selectedChampionsByTier.push(this.state.championsByName[championName]);
            }
        }
        selectedChampionsByTier = selectedChampionsByTier.sort((champion1, champion2) => {
            if (champion1.tier > champion2.tier) {
                return -1;
            } else if (champion1.tier < champion2.tier) {
                return 1;
            }
            return 0;
        });
        for (let champion of selectedChampionsByTier) {
            if (selectedChampionList.length < 11) {
                selectedChampionList.push(<Col sm={1} style={{...colStyle, maxWidth: "8.2%", margin: "2px"}} key={"ChampionList-" + champion.name}>
                    <ChampionContainer
                        x={-1} y={-1}
                        tooltipDirection="bottom"
                        champions={[champion]}
                        className={null}
                        originName={null}
                        selectedChampions={[]}
                        selectedClasses={this.state.selectedClasses}
                        selectedOrigins={this.state.selectedOrigins}
                        showChampionTierBorder={this.state.championGridShowChampionTierBorder}
                        showChampionTierOverlay={this.state.championGridShowChampionTierOverlay}
                        showChampionTooltip={this.state.championGridShowChampionTooltip}
                        onChampionHover={this.onChampionHover}
                        onChampionClick={this.onChampionClick}
                    />
                </Col>);
            }
        }


        return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 25px 0px" }}>
                <div style={{ maxWidth: "700px" }}>
                    <Container style={{display: "block", margin: "0px 0px 15px 0px", padding: "5px 15px 5px 15px", minHeight: "35px", width: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
                        <Row className="fadeIn">
                            <Col xs={6}>
                                <Form.Check id="toggleChampionGridShowChampionTierBorder" type="checkbox" className="custom-switch" custom="true" label="Show Champion Tier Borders" checked={this.state.championGridShowChampionTierBorder} onChange={(e) => this.toggleSetting("championGridShowChampionTierBorder")} />
                            </Col>
                            <Col xs={6}>
                                <Form.Check id="toggleChampionGridShowChampionTierOverlay" type="checkbox" className="custom-switch" custom="true" label="Show Champion Tier Overlays" checked={this.state.championGridShowChampionTierOverlay} onChange={(e) => this.toggleSetting("championGridShowChampionTierOverlay")} />
                            </Col>
                        </Row>
                        <Row className="fadeIn">
                            <Col xs={6}>
                                <Form.Check id="toggleChampionGridShowChampionTooltip" type="checkbox" className="custom-switch" custom="true" label="Show Champion Tooltips on Hover" checked={this.state.championGridShowChampionTooltip} onChange={(e) => this.toggleSetting("championGridShowChampionTooltip")} />
                            </Col>
                            <Col xs={6}>
                                <Form.Check id="toogleChampionGridShowOriginAndClassTooltips" type="checkbox" className="custom-switch" custom="true" label="Show Origin & Class Tooltips on Hover" checked={this.state.championGridShowOriginAndClassTooltips} onChange={(e) => this.toggleSetting("championGridShowOriginAndClassTooltips")} />
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{display: "block", margin: "0px 0px 15px 0px", padding: "5px", height: "80px", maxHeight: "80px", width: "100%", maxWidth: "100%", backgroundColor: "#4e5d6c", borderRadius: "5px", boxShadow: '2px 2px 5px #000000'}}>
                        <Row className="fadeIn" key="SelectedChampionOverviewList" style={{ ...rowStyle, margin: "5px"}}>
                            {selectedChampionList}
                        </Row>
                    </Container>
                    <div style={{backgroundColor: "#4e5d6c", borderRadius: "5px", width: "100%", boxShadow: '2px 2px 5px #000000'}}>
                        <div className="fadeIn" style={{ display: "flex", padding: "0px", margin: "0px" }}>
                            <Container style={{ padding: "0px", backgroundColor: "#000000", margin: "12px", border: "solid 3px #000000", borderRadius: "5px"}}>
                                <Row style={rowStyle} key="ClassesRow">
                                    <Col style={{...colStyle, visibility: "hidden"}} key={"HiddenCornerCol"}>
                                        <Image
                                            style={{ margin: "0px", padding: "2px 10px 7px 10px"  }}
                                            width={"100%"}
                                            height={"100%"}
                                            src={originIcons["Demon"]}
                                            alt={"HiddenCornerImage"}
                                            onDragStart={this.preventEvent}
                                            draggable={false}
                                            // onMouseEnter={(e) => this.props.onItemHover(this.props.itemName, this.props.x, this.props.y)}
                                            // onMouseLeave={(e) => this.props.onItemHover(null)}
                                        />
                                    </Col>
                                    {classesRow}
                                </Row>

                                {grid}
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    toggleSetting(key) {
        localStorage.setItem(key, !this.state[key]);
        this.setState({
            [key]: !this.state[key]
        });
    }

    onChampionHover(champion, x, y) {
        if (champion === null) {
            this.setState({
                hoveredChampion: null
            })
        } else {
            this.setState({
                hoveredChampion: champion
            })
        }
    }

    onClassOrOriginHover(classOrOrigin, x, y) {
        if (classOrOrigin === null) {
            this.setState({
                hoveredClassOrOrigin: null
            })
        } else {
            this.setState({
                hoveredClassOrOrigin: classOrOrigin
            })
        }
    }

    onChampionClick(e, champion) {
        e.preventDefault();

        if (e.type === 'click') {
            this.toggleChampionSelection(champion);
        } else if (e.type === 'contextmenu') {
            
        }
    }

    toggleChampionSelection(champion) {
        let selectedChampions = {...this.state.selectedChampions};
        let selectedClasses = {...this.state.selectedClasses};
        let selectedOrigins = {...this.state.selectedOrigins};

        if (selectedChampions[champion.name]) { // is selected, got unselected, remove
            for (let className of champion.classes) {
                selectedClasses[className] = selectedClasses[className]-1;
            }
            for (let originName of champion.origins) {
                selectedOrigins[originName] = selectedOrigins[originName]-1;
            }
        } else { // is not selected, got selected, add
            for (let className of champion.classes) {
                selectedClasses[className] = selectedClasses[className]+1;
            }
            for (let originName of champion.origins) {
                selectedOrigins[originName] = selectedOrigins[originName]+1;
            }
        }

        selectedChampions[champion.name] = !selectedChampions[champion.name];
        this.setState({
            selectedChampions: selectedChampions,
            selectedClasses: selectedClasses,
            selectedOrigins: selectedOrigins
        })
    }
}