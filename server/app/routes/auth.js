
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

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
}