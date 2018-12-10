import React from "react";
import * as styles from "../../styles/event_styles";

class Events extends React.Component {
    render() {
        return (
            <div className="container">
                <h4 style={styles.upcomingEvent}>Upcoming Events</h4>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img href="" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4>How Am I Building This - Food</h4>
                        </div>
                    </div>
                </div>
                <h4>Past Events</h4>
            </div>
        );

    }
}

export default Events;

