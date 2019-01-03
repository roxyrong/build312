import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "../components/landing_page/navbar"
import Membership from "./membership_page/membership"


class MembershipPage extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <Membership />
            </div>
        );
    }
}

export default MembershipPage;
