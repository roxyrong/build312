import React from "react";
import axios from 'axios';
import { paymentConfig } from './payment_config';
import * as styles from "../../styles/payment_styles";

class PaymentForm extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      cardBrand: ""
    }
    this.requestCardNonce = this.requestCardNonce.bind(this);
  }

  requestCardNonce(){
    console.log('request card nonce');
    this.paymentForm.requestCardNonce();
  }

  componentDidMount(){
    axios.get('/sq-payment-cred')
    .then(
      function(res) {
        const data = res.data; 
        const applicationId = data['applicationId'];
        const locationId = data['locationId'];
        const config = paymentConfig(applicationId, locationId);
        console.log(config);
        this.paymentForm = new this.props.paymentForm(config);
        this.paymentForm.build();
    }.bind(this))
  }
  
  render() {
    return (
      <div id="form-container" style={styles.formContainer}>
        <p>
          <span style={styles.leftCenter}>Enter Card Info Below </span>
          <span style={styles.blockRight}>
            {this.state.cardBrand.toUpperCase()}
          </span>
        </p>
        <div id="sq-ccbox">
          <form id="nonce-form"  novalidate action="process-payment" method="post">
            <div id="cc-field-wrapper">
              <div id="sq-card-number"></div>
              <div id="sq-cvv"></div>
              <div id="sq-expiration-date"></div>
            </div>
            <div id="sq-postal-code"></div>
            <input id="name" style={styles.name} type="text" placeholder="Name"/> 
            <button className="sq-button" id="sq-creditcard" onClick={this.requestCardNonce}>Pay</button>
            <p style={styles.center} id="error"></p>
            <input type="hidden" id="card-nonce" name="nonce" />
          </form>
        </div>
      </div>
    );
  }
}

export default PaymentForm;