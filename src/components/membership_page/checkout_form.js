import React, {Component} from 'react';
import {CardNumberElement, CardExpiryElement, CardCVCElement,  injectStripe} from 'react-stripe-elements';
import * as styles from "../../styles/membership_styles"

const stripeElementStyle = {
    placeholder: '',
    style: {
        base: {
            'lineHeight': '1.35',
            'fontSize': '17px',
            'color': '#495057'
        }
    }
};

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.stripe.createToken({name: "Name"})
    .then(token => {
        fetch("/charge", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(token)
        }).then(function(response){
            if (response.ok) {
                console.log("Purchase Complete!");
                this.setState({complete: true});
            }
        }.bind(this));
    })
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout container">
        <form class="needs-validation" novalidate="">
            <h4 class="mb-3">Billing address</h4>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" required=""/>
                    <div class="invalid-feedback">
                    Valid first name is required.
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" required=""/>
                    <div class="invalid-feedback">
                    Valid last name is required.
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder=""/>
                <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>
            <div class="mb-3">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="" required=""/>
                <div class="invalid-feedback">
                    Please enter your shipping address.
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <input type="text" class="form-control" id="country" placeholder="" required=""/>
                    <div class="invalid-feedback">
                        Please select a valid country.
                    </div>
                    </div>
                <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <input type="text" class="form-control" id="state" placeholder="" required=""/>
                    <div class="invalid-feedback">
                        Please provide a valid state.
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required=""/>
                    <div class="invalid-feedback">
                        Zip code required.
                    </div>
                </div>
            </div>
            <h4 class="mb-3">Payment Information</h4>
            <div class="mb-3">
                <label for="card-number">Credit Card Number</label>
                <span id="card-number" class="form-control">
                    <CardNumberElement {...stripeElementStyle} />
                </span>
                <div class="invalid-feedback">
                    Credit card number required.
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="card-expiry">Expiration date</label>
                    <span id="card-expiry" class="form-control">
                        <CardExpiryElement {...stripeElementStyle}/>
                    </span>
                    <div class="invalid-feedback">
                        Expiration date required.
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="card-cvc">CVC</label>
                    <span id="card-cvc" class="form-control">
                        <CardCVCElement {...stripeElementStyle} />
                    </span>
                    <div class="invalid-feedback">
                        Card cvc required.
                    </div>
                </div>
            </div>
            <button class="btn btn-primary btn-lg btn-block" type="button" onClick={this.handleSubmit} style={styles.checkoutBtn}>
                Submit Payment
            </button>
        </form>
    </div>
    );
  }
}

export default injectStripe(CheckoutForm);