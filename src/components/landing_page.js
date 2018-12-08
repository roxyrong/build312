import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "../components/landing_page/navbar"
import LandingBackground from "../components/landing_page/landing_background"
import AboutUs from "../components/landing_page/about_us"
import Events from "../components/landing_page/events"
import Team from '../components/landing_page/team'


class LandingPage extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <LandingBackground /> 
                <AboutUs />
                <Events />
                <Team />
            </div>
        );
    }
}

export default LandingPage;

