import React from "react";
import * as styles from "../../styles/membership_styles"
import bg from '../../assets/background.jpg';
import MediaQuery from 'react-responsive';

class Membership extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query="(max-width: 768px)">
                    <div className="container" style={styles.container}>
                        <div style={styles.pageTitleMobile}>BUILD312</div>
                        <p style={styles.pageSubTitleMobile}>MEMBERSHIP PROGRAM</p>
                        <div style={styles.taglineMobile}>Coming together is a beginning</div>
                        <div style={styles.taglineMobile}>Keeping together is progress</div>
                        <div style={styles.taglineMobile}>Working together is success</div>
                        <div style={styles.taglineMobile}>Achieving together is Build312</div>
                        <div style={styles.pricingBtnDivMobile}>
                            <button class="btn btn-sm btn-primary" style={styles.pricingBtn}>Plan and Pricing</button>
                        </div>
                    </div>
                    <img src={bg} style={styles.backgroundPicMobile} alt="background-pic" />
                </MediaQuery>
                <MediaQuery query="(min-width: 769px)">
                    <div className="container" style={styles.container}>
                        <div style={styles.pageTitle}>BUILD312</div>
                        <p style={styles.pageSubTitle}>MEMBERSHIP PROGRAM</p>
                        <div style={styles.tagline}>Coming together is a beginning</div>
                        <div style={styles.tagline}>Keeping together is progress</div>
                        <div style={styles.tagline}>Working together is success</div>
                        <div style={styles.tagline}>Achieving together is Build312</div>
                        <div style={styles.pricingBtnDiv}>
                            <button class="btn btn-lg btn-primary" style={styles.pricingBtn}>Plan and Pricing</button>
                        </div>
                    </div>
                    <img src={bg} style={styles.backgroundPic} alt="background-pic" />
                </MediaQuery>
            </div>
        );

    }
}

export default Membership;

