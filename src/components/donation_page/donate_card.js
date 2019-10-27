import React from "react";
import * as styles from '../../styles/donation_styles';
    
class DonateCard extends React.Component {   
    constructor() {
        super();
        this.state = {
            activeBtn: 'once',
            isOthersBtnDisable: true,
            amount: '',
            others: '',
            validForm: false

        }
        this.enableOthersBtn = this.enableOthersBtn.bind(this);
        this.disableOthersBtn = this.disableOthersBtn.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    disableOthersBtn(e) {
        this.setState({isOthersBtnDisable: true, validForm: true});
    }

    enableOthersBtn(e) {
        this.setState({isOthersBtnDisable: false});
        if (this.state.others) {
            this.setState({validForm: true});
        } else {
            this.setState({validForm: false});
        }
    }

    handleUserInput(e) {
        const value = e.target.value;
        if (value && (Math.sign(value) === 1)) {
            this.setState({validForm: true})
        } else {
            this.setState({validForm: false})
        }
      }

    render() {
        return (
            <div class="card mt-3" style={styles.donationCard}>
            <div class="card-body" style={styles.donationCardBody}>
                <form class="needs-validation" novalidate="">
                    <h5 class='mt-3 mb-4'>Choose amount to give</h5>
                    <div>
                        <div>
                            <input type="radio" id="25" name="amount" value="25" onClick={this.disableOthersBtn} required=""/>
                            <label for="20" style={styles.amountLabel}>$ 25</label>
                        </div>
                        <div>
                            <input type="radio" id="100" name="amount" value="100" onClick={this.disableOthersBtn} required=""/>
                            <label for="50" style={styles.amountLabel}>$ 100</label>
                        </div>
                        <div>
                            <input type="radio" id="250" name="amount" value="250" onClick={this.disableOthersBtn} required=""/>
                            <label for="100" style={styles.amountLabel}>$ 250</label>
                        </div>
                        <div>
                            <input type="radio" id="1000" name="amount" value="1000" onClick={this.disableOthersBtn} required=""/>
                            <label for="250" style={styles.amountLabel}>$ 1000</label>
                        </div>
                        <div>
                            <input type="radio" id="other" name="amount" value="" onClick={this.enableOthersBtn} required=""/>
                            <label for="other" style={styles.amountLabel}>
                                $<input type="number" name="others" placeholder="Custom amount" onChange={(event) => this.handleUserInput(event)} disabled={this.state.isOthersBtnDisable} />​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
                            ​</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-dark" disabled={!this.state.validForm} formAction="/process-donate" style={styles.donateSubmitBtn}>Donate</button>
                </form>
            </div>
        </div>
        )
    }
}                           

export default DonateCard;