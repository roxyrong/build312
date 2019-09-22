import React from "react";
import * as styles from '../../styles/donation_styles';
import DonateCard from './donate_card';
import bg from '../../assets/donate.PNG';

class Donate extends React.Component {
    render() {
        return (
            <div>
                <div class="container" style={styles.container}>
                    <div class="row">
                        <div class="col-md-8 m-0 p-0 order-md-2">
                            <h1 style={styles.donateSlogan}>Donate to Build312</h1>
                            <div class="m-5 px-2">
                                <h6 style={styles.donateParagraph}>Build312 is a 501(c)3 nonprofit that supports local startups and small business by hosting events and empower founders. Since its inception in April 2017,  Build312 has organized one pitch competition, one women forum, two startup job fairs and 15+ panel discussions. We've also created two popular series: “How Am I Building This” and “SoGal x Build312” events. These events attracted 1000+ attendees, accumulated 3000+ online subscribers, and connected 100+ startups and 50+ community partners. We strive to  gather young entrepreneurs, share impactful perspectives and bring in innovative ideas. Your support brings us one step closer to making this happen. </h6>
                            </div>
                        </div>
                        <div class="col-md-4 m-0 p-2 order-md-1">
                            <DonateCard />
                        </div>

                    </div>
                </div>
                <img src={bg} alt='donate_bg' style={styles.bg}/>
            </div>
        )
    }
}
export default Donate;

