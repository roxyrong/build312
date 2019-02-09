import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import Donate from "./donation_page/donate"


class DonatePage extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <Donate />
            </div>
        );
    }
}

export default DonatePage;
