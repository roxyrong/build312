import React from "react";
import * as styles from "../../styles/event_styles";

class Events extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            eventbriteData: null
        };
        this.geteventbriteData = this.getEventbriteData.bind(this);
        this.geteventbriteData();
    }

    getEventbriteData() {
        fetch('/event-data-url')
        .then(function(response) { 
            return response.text()
        }.bind(this))
        .then(function(url) {
            return fetch(url)
        }.bind(this))
        .then(function(response) { 
            return response.json() 
        }.bind(this))
        .then(function(data) {
            this.setState({eventbriteData: data})
        }.bind(this));        
    }

    render() {
        let pastEvents = [];
        let upcomingEvents = [];
        if (this.state.eventbriteData != null) {
            let events = this.state.eventbriteData.events;
            let today = new Date();
            events.reverse().map((event, i) => {
                console.log(event);
                let n = event.start.local.indexOf("T");
                let date = event.start.local.substring(0, n);
                let eventDate = new Date(date);
                let eventHTML = (
                    <div class="col-lg-4 col-md-6" style={styles.eventCard}>                   
                        <div class="card shadow-sm">
                            <img class="card-img-top" src={event.logo.url} alt="Card image cap"/>
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

export default Events;

