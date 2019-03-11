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
                        <div class="col-md-4 m-0 p-0">
                            <DonateCard />
                        </div>
                        <div class="col-md-8 m-0 p-0">
                            <h1 style={styles.donateSlogan}>Donate to Build312</h1>
                        </div>
                    </div>
                </div>
                <img src={bg} alt='donate_bg' style={styles.bg}/>
            </div>
        )
    }
}
export default Donate;

