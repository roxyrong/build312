import React from "react";
import * as styles from "../../styles/membership_styles"
import bg from '../../assets/membership_bg.png';
import mobile_bg from '../../assets/membership_bg_mobile.png';
import MediaQuery from 'react-responsive';
import Subscribe from '../../components/landing_page/subscribe';


class Membership extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-8" style={styles.membershipHeader}>
                    <div className="container" style={styles.bgContainer}>
                        <h2 style={styles.header}>Membership</h2>
                        <p style={styles.headerDesc}><span style={styles.priceHeader}>$49.99</span> for $200+ value of unlimited </p>
                        <p style={styles.headerDesc}>access to panel discussion and more</p>
                        <a href="/membership/payment"><button className="btn btn-lg btn-primary" style={styles.headerBtn}>Get Started</button></a>
                    </div>
                </div>
                <div className="m-0 p-0">
                    <MediaQuery query='(max-width: 768px)'>
                        <img src={mobile_bg} alt="membership bg" style={styles.mobile_bg}/>
                    </MediaQuery>
                    <MediaQuery query='(min-width: 769px)'>
                        <img src={bg} alt="membership bg" style={styles.bg}/>
                    </MediaQuery>
                </div>
                <div className="d-flex mt-0 mb-4 p-0 flex-column align-items-center">
                    <h2 style={styles.benefitHeader}>Benefits</h2>
                    <h4 style={styles.benefitSubHeader}>Events</h4>
                    <p style={styles.benefitItem}>Complimentary access to Build312 monthly panel discussion for you and your guest</p>
                    <p style={styles.benefitItem}>Member price (at least 20% off) to Build312 conferences and forums</p>
                    <p style={styles.benefitItem}>Opportunities to have exclusive discounted / complimentary ticket for Build312 partner events</p>
                    <h4 style={styles.benefitSubHeader}>Community</h4>
                    <p style={styles.benefitItem}>One-on-one business coaching and mentorship</p>
                    <p style={styles.benefitItem}>Exclusive access to Build312 networking opportunities and ad-hoc training sessions</p>
                    <h4 style={styles.benefitSubHeader}>Service</h4>
                    <p style={styles.benefitItem}>Access to all other members and in-house service providers</p>
                    <p style={styles.benefitItem}>One complimentary Coworking Day each month at CoGen</p>
                    <p style={styles.benefitItem}>Opportunities to get involved in event coordination</p>
                </div>
                <Subscribe />
            </div>
        );

    }
}

export default Membership;

