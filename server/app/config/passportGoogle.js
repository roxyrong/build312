var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
 
    var User = user;
    var GoogleStrategy = require('passport-google-oauth20').Strategy;

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

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
      },
      function(accessToken, refreshToken, profile, done) {

        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        var email = profile.emails[0].value;
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
                        firstname: profile.name.givenName,
                        lastname: profile.name.familyName
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