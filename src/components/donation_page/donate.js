import React from "react";
import * as styles from '../../styles/donation_styles'
import bg from '../../assets/donate.PNG'

class Donate extends React.Component {
    constructor() {
        super();
        this.state = {
            activeBtn: 'once'
        }
        this.freqBtnOnChange = this.freqBtnOnChange.bind(this);
    }

    freqBtnOnChange(event) {
        event.preventDefault();
        this.setState({
            activeBtn: event.target.id
        });
    }

    render() {
        return (
            <div>
                <div class="container" style={styles.container}>
                    <div class="row">
                        <div class="col-md-4 m-0 p-0">
                            <div class="card" style={styles.donationCard}>
                                <div class="card-body" style={styles.donationCardBody}>
                                    <form action="/process-donate" method="GET">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons" style={styles.freqBtn}>
                                            <label class="btn btn-outline-light active" onFocus={this.freqBtnOnChange}
                                                   style={this.state.activeBtn === 'once' ? styles.donateBtnActive : styles.donateBtn}>
                                                <input type="radio" name="once" id="once" checked={this.state.activeBtn === 'once'}/> Once
                                            </label>
                                            <label class="btn btn-outline-light" onFocus={this.freqBtnOnChange}
                                                   style={this.state.activeBtn === 'monthly' ? styles.donateBtnActive : styles.donateBtn} >
                                                <input type="radio" name="monthly" id="monthly" checked={this.state.activeBtn === 'monthly'} /> Monthly
                                            </label>
                                        </div>
                                        <p>Choose amount to give:</p>
                                        <div>
                                            <div>
                                                <input type="radio" id="20" name="amount" value="20" />
                                                <label for="20" style={styles.amountLabel}>$20</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="50" name="amount" value="50" />
                                                <label for="50" style={styles.amountLabel}>$50</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="100" name="amount" value="100" />
                                                <label for="100" style={styles.amountLabel}>$100</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="250" name="amount" value="250" />
                                                <label for="250" style={styles.amountLabel}>$250</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="other" name="amount" value=""/>
                                                <label for="other" style={styles.amountLabel}><input type="text" name="others" placeholder="Custom amount"/>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​</label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-dark" style={styles.donateSubmitBtn}>Donate</button>
                                    </form>
                                </div>
                            </div>
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

