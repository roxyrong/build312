import React, { Component } from 'react';
import * as styles from "./styles";
import bg from './assets/background.jpg';
import white_logo from './assets/white_logo.png';
import black_logo from './assets/black_logo.jpg';
import screenshot from './assets/intro_video_screenshot.png' 
import intro_video from './assets/Build312_promo.mp4'
import team_pic from './assets/team_pic.jpg'
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

var ReactFitText = require('react-fittext');

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.appStyle}>
        <div className="container">
          <nav className="navbar fixed-top navbar-light navbar-expand-md navbar-burger">
            <div className="container-fluid">
              <a className="navbar-brand" href="/"><img src={white_logo} style={styles.whiteLogo} alt="white-logo" /></a>
              <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link" style={styles.navStyle} href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" style={styles.navStyle} href="/">Event</a></li>
                    <li className="nav-item"><a className="nav-link" style={styles.navStyle} href="/">Membership</a></li>
                    <li className="nav-item"><a className="nav-link" style={styles.navStyle} href="/">Login</a></li>
                  </ul>
              </div>
            </div>
          </nav>
        </div>
        <img src={bg} style={styles.backgroundPic} alt="background-pic" />
        <div className="container">
          <ReactFitText compressor={1.5}>
            <h1 style={styles.landingPageTitle}>BUILD312</h1>
          </ReactFitText>
          <ReactFitText compressor={3}>
            <p style={styles.tagline}>Build · Connect · Grow</p>
          </ReactFitText>
        </div>
        <div className="container" style={styles.aboutUs}>
          <div className="row">
            <div className="col-md-6">
              <h3> About Us</h3>       
              <div style={styles.aboutUsText}>
                “312” is the telephone area code for downtown Chicago. Founded in 2017, Build312 is a Chicago-based community that aims to bring together young entrepreneurs, interesting perspectives and innovative ideas. Through various online and offline activities and events, we exist to connect entrepreneurs with resources, investors, and each other. Join the movement to build yourself, build your ideas and build a better future.
              </div>
              <h3 style={styles.aboutUsHeader}>Our Mission</h3>
              <ul style={styles.aboutUsText}>
                <li>To provide accessible funding and advisory services to early stage startups</li>
                <li>To build influential online media platform for learning and knowledge sharing</li>
                <li>To create a close-knitted community for young Entrepreneurs in the Midwest</li>
                <li>To connect the Midwest with the other global entrepreneurial communities</li>
              </ul>
            </div> 
            <div className="col-md-6">
              <img src={black_logo} style={styles.blackLogo }alt="black-logo" /> 
            </div>
          </div>
          <div style={styles.introVideo}>
            <Player playsInline poster={screenshot} src={intro_video}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" style={styles.eventLeft}>
            <h4 className="text-center" style={styles.eventTitle}>SoGal Event</h4>
            <p style={styles.eventHeader}>Time</p>
            <p style={styles.eventContent}>January</p>
            <p style={styles.eventHeader}>Location</p>
            <p style={styles.eventContent}>TBD</p>
            <button type="button" className="btn btn-lg btn-primary" style={styles.eventButton}>RSVP</button>
          </div>
          <div className="col-md-4" style={styles.eventMiddle}>
            <div style={styles.eventLineBreak}></div>
            <h1 style={styles.eventMiddleText1}>FORUMS</h1>
            <h1 style={styles.eventMiddleText2}>& EVENTS </h1>
            <div style={styles.eventLineBreak}></div>
            <button type="button" className="btn" style={styles.eventButtonMiddle}>SEE ALL ></button>
          </div>
          <div className="col-md-4" style={styles.eventRight}>
            <h4 className="text-center" style={styles.eventTitle}>How Am I Building This - Food</h4>
            <p style={styles.eventHeader}>Time</p>
            <p style={styles.eventContent}>February</p>
            <p style={styles.eventHeader}>Location</p>
            <p style={styles.eventContent}>CoGen Coworking</p>
            <button type="button" className="bt btn-lg btn-primary" style={styles.eventButton}>RSVP</button>
          </div>
        </div>
        <div className="container">
          <h3 style={styles.teamHeader} >Team</h3>
          <img src={team_pic} style={styles.teamPic} alt="team-pic"></img>
          <p style={styles.teamText} >We are a group of people passionate about entrepreneurship and are committed to help create knowledge sharing and innovation in Chicago.</p>
        </div>
      </div>
    );
  }
}

export default App;
