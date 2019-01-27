const express    = require('express');
const app = express();
const path       = require('path');
const bodyParser = require('body-parser');
const favicon    = require('express-favicon');
const passport   = require('passport');
const session    = require('express-session');
const mysql      = require('mysql');
const SquareConnect = require('square-connect');
var util = require('util');
require('dotenv').config()

// express
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '..', 'build/')));
app.use(favicon(path.join(__dirname, '..', 'public/', 'favicon.png')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// passport
app.use(session({ secret: process.env.SECRET ,resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session()); 

// routes
app.get('/event-data-url', (req, res) => {
  var url = 'https://www.eventbriteapi.com/v3/users/me/owned_events/?token=' + process.env.EVENTBRITE_OAUTH + '&expand=organizer'
  res.send(url);
});

app.get('/sq-payment-cred', (req, res) => {
  var sqCred = {'applicationId': process.env.SQUARE_SB_APPLICATION_ID, 
              'locationId' : process.env.SQUARE_SB_LOCATION_ID}
  res.send(sqCred)
})

// models  
var models = require("./app/models");

models.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine')
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
});

// auth
var authRoute = require('./app/routes/auth')(app, passport);
require('./app/config/passportLocal')(passport, models.user);
require('./app/config/passportLinkedIn')(passport, models.user);
require('./app/config/passportFacebook')(passport, models.user);
require('./app/config/passportGoogle')(passport, models.user);

var defaultClient = SquareConnect.ApiClient.instance;
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = process.env.SQAURE_SB_ACCESS_TOKEN;

app.post('/process-payment', function(req,res,next){
  var request_params = req.body;
  if (request_params.nonce != '') {
    var idempotency_key = require('crypto').randomBytes(64).toString('hex');

    // Charge the customer's card
    var transactions_api = new SquareConnect.TransactionsApi();
    var request_body = {
      card_nonce: request_params.nonce,
      amount_money: {
        amount: 100, // $1.00 charge
        currency: 'USD'
      },
      idempotency_key: idempotency_key
    };
    transactions_api.charge(process.env.SQUARE_SB_LOCATION_ID, request_body).then(function(data) {
      console.log(util.inspect(data, false, null));
      res.send('Payment Successful')
    }, function(error) {
      console.log(util.inspect(error.status, false, null));
      res.send('Payment Failed')
    });
  } else {
    console.log('invalid nonce');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () =>
  console.log('Express server is running')
);