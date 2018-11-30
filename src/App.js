import React, { Component } from 'react';
import bg from './assets/background.jpg';
import logo from './assets/white_logo.png';
import * as styles from "./styles";

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.appStyle}>
        <div className="container">
          <nav className="navbar fixed-top navbar-light navbar-expand-md navbar-burger">
            <div className="container-fluid">
              <a className="navbar-brand" href="/"><img src={logo} style={styles.logoStyle} alt="logo" /></a>
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
        
      </div>
    );
  }
}

export default App;
