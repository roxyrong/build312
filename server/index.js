const express    = require('express');
const app        = express();
// const cors       = require('cors')
const request    = require('request');
const path       = require('path');
const bodyParser = require('body-parser');
const favicon    = require('express-favicon');
const passport   = require('passport');
const session    = require('express-session');
const mysql      = require('mysql');
const SquareConnect = require('square-connect');
const prerender = require('prerender-node');
const util = require('util');
const md5 = require('md5');
require('dotenv').config()

// express
const PORT = process.env.PORT || 3000;
// app.use(cors());
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
  const url = 'https://www.eventbriteapi.com/v3/users/me/owned_events/?token=' + process.env.EVENTBRITE_OAUTH + '&expand=organizer,venue&status=live,started,ended,completed'
  res.send(url);
});

app.get('/mailchimp-member-in-list', (req, res) => {
  const email = md5(req.query.email);
  const url = 'https://us20.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LIST_ID +'/members/' + email + '?apikey=' + process.env.MAILCHIMP_API;
  request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    res.send(body);
  } 
});
})

app.get('/mailchimp-add-subscriber', (req, res) =>{
  const email = req.query.email;
  const firstname = req.query.firstname;
  const lastname = req.query.lastname;
  const url = 'https://us20.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LIST_ID +'/members';
  request.post({
    headers: {'content-type' : 'application/json',
    'Authorization': 'apikey ' + process.env.MAILCHIMP_API},
    url:     url,
    body: {
      "email_address": email,
      "status": "subscribed",
      "merge_fields": {
          "FNAME": firstname,
          "LNAME": lastname
      }
  },
  json: true
  }, function(error, response, body){
    if (error) {
      res.send('error');
    } else {
      res.send('ok');
    }
  });
});

app.get('/sq-payment-cred', (req, res) => {
  let sqCred = {'applicationId': process.env.SQUARE_SB_APPLICATION_ID, 
              'locationId' : process.env.SQUARE_SB_LOCATION_ID}
  res.send(sqCred)
})

app.get('/stripe-public-key', (req, res) => {
  res.send(process.env.STRIPE_PUBLIC_KEY)
}); 

// models  
const models = require("./app/models");

models.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine')
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
});

// auth
require('./app/routes/auth')(app, passport);
require('./app/config/passportLocal')(passport, models.user);
require('./app/config/passportLinkedIn')(passport, models.user);
require('./app/config/passportFacebook')(passport, models.user);
require('./app/config/passportGoogle')(passport, models.user);
// require('./app/config/passportJwt')(passport, con);

const defaultClient = SquareConnect.ApiClient.instance;
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = process.env.SQUARE_SB_ACCESS_TOKEN;

// SEO 
prerender.set('prerenderToken', process.env.PRERENDER_TOKEN)
prerender.set('prerender_service_url', process.env.PRERENDER_SERVICE_URL)
prerender.set('forwardHeaders', true)
prerender.crawlerUserAgents.push('googlebot');
prerender.crawlerUserAgents.push('bingbot');
prerender.crawlerUserAgents.push('baiduspider');
app.use(prerender);

// GMail
const mailer = require('./app/Mailer/gmail'); 
require('./app/routes/mailer')(app, mailer);

// payment

app.post('/process-payment', function(req,res,next){
  let request_params = req.body;
  if (request_params.nonce != '') {
    let idempotency_key = require('crypto').randomBytes(64).toString('hex');

    // Charge the customer's card
    let transactions_api = new SquareConnect.TransactionsApi();
    let request_body = {
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

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
app.post("/charge", async (req, res) => {
  try {
    console.log(req.body);
    const amount = parseInt(req.body.amount, 10) * 1000;
    const token = req.body.token.token.id;
    let {status} = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      description: "An example charge",
      source: token
    });
    console.log(res.json({status}));
    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () =>
  console.log('Express server is running')
);