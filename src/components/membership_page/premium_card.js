import React from "react";
import {Elements, StripeProvider} from 'react-stripe-elements';
import * as styles from "../../styles/membership_styles"
import MediaQuery from 'react-responsive';
import membershipCard from '../../assets/membership card.png';
import Payment from '../payment'
import CheckoutForm from './checkout_form'

class PremiumCard extends React.Component {
    render() {
        return (
            <div class="container" style={styles.premiumCard}>
                <div class="row">
                    <div class="col-md-4 order-md-2 mb-4">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            Your Membership Card
                        </h4>
                        <div class="mb-4 align-items-center">
                            <img src={membershipCard} alt="membership card" style={styles.membershipCard}/>
                        </div>
                        <div class="mb-4">
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">One-year Membership</h6>
                                    <small class="text-muted">Premium Package ($49.99 for $200+ Value)</small>
                                </div>
                                <span class="text-muted">$49.99</span>
                            </li>
                        </div>
                        <form class="card p-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Promo code"/>
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-secondary">Redeem</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-8 px-md-5 order-md-1">
                    <StripeProvider apiKey="pk_test_y8YdDJvhltxJAPXe28bZuHk8">
                        <Elements>
                            <CheckoutForm />
                        </Elements>
                    </StripeProvider>
                    </div>
                </div>
            </div>
        );
    }
}

export default PremiumCard;