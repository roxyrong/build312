const bCrypt = require('bcrypt-nodejs');
const models = require("../models");
const User = models.user;


module.exports = function(app, passport) {
    var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    };

   var isValidPassword = function(userpass, password) {
    return bCrypt.compareSync(password, userpass);   
}

    app.get('/logout', function(req, res) {
        req.session.destroy(function(err) {
            res.redirect('/');
        });
    });

    app.post('/signup', (req, res) => {
        console.log('handle signup post request');
        let { email, password, firstname, lastname } = req.body;
        const con = req.app.get('con');
        con.query(`SELECT * from users where email = '${email}'`, (err, result) => {
        if (err) {
            console.log(err);
            return res.json({ok: false, message: 'Something went wrong with your signup'}); 
        } else {
            if (result.length > 0) {
                console.log('Email is already registered');
                return res.json({ ok: false, message: 'Email is already registred' });
            } else {
            const userPassword = generateHash(password);

            var data =
            {
                email: email,
                password: userPassword,
                firstname: firstname,
                lastname: lastname
            };

            User.create(data).then(function(newUser, created) {
                if (!newUser) {
                    console.log('Your signup is not successful.');
                    return res.json({ok: false, message: 'Your signup is not successful.'});  
                } else {
                    console.log('Your signup is successful.');
                    return res.json({ok: true, message: 'Your signup is successful', data: {user: newUser}});
                } 
            });

        }};
    })
});

    app.post('/login', (req, res) => {
        const { email, password } = req.body;
        const con = req.app.get('con');
        con.query(`SELECT * from users where email = '${email}'`, (err, result) => {
            if (err) {
                console.log("Error:", err);    
                return res.json({ok: false, message: 'Something went wrong with your Login'}); 
            } else {
                if (result.length === 0) {
                    return res.json({ok: false, message: 'Email does not exist'}); 
                } else {
                    const DbPassword = result[0].password;
                    if (!isValidPassword(DbPassword, password)) {
                        console.log('incorrect password');
                        return res.json({ok: false, message: 'Incorrect password.'});  
                    } else {
                        return res.json({ok: true, message: 'Login Successful.', data: {user: result[0]}});  
                    }
                }
            }
        })
    });



    app.get('/auth/linkedin',
        passport.authenticate('linkedin')
    );

    app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
    }));

    app.get('/auth/facebook',
        passport.authenticate('facebook')
    );

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
    }));

    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
    }));
}