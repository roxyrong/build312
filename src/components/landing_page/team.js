import React from "react";
import * as styles from "../../styles/landing_styles";
import team_pic from '../../assets/team_pic.jpg'

class Team extends React.Component {
    render() {
        return (
            <div className="container">
                <h3 style={styles.teamHeader} >Team</h3>
                <img src={team_pic} style={styles.teamPic} alt="team-pic"></img>
                <p style={styles.teamText} >We are a group of people passionate about entrepreneurship and are committed to help create knowledge sharing and innovation in Chicago.</p>
            </div>
        );
    }
}

export default Team

