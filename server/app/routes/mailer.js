module.exports = function(app, mailer) {
    app.post('/contact', (req, res) => {
        const { email = '', name = '', subject='', message = '' } = req.body
      
        mailer({ email, name, subject, text: message }).then(() => {
          console.log(`Sent the message "${message}" from <${name}> ${email}.`);
          res.redirect('/#success');
        }).catch((error) => {
          console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
          res.redirect('/#error');
        })
      })
}

