import React from "react";
import * as styles from "../../styles";
import bg from '../../assets/background.jpg';

var ReactFitText = require('react-fittext');

class LandingBackground extends React.Component {
    render () {
        return (
            <div>
                <img src={bg} style={styles.backgroundPic} alt="background-pic" />
                <div className="container">
                <ReactFitText compressor={1.5}>
                    <h1 style={styles.landingPageTitle}>BUILD312</h1>
                </ReactFitText>
                <ReactFitText compressor={3}>
                    <p style={styles.tagline}>Build · Connect · Grow</p>
                </ReactFitText>
                </div>
            </div>
        );
    }
}

export default LandingBackground;