const jwt = require('jsonwebtoken');
const bCrypt = require('bcrypt-nodejs');
const user = require('../models/user');


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

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }, 
    ));

    // app.post('/signup', async (req, res) => {
    //     let { email, password, firstname, lastname } = req.body;
    //     const con = req.app.get('con');
    //     con.query(`SELECT * from users where email = '${email}'`, (err, result) => {
    //     if (err) {
    //         return res.json({ status: 'error', msg: 'Error occured' + err });
    //     } else {
    //         if (result.length > 0) {
    //         return res.json({ status: 'error', msg: 'Email is already registred' });
    //         } else {
    //         const hashedPass = generateHash(password);
    //         var signUpObj = {
    //             email: email,
    //             password: hashedPass,
    //             firstname: firstname,
    //             lastname: lastname
    //         };
    //         User.create(signUpObj).then((newUser, created) => {
    //             if (!newUser) {
    //             return res.json({ status: 'error', msg: 'Error occured' });
    //             }
    //             if (newUser) {
    //             const payload = {
    //                 email: email,
    //                 phone: phone,
    //                 firstname: firstname,
    //                 lastname: lastname
    //             };
    //             jwt.sign(payload, process.env.EXPRESS_SECRET, { expiresIn: 5184000 }, (err, token) => {
    //                 res.json({
    //                 status: 'ok',
    //                 msg: 'auth successful',
    //                 data: {
    //                     token: 'Bearer ' + token
    //                 }
    //                 });
    //             });
    //             }
    //         });
    //         }
    //     }
    //     });
    // })

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