import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import ProcessDonation from "./donation_page/process_donation"


class ProcessDonationPage extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <ProcessDonation location={this.props.location}/>
            </div>
        );
    }
}

export default ProcessDonationPage;
