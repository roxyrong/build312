import React, { Component } from 'react';
import NavBar from "./navbar"
import PaymentForm from './payment_page/payment_form';
import * as appStyles from "../styles/app_styles";

class Payment extends Component {
  constructor(props){
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentWillMount(){
    const that = this;
    let sqPaymentScript = document.createElement('script');
    sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript"
    sqPaymentScript.async = false;
    sqPaymentScript.onload = ()=>{that.setState({
      loaded: true
    })};
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  }

  render() {
    return (
        this.state.loaded &&
        <div className="App" style={appStyles.appStyle}>
            <NavBar />
            <PaymentForm
            paymentForm={ window.SqPaymentForm }
            />
        </div>
    );
  }
}

export default Payment;