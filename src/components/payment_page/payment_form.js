import React from "react";
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
    fetch('/sq-payment-cred').then(
      function(response) { 
        return response.json()
    }).then(
      function(data) {
        var applicationId = data['applicationId']
        var locationId = data['locationId']
        const config = {
          applicationId: applicationId,
          locationId: locationId,
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
              document.getElementById('card-nonce').value = nonce;
              document.getElementById('nonce-form').submit();
            },
            requestCardNonce: (event) => {
              event.preventDefault();
              this.requestCardNonce();
            },
            inputEventReceived: (inputEvent) => {
              switch (inputEvent.eventType) {
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
                default:
                  break;
              }
            }
          }
        };
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