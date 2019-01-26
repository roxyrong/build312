const express    = require('express');
const app = express();
const path       = require('path');
const bodyParser = require('body-parser');
const favicon    = require('express-favicon');
const passport   = require('passport');
const session    = require('express-session');
const mysql      = require('mysql');
const SquareConnect = require('square-connect');
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

// payment
var defaultClient = SquareConnect.ApiClient.instance;
var squareOauth2 = defaultClient.authentications['oauth2'];
squareOauth2.accessToken = process.env.SQUARE_OAUTH2;

var api = new SquareConnect.LocationsApi();

api.listLocations().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});



app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () =>
  console.log('Express server is running')
);