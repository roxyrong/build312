import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import Membership from "./membership_page/membership"
// import Description from "./membership_page/description"
// import PremiumCard from './membership_page/premium_card'


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
