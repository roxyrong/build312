import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import Checkout from './membership_page/checkout'


class MembershipPayment extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <Checkout />
            </div>
        );
    }
}

export default MembershipPayment;
