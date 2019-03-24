module.exports = function(app, mailer) {
    app.post('/contact', (req, res) => {
        const { email = '', name = '', subject='', text = '' } = req.body.message
      
        mailer({ email, name, subject, text }).then(() => {
          console.log(`Sent the message "${text}" from <${name}> ${email}.`);
          res.send('Your message has been sent!');
        }).catch((error) => {
          console.log(`Failed to send the message "${text}" from <${name}> ${email} with the error ${error && error.message}`);
          res.send('Error! Please send again.');
        })
      })
}

