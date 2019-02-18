import React from "react";
import axios from 'axios';
import * as styles from "../../styles/event_styles";
import { getEventbriteData } from '../../actions/eventbrite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Events extends React.Component {
    
    componentWillMount() {
        this.props.getEventbriteData();
    }

    render() {
        let pastEvents = [];
        let upcomingEvents = [];
        if (this.props.eventbriteData !== null) {
            let events = this.props.eventbriteData.events;
            let today = new Date();
            events.reverse().forEach((event, i) => {
                let n = event.start.local.indexOf("T");
                let date = event.start.local.substring(0, n);
                let eventDate = new Date(date);
                let eventHTML = (
                    <div class="col-lg-4 col-md-6" style={styles.eventCard}>                   
                        <div class="card shadow-sm">
                            <img class="card-img-top" src={event.logo.url} alt="card_img_top"/>
                            <div class="card-body">
                                <h5 class="card-title">{event.name.text}</h5>
                                <p class="card-text" style={styles.eventDate}><small class="text-muted">{date}</small></p>
                                <a href={event.url}>
                                    <button type="button" class="btn btn-sm btn-primary" style={styles.viewMoreBtn}>View More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                );                 

                if (eventDate > today) {
                    upcomingEvents.push(eventHTML);
                } else {
                    pastEvents.push(eventHTML)
                };
                return
            })
        } 
        return (
            <div class="container" style={styles.eventContainer} >
                <h3>Upcoming Events</h3>
                <div class="card-deck" style={styles.cardDeck}>
                    {upcomingEvents}
                </div>
                <h3>Past Events</h3>
                <div class="card-deck" style={styles.cardDeck}>
                    {pastEvents}
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

