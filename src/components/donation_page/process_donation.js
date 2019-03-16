import React from "react";
import axios from "axios";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../membership_page/checkout_form';
import * as styles from '../../styles/donation_styles';
const queryString = require('query-string');

class ProcessDonation extends React.Component {
    constructor() {
        super();
        this.state = {
            publicKey: null,
            amount: undefined,
            type: "once"

        }
    }

    componentWillMount() {
        const parsed = queryString.parse(this.props.location.search);
        if (parsed.amount) {
            this.setState({amount: parsed.amount})
        } else {
            this.setState({amount: parsed.others})
        }
        if ('once' in parsed) {
            this.setState({type: "once"});
        } else {
            this.setState({type: "monthly"});
        };
        axios.get('/stripe-public-key').then(
            res => {
                this.setState({publicKey: res.data})
            }
        )
    }
    render() {
        if ((this.state.publicKey !== null) && (this.state.amount !== undefined)) {
            return (
                <div class="container" style={styles.container}>
                    <div class="row">
                        <div class="col-md-8 px-md-5">
                            <div class="container ">
                                <h4 class="mb-3">Your donation information </h4>
                                <p class="mb-3">Thank you for your ${this.state.amount} donation! You will be charged {this.state.type}. </p> 
                            </div>
                            <StripeProvider apiKey={this.state.publicKey}>
                                <Elements>
                                    <CheckoutForm amount={this.state.amount}/>
                                </Elements>
                            </StripeProvider>
                        </div>
                        <div class="col-md-4">
                            <h4 class="mb-3">Questions</h4>
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Is this donation tax deductible?
                                        </button>
                                    </div>
                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                        Build312 is a 501(c)3 tax-exempt organization and your donation is tax-deductible within the guidelines of U.S. law. To claim a donation as a deduction on your U.S. taxes, please keep your email donation receipt as your official record. We'll send it to you upon successful completion of your donation.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        Do we accept other payment of methods?
                                        </button>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                        We also accept Zelle, Paypal and Venmo. Please email info@build312.co for instructions.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return ( <div></div>)
        }
    }
}

export default ProcessDonation;