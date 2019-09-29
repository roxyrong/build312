import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar";
import TermOfUse from '../components/privacy_page/term_of_use';


class TermOfUsePage extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <TermOfUse />
            </div>
        );
    }
}

export default TermOfUsePage;
