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
        let { email, password, firstname, lastname } = req.body;

        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
            if (user) {
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

        }}).catch(err => {
            console.log(err);
            return res.json({ok: false, message: 'Something went wrong with your signup'}); 
        })
});

    app.post('/login', (req, res) => {
        const { email, password } = req.body;
        
        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {  
            if (!user) {
                console.log('Email does not exist');
                return res.json({ok: false, message: 'Email does not exist'}); 
            } else {
                const DbPassword = user.password;
                if (!isValidPassword(DbPassword, password)) {
                    console.log('incorrect password');
                    return res.json({ok: false, message: 'Incorrect password.'});  
                } else {
                    console.log('login successful');
                    return res.json({ok: true, message: 'Login Successful.', data: {user: user}});  
                }
            }
        }).catch(err => {
            console.log("Error:", err);    
            return res.json({ok: false, message: 'Something went wrong with your Login'}); 
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