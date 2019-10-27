import React from "react";
import * as styles from "../../styles/landing_styles";
import black_logo from '../../assets/black_logo.jpg';
import screenshot from '../../assets/intro_video_screenshot.png' 
import intro_video from '../../assets/Build312_promo.mp4'
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

class AboutUs extends React.Component {
    render() {
        return (
            <div class="container" style={styles.aboutUs}>
                <div class="row">
                    <div class="col-md-6">
                        <div class="pt-5 pt-md-0">
                            <h3> About Us</h3>      
                        </div> 
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
                    <div class="col-md-6">
                        <img src={black_logo} style={styles.blackLogo }alt="black-logo" /> 
                    </div>
                </div>
                <div class="mt-5 mb-5">
                    <Player playsInline poster={screenshot} src={intro_video}/>
                </div>
            </div>
        );

    }
}

export default AboutUs;

