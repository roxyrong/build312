
module.exports = function(app, passport) {
    app.get('/logout', function(req, res) {
        req.session.destroy(function(err) {
            res.redirect('/');
        });
    });

    app.get('/dashboard', isLoggedIn, function(req, res) {
        res.send('<h1>Dashboard!</h1>');
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }
    ));

    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
    }
    ));

    app.get('/auth/linkedin',
        passport.authenticate('linkedin'),
        function(req, res){
            console.log(req, res);
    });

    app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
}