import React, {Component} from 'react';

import { Form, Container, Row, Col } from 'react-bootstrap';


export default class AboutPage extends Component {
    
    render () {

        return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
            <div style={{ margin: "auto", width: "600px", backgroundColor: "#4e5d6c", borderRadius: "5px", textAlign: "justify", marginTop: "100px" }}>
                <div className="fadeIn" style={{margin: "5px", padding: "30px"}}>
                    <h2 style={{ textAlign: "center"}}>About TFT Itemizer</h2>
                    <br/>
                    <p>This tool for the League of Legends Teamfight Tactics gamemode provides you with a fast overview of your items and which options you have when it comes to combining them into more advanced ones. Add and remove items with ease and see everything you need to know via many customizable highlighting features.</p>
                    <p>I created this project in my freetime, because most of the other tools I found on the internet were always lacking in one or two aspects, so I took it upon myself to create a tool which would fit my needs. The result is shared on this website for everyone to use. I hope that it will help you to learn and improve as well as concentrate on the more important aspects of the game.</p>
                    <p>See you on the chess board, summoner!</p>
                </div>
            </div>
        </div>
    }
}