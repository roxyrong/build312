import React from "react";
import axios from "axios";
import {Elements, StripeProvider} from 'react-stripe-elements';
import PremiumCard from './premium_card';
import CheckoutForm from './checkout_form';
import * as styles from "../../styles/membership_styles";


class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {publicKey: null}
    }

    componentWillMount() {
        axios.get('/stripe-public-key').then(
            res => {
                console.log(res.data);
                this.setState({publicKey: res.data})
            }
        )
    }

    render() {
        const paymentComplete = (
            <div class="card text-center">
                <div class="card-header">
                    <h1>Payment Complete!</h1>
                </div>
                <div class="card-body">
                    <div class="mt-3 mb-5">
                        <i class="fas fa-check-square fa-5x"></i>
                    </div>
                    <div class="mb-3">
                        <h5 class="card-title">Thank you for being part of Build312 community. You will receive an email regarding to your membership shortly.</h5>
                    </div>
                </div>
            </div>
        )

        if (this.state.publicKey !== null) {
            return (
                <div class="container" style={styles.premiumCard}>
                    <div class="row">
                        <div class="col-md-4 order-md-2 mb-4">
                            <PremiumCard />
                        </div>
                        <div class="col-md-8 px-md-5 order-md-1">
                        <StripeProvider apiKey={this.state.publicKey}>
                            <Elements>
                                <CheckoutForm amount={49.99} description='Membership' paymentComplete={paymentComplete}/>
                            </Elements>
                        </StripeProvider>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div></div>
        )
    }
}

export default Checkout;