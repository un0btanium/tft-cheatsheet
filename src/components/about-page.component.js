import React, {Component} from 'react';


export default class AboutPage extends Component {
    
    render () {

        return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
            <div style={{ margin: "auto", width: "600px", backgroundColor: "#4e5d6c", borderRadius: "5px", textAlign: "justify", marginTop: "100px", boxShadow: '2px 2px 5px #000000' }}>
                <div className="fadeIn" style={{margin: "5px", padding: "30px"}}>
                    <h2 style={{ textAlign: "center"}}>About TFT CheatSheet</h2>
                    <br/>
                    <p>This tool for the League of Legends Teamfight Tactics gamemode provides you with a fast overview of your items and champions and which options you have when it comes to combining items into more advanced ones as well as your options when creating your team composition. Add and remove items/champions with ease and see everything you need to know via many customizable highlighting features.</p>
                    <p>I created this project in my freetime, because most of the other tools I found on the internet were always lacking in one or two aspects, so I took it upon myself to create a tool which would fit my needs. The result is shared on this website for everyone to use. I hope that it will help you to learn and improve as well as concentrate on the more important aspects of the game.</p>
                    <p>See you on the chess board, summoner!</p>
                    <br/>
                    <br/>
                    <br/>
                    <p>TFT CheatSheet isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
                </div>
            </div>
        </div>
    }
}