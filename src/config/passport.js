const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(
   'login',
   new LocalStrategy(
      {
         usernameField: 'email',
         passwordField: 'password'
      },
      async (email, password, done) => {
         /* Match Email's User */
         User.findOne({ email })
            .then(async (user) => {
               if (!user) {
                  return done(null, false, { message: 'Not User Found' });
               } else {
                  return { match: await user.matchPassword(password), user };
               }
            })
            .then(({ match, user }) => {
               if (match) {
                  return done(null, user);
               } else {
                  return done(null, false, { message: 'Incorrect password' });
               }
            })
            .catch((err) => done(err, false, { message: 'Upppps!' }));
      }
   )
);

passport.serializeUser((user, done) => {
   done(null, user._id);
});

passport.deserializeUser((id, done) => {
   User.findById(id, (err, user) => {
      done(err, user);
   });
});
