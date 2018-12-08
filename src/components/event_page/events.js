import React from "react";
import * as styles from "../../styles/event_styles";

class Events extends React.Component {
    render() {
        return (
            <div className="container" style={styles.aboutUs}>
                <h3>Upcoming Events</h3>
                <h3>Past Events</h3>
            </div>
        );

    }
}

export default Events;

