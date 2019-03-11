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
        this.setState({amount: parsed.amount})
        if ('once' in parsed) {
            this.setState({type: "once"});
        } else {
            this.setState({type: "monthly"});
        };
        axios.get('/stripe-public-key').then(
            res => {
                console.log(res.data);
                this.setState({publicKey: res.data})
            }
        )
    }
    render() {
        if ((this.state.publicKey !== null) && (this.state.amount !== undefined)) {
            return (
                <div>
                    <div class="container" style={styles.container}>
                        <h1>Thank you for your ${this.state.amount}! You will be charged {this.state.type}.</h1>
                        <div class="row">
                            <div class="col-md-8 m-0 p-0">
                                <StripeProvider apiKey={this.state.publicKey}>
                                    <Elements>
                                        <CheckoutForm amount={this.state.amount}/>
                                    </Elements>
                                </StripeProvider>
                            </div>
                            <div class="col-md-4 m-0 p-0">
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