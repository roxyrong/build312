import React from "react";
import * as styles from "../../styles/payment_styles";

class PaymentForm extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      cardBrand: "",
      nonce: undefined
    }
    this.requestCardNonce = this.requestCardNonce.bind(this);
  }

  requestCardNonce(){
    console.log('request card nonce');
    this.paymentForm.requestCardNonce();
  }

  componentDidMount(){
    const config = {
      applicationId: "sq0idp-rARHLPiahkGtp6mMz2OeCA",
      locationId: "GMT96A77XABR1",
      inputClass: "sq-input",
      autoBuild: false,
      inputStyles: [
        {
          fontSize: "16px",
          fontFamily: "Helvetica Neue",
          padding: "16px",
          color: "#373F4A",
          backgroundColor: "transparent",
          lineHeight: "1.15em",
          placeholderColor: "#000",
          _webkitFontSmoothing: "antialiased",
          _mozOsxFontSmoothing: "grayscale"
        }
      ], 
      cardNumber: {
        elementId: "sq-card-number",
        placeholder: "• • • •  • • • •  • • • •  • • • •"
      },
      cvv: {
        elementId: "sq-cvv",
        placeholder: "CVV"
      },
      expirationDate: {
        elementId: "sq-expiration-date",
        placeholder: "MM/YY"
      },
      postalCode: {
        elementId: "sq-postal-code",
        placeholder: "Zip"
      },
      callbacks: {
        cardNonceResponseReceived: (errors, nonce, cardData) => {
          if (errors) {
            console.log("Encountered errors:");
            errors.forEach(function(error) {
              console.log("  " + error.message);
            });
            return;
          }
          this.setState({
            nonce: nonce
          })
        },
        unsupportedBrowserDetected: () => {
        },

        requestCardNonce: (event) => {
          event.preventDefault();
          this.requestCardNonce();
        },
        inputEventReceived: (inputEvent) => {
          switch (inputEvent.eventType) {
            case "focusClassAdded":
              break;
            case "focusClassRemoved":
              break;
            case "errorClassAdded":
              document.getElementById("error").innerHTML =
                "Please fix card information errors before continuing.";
              break;
            case "errorClassRemoved":
              document.getElementById("error").style.display = "none";
              break;
            case "cardBrandChanged":
              if(inputEvent.cardBrand !== "unknown"){
                this.setState({
                  cardBrand: inputEvent.cardBrand
                })
              } else {
                this.setState({
                  cardBrand: ""
                })
              }
              break;
            case "postalCodeChanged":
              break;
            default:
              break;
          }
        },
        paymentFormLoaded: function() {
          document.getElementById('name').style.display = "inline-flex";
          // don't need?
        }
      }
    };
    this.paymentForm = new this.props.paymentForm(config);
    this.paymentForm.build();
  }
  
  render() {
    return (
      <div id="form-container">
        <div id="sq-ccbox">
          <p>
            <span style={styles.leftCenter}>Enter Card Info Below </span>
            <span style={styles.blockRight}>
              {this.state.cardBrand.toUpperCase()}
            </span>
          </p>
          <div id="cc-field-wrapper">
            <div id="sq-card-number"></div>
            <input type="hidden" id="card-nonce" name="nonce" />
            <div id="sq-expiration-date"></div>
            <div id="sq-cvv"></div>
          </div>
          <input id="name" style={styles.name} type="text" placeholder="Name"/>
          <div id="sq-postal-code"></div>
          <button className="button-credit-card" onClick={this.requestCardNonce}>Pay</button>
        </div>
        <p style={styles.center} id="error"></p>
      </div>
    );
  }
}

export default PaymentForm;