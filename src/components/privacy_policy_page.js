import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar";
import PrivacyPolicy from '../components/privacy_page/privacy_policy';


class PrivacyPage extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <PrivacyPolicy />
            </div>
        );
    }
}

export default PrivacyPage;
