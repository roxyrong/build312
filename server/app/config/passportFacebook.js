var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
 
    var User = user;
    var FacebookStrategy = require('passport-facebook').Strategy;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findByPk(id).then(function(user) { 
            if (user) {
                done(null, user.get());
            } else { 
                done(user.errors, null);
            } 
        }); 
    });

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        enableProof: true,
        profileFields: ['last_name', 'first_name', 'email']
      },
    function(accessToken, refreshToken, profile, done) {
        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        var email = profile._json.email;
        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
            if (user) { 
                return done(null, user);
            } else {
                var data =
                    {
                        email: email,
                        password: generateHash('password'),
                        firstname: profile._json.first_name,
                        lastname: profile._json.last_name
                    };
                User.create(data).then(function(newUser, created) {
                    console.log(newUser);
                    if (!newUser) {
                        return done(null, false);
                    } else {
                        return done(null, newUser);
                    } 
                });

            };
        });
      }
    ));
}