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
        let viewEvents = [];
        if (this.state.eventbriteData != null) {
            let events = this.state.eventbriteData.events;
            events.reverse().map((event, i) => {
                viewEvents.push( 
                    <div class="col-lg-4 col-md-6" style={styles.eventCard}>                   
                        <div class="card shadow-sm">
                            <img class="card-img-top" src={event.logo.url} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">{event.name.text}</h5>
                                <p class="card-text"><small class="text-muted">{event.start.local}</small></p>
                            </div>
                        </div>
                    </div>
                )
            })
            console.log(viewEvents);
        } 
        return (
            <div class="container" style={styles.pastEvents} >
                <h3>Past Events</h3>
                <div class="card-deck" style={styles.cardDeck}>
                    {viewEvents}
                </div>
            </div>
        );

    }
}

export default Events;

