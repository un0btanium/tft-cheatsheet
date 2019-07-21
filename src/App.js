import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import logo from "./images/spatula.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/bootstrap.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import TFTItemizer from './components/tft-itemizer.component';
import TFTChampionGrid from './components/tft-champion-grid.component';
import MultiView from './components/multi-view.component';
import AboutPage from './components/about-page.component.js';
import ContactPage from './components/contact-page.component.js';

const BG = "dark"; // primary, dark, light
const VARIANT = "dark"; // dark, light

const reloadWindow = () => window.location.reload();

const WEBSITE_URL = "tft-itemizer.com";

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {};

    let url = '' + window.location.href;
    if (!(url.includes("localhost:3000") || url.includes(WEBSITE_URL))) {
      console.log("Yo wtf u doin?");
      window.location.assign("http://" + WEBSITE_URL + "/");
    }

    // TODO axios request latest league patch for icon url
  }

  render() {

    return (
      <Router>
          <Navbar bg={BG} variant={VARIANT} style={{ boxShadow: '0px 2px 5px #000000'}}>
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Brand>
                <a href="http://tft-itemizer.com">
                  <img src={logo} width="35" height="35" alt="Logo" />
                  {' tft-itemizer.com'}
                </a>
              </Navbar.Brand>
              
              <div className="collapse navbar-collapse">

                <Nav className="mr-auto">
                  <Nav.Link as={Link} variant="light" to="/items">Items</Nav.Link>
                  <Nav.Link as={Link} variant="light" to="/champions">Champions</Nav.Link>
                  <Nav.Link as={Link} variant="light" to="/multiview">Multiview</Nav.Link>
                </Nav>

                <Nav>
                  <Nav.Link as={Link} variant="light" to="/about">About</Nav.Link>
                  <Nav.Link as={Link} variant="light" to="/contact">Contact</Nav.Link>
                </Nav>

              </div>
            </Container>
          </Navbar>
          <div>
          <div style={{ width: "100%", height:"100%"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0x 0px 0px 0px" }}>
                <iframe style={{marginTop: "25px"}} frameBorder="0" border="0" width="320" height="50" title="Amazon" src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=288&l=ez&f=ifr&linkID=16a5d25b2b5cdbac352adcd7eddf3054&t=tftcheatsheet-21&tracking_id=tftcheatsheet-21"></iframe>
              </div>
            </div>
          </div>
          {/* <div style={{width: "50%", transform: "translate(50%, 50%) scale(2)"}}> */}
          <Switch>
            <Route exact path="/" component={TFTItemizer} />
            <Route exact path="/items" component={TFTItemizer} />
            <Route exact path="/champions" component={TFTChampionGrid} />
            <Route exact path="/multiview" component={MultiView} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/sitemap.xml" onEnter={reloadWindow} />
            <Route exact path="/robots.txt" onEnter={reloadWindow} />
            <Route component={TFTItemizer} />
          </Switch>
          {/* </div> */}
      </Router>
    );
  }
}

export default withRouter(App);