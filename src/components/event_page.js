import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "../components/navbar"


class EventPage extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <h3>Upcoming Events</h3>
                <h3>Past Events</h3>
            </div>
        );
    }
}

export default EventPage;
