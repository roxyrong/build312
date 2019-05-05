import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"


class DashboardPage extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <h1>Dashboard</h1>
            </div>
        );
    }
}

export default DashboardPage;
