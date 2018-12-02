import React from "react";
import * as styles from "../../styles";


class Events extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4" style={styles.eventLeft}>
                <h4 className="text-center" style={styles.eventTitle}>SoGal Event</h4>
                <p style={styles.eventHeader}>Time</p>
                <p style={styles.eventContent}>January</p>
                <p style={styles.eventHeader}>Location</p>
                <p style={styles.eventContent}>TBD</p>
                <button type="button" className="btn btn-lg btn-primary" style={styles.eventButton}>RSVP</button>
                </div>
                <div className="col-md-4" style={styles.eventMiddle}>
                <div style={styles.eventLineBreak}></div>
                <h1 style={styles.eventMiddleText1}>FORUMS</h1>
                <h1 style={styles.eventMiddleText2}>& EVENTS </h1>
                <div style={styles.eventLineBreak}></div>
                <button type="button" className="btn" style={styles.eventButtonMiddle}>SEE ALL ></button>
                </div>
                <div className="col-md-4" style={styles.eventRight}>
                <h4 className="text-center" style={styles.eventTitle}>How Am I Building This - Food</h4>
                <p style={styles.eventHeader}>Time</p>
                <p style={styles.eventContent}>February</p>
                <p style={styles.eventHeader}>Location</p>
                <p style={styles.eventContent}>CoGen Coworking</p>
                <button type="button" className="bt btn-lg btn-primary" style={styles.eventButton}>RSVP</button>
                </div>
            </div>
        );
    }
}

export default Events;

