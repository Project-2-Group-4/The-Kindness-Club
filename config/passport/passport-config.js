const bCrypt = require('bcrypt-nodejs');
 
module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;
 
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'user_name',
        passwordField: 'password',
        passReqToCallback: true
    }, 
    function(req, user_name, password, done) {
        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
 
        User.findOne({
            where: {
                UserName: user_name
            }
        }).then(function(user) {
            if (user){
                console.log('user already exists');
                return done(null, false, {
                    message: 'That user name is in use already.'
                });
            } else{
                const userPassword = generateHash(password);
                const data = {
                    UserName: user_name,
                    Password: userPassword,
                    FirstName: req.body.first_name,
                    LastName: req.body.last_name
                };
 
                User.create(data).then(function(newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }
 
                    if (newUser) {
                        return done(null, newUser);
                    }
                });
            }
        });
    })
    );

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

    passport.use('local-signin', new LocalStrategy({
        usernameField: 'user_name',
        passwordField: 'password',
        passReqToCallback: true
    },
 
    function(req, user_name, password, done) {
        var User = user;
        var isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }
        User.findOne({
            where: {
                UserName: user_name
            }
        }).then(function(user) {
            if (!user) {
                console.log('user doesnt exist');
                return done(null, false, req.flash('signupMessage', 'user doest exist.'));;
            }
 
            if (!isValidPassword(user.Password, password)) {
                console.log('invalid pass');
                return done(null, false, req.flash('signupMessage', 'invalid passwrd.'));
            }
            var userinfo = user.get();
            return done(null, userinfo);
        }).catch(function(err) {
            console.log("error in signin");
            return done(null, false, {
                message: 'There is an error with the sign-in process.'
            });
        });
    }
    ));
}