const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config()

console.log(process.env.DB_HOST);

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();

request.open('GET', 'https://www.eventbriteapi.com/v3/users/me/owned_events/?token=' + process.env.EVENTBRITE_OAUTH);
request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        return this.responseText;
    } else {
        return null;
    }
};
request.send();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'build/')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });

app.listen(PORT, () =>
  console.log('Express server is running')
);