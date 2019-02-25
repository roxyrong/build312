import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import PremiumCard from './membership_page/premium_card'
import CheckoutForm from './membership_page/checkout_form';


class MembershipPayment extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <PremiumCard />
            </div>
        );
    }
}

export default MembershipPayment;
