const express    = require('express');
const app = express();
const path       = require('path');
const bodyParser = require('body-parser');
const favicon    = require('express-favicon');
const passport   = require('passport');
const session    = require('express-session');
const mysql      = require('mysql');
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
var authRoute = require('./app/routes/auth.js')(app, passport);
require('./app/config/passportLocal.js')(passport, models.user);
require('./app/config/passportLinkedIn.js')(passport, models.user);
require('./app/config/passportFacebook.js')(passport, models.user);
require('./app/config/passportGoogle.js')(passport, models.user);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () =>
  console.log('Express server is running')
);