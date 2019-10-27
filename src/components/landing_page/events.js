import React from "react";
import * as styles from "../../styles/landing_styles";
import { getEventbriteData } from '../../actions/eventbrite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Events extends React.Component {

    componentWillMount() {
        this.props.getEventbriteData();
    }

    formatEvent(event) {
        return {
            name: event.name.text, 
            time: event.start.local.substring(0, event.start.local.indexOf("T")),
            address: event.venue.address.address_1 + ' ' + event.venue.address.address_2,
            city: event.venue.address.city + ", " + event.venue.address.region + ', ' + event.venue.address.postal_code,
            url: event.url
        }

    }

    render() {
        let firstEvent = {name: '', address: '', city: '', time: '', url: '/'};
        let secondEvent = {name: '', address: '', city: '', time: '', url: '/'};
        if (this.props.eventbriteData !== null) {
            const recentEvents = this.props.eventbriteData.events.reverse();
            firstEvent = this.formatEvent(recentEvents[0]);
            secondEvent = this.formatEvent(recentEvents[1]);
        }
        return (
            <div className="row">
                <div className="col-md-4" style={styles.eventMiddle}>
                    <div style={styles.eventLineBreak}></div>
                        <h1 style={styles.eventMiddleText1}>FORUMS</h1>
                        <h1 style={styles.eventMiddleText2}>& EVENTS </h1>
                    <div style={styles.eventLineBreak}></div>
                    <form method="GET" action="/event">
                        <button type="submit" className="btn" style={styles.eventButtonMiddle} >SEE ALL ></button>
                    </form>
                </div>
                <div className="col-md-4" style={styles.eventLeft}>
                    <h4 className="text-center px-4" style={styles.eventTitle}>{firstEvent.name}</h4>
                    <p style={styles.eventHeader}>Time</p>
                    <p style={styles.eventContent}>{firstEvent.time}</p>
                    <p style={styles.eventHeader}>Location</p>
                    <p style={styles.eventContent}>{firstEvent.address}</p>
                    <p style={styles.eventContent}>{firstEvent.city}</p>
                    <form method="GET" action={firstEvent.url}>
                        <button type="submit" className="btn btn-lg btn-primary" style={styles.eventButton}>RSVP</button>
                    </form>
                </div>

                <div className="col-md-4" style={styles.eventRight}>
                    <h4 className="text-center px-4" style={styles.eventTitle}>{secondEvent.name}</h4>
                    <p style={styles.eventHeader}>Time</p>
                    <p style={styles.eventContent}>{secondEvent.time}</p>
                    <p style={styles.eventHeader}>Location</p>
                    <p style={styles.eventContent}>{secondEvent.address}</p>
                    <p style={styles.eventContent}>{secondEvent.city}</p>
                    <form method="GET" action={secondEvent.url}>
                        <button type="submit" className="bt btn-lg btn-primary"formaction={secondEvent.url} style={styles.eventButton}>RSVP</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { eventbriteData: state.eventbrite }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getEventbriteData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);

