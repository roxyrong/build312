import React from "react";
import * as styles from "../../styles";
import white_logo from '../../assets/white_logo.png';

class NavBar extends React.Component{
    render() {
        return (
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
        );
    }
}

export default NavBar;



