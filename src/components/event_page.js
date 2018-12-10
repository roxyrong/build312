import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import Events from "./event_page/events"


class EventPage extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <Events />
            </div>
        );
    }
}

export default EventPage;
