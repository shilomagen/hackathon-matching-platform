const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function() {
    passport.use(new LocalStrategy((email, password, done) => {
        User.findOne({email: {$regex: new RegExp(email, "i")}},
            (err, user) => {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {message: 'Unknown user'});
                }
                if (!user.authenticate(password)) {
                    return done(null, false, {message: 'Invalid password, please try again or reset your password'});
                }
                return done(null, user);
            }
        );
    }));
};