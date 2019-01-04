import React from "react";
import * as styles from "../../styles/membership_styles"
import MediaQuery from 'react-responsive';
import events from '../../assets/events.png';
import community from '../../assets/community.png'


class Description extends React.Component {
    render() {
        return (
            <div>
                <div class="d-md-flex align-items-end m-0 p-0">
                    <div class="col-md-7 m-0 p-0 " style={styles.leftPanel}>
                        <div class="container">
                            <div style={styles.headingA}>EVENTS</div>
                            <ul style={styles.descriptionListA}>
                                <li>Attend major conferences including themed forum, exhibition, pitch competition, hackathon and startup weekend</li>
                                <li>Participate in panel discussions featuring successful entrepreneurs, business leaders, technologists and investors</li>
                                <li>Network at the social events including happy hours, themed parties, banquet and gala</li>
                                <li>Enjoy exclusive discounts at partnership event</li>
                            </ul>
                            <div style={styles.pricingBtnDiv}>
                                <button class="btn btn-lg btn-primary" style={styles.pricingBtn}>More Events</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 m-0 p-0">
                        <img class="img-fluid" src={events} style={styles.eventsImageA}/>
                    </div>
                </div>
                <div class="d-md-flex align-items-end m-0 p-0">
                    <div class="col-md-5 m-0 p-0">
                        <img class="img-fluid" src={community} style={styles.eventsImageB} />
                    </div>
                    <div class="col-md-7">
                        <div class="container">
                            <div style={styles.headingB}>COMMUNITY</div>
                            <ul style={styles.descriptionListB}>
                                <li>High-quality network of successful entrepreneurs, business owners, business advisors and investors</li>
                                <li>Top tier talent pool including PhDs, MBAs, developers, designers and project managers</li>
                                <li>Global partnership with subject matter experts, government program leadership, and industry partners</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Description;