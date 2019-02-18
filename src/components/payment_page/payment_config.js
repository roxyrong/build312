export const paymentConfig = (applicationId, locationId) => {
    const config = {
        applicationId: applicationId,
        locationId: locationId,
        inputClass: "sq-input",
        autoBuild: false,
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
                        document.getElementById("error").innerHTML = "Please fix card information errors before continuing.";
                        break;
                    case "errorClassRemoved":
                        document.getElementById("error").style.display = "none";
                        break;
                    case "cardBrandChanged":
                        if (inputEvent.cardBrand !== "unknown") {
                        this.setState({cardBrand: inputEvent.cardBrand});
                        } 
                        else {
                        this.setState({cardBrand: "" });
                        }
                        break; 
                    default:
                        break;
                }
          }
        }
      };
      return config;
}