import React from "react";
import * as styles from "../../styles/membership_styles"
import MediaQuery from 'react-responsive';
import membershipCard from '../../assets/membership card.png';


class PremiumCard extends React.Component {
    render() {
        return (
            <div style={styles.premiumCard}>
                <h2 style={styles.membershipHeader}>PREMIUM PACKAGE ($49.99 / year) </h2>
                <div className="container d-md-flex">
                    <div className="col-md-4 m-0 p-0">
                        <img src={membershipCard} alt="membership card" style={styles.membershipCard}/>
                    </div>
                    <div className="col-md-8 m-0 p-0 d-md-flex flex-column align-items-center">
                        <ul>
                            <li>Complimentary access to Build312 monthly panel discussion for you and your guest</li>
                            <li>Member price (at least 20% off) to Build312 conferences and forums</li>
                            <li>One-on-one business coaching and mentorship</li>
                            <li>Exclusive access to Build312 networking opportunities and ad-hoc training sessions</li>
                            <li>Opportunities to have exclusive discounted / complimentary ticket for Build312 partner events</li>
                            <li>Access to all other members and in-house service providers</li>
                            <li>One complimentary Coworking Day each month at CoGen</li>
                            <li>Opportunities to get involved in event coordination</li>
                            <li>Membership eligibility will be on a one year rolling basis</li>   
                        </ul>
                        <button style={styles.joinBtn} className="btn btn-lg btn-primary">JOIN NOW</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PremiumCard;