import React from "react";
import * as styles from "../../styles/event_styles";

class Events extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            eventbriteUrl: null,
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
        .then(function(data) {
            return fetch(data)
        }.bind(this))
        .then(function(response) { 
            return response.text(); 
        }.bind(this))
        .then(function(data) {
            this.setState({eventbriteData: data})
        }.bind(this));        
    }

    render() {
        console.log(this.state.eventbriteData);
        return (
            <div class="container" style={styles.pastEvents} >
                <h3>Past Events</h3>
                <div class="card-deck" style={styles.cardDeck}>
                    <div class="card shadow-sm">
                        <img class="card-img-top" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F50249455%2F206844320325%2F1%2Foriginal.jpg?auto=compress&s=632775994b14673de351007d6ccadda0" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">SoGal x Build312</h5>
                            <p class="card-text"><small class="text-muted">08/21/2018</small></p>
                        </div>
                    </div>
                    <div class="card shadow-sm">
                        <img class="card-img-top" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F50249455%2F206844320325%2F1%2Foriginal.jpg?auto=compress&s=632775994b14673de351007d6ccadda0" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">SoGal x Build312</h5>
                            <p class="card-text"><small class="text-muted">08/21/2018</small></p>
                        </div>
                    </div>
                    <div class="card shadow-sm">
                        <img class="card-img-top" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F50249455%2F206844320325%2F1%2Foriginal.jpg?auto=compress&s=632775994b14673de351007d6ccadda0" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">SoGal x Build312</h5>
                            <p class="card-text"><small class="text-muted">08/21/2018</small></p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Events;

