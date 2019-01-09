var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
 
    var User = user;
    var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

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

    passport.use(new LinkedInStrategy(
        {
            clientID: process.env.LINKEDIN_API_KEY,
            clientSecret: process.env.LINKEDIN_SECRET_KEY,
            callbackURL: "/auth/linkedin/callback",
            scope: ['r_emailaddress', 'r_basicprofile'],
            state: true
        }, 
        function(accessToken, refreshToken, profile, done) {
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            var email = profile.emails[0].value
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
                            firstname: profile._json.firstName,
                            lastname: profile._json.lastName
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
      }));
}