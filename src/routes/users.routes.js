const { Router } = require('express');
const router = Router();
const passport = require('passport');
const { isAuthenticated, isNotAuthenticated } = require('../helpers/auth');

const {
   renderSignupForm,
   renderLoginForm,
   signup
} = require('../controller/users.controller');

/* Register */
router.get('/signup', isNotAuthenticated, renderSignupForm);
router.post('/signup', signup);

/* signup */
router.get('/login', isNotAuthenticated, renderLoginForm);
router.post(
   '/login',
   passport.authenticate('login', {
      failureRedirect: '/login',
      successRedirect: '/notes',
      failureFlash: true
   })
);

/* Logout */
router.get('/logout', isAuthenticated, (req, res) => {
   req.logOut();
   req.flash('success_msg', "You're logged out");
   res.redirect('/');
});

module.exports = router;
