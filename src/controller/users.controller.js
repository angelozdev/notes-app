const User = require('../models/User');

const renderLoginForm = (req, res) => {
   res.render('users/login');
};

const renderSignupForm = (req, res) => {
   res.render('users/signup');
};

const signup = (req, res) => {
   const { username, email, password, confirmPassword } = req.body;
   const errors = [];
   if (password !== confirmPassword) {
      errors.push({ text: 'Password do not match' });
   }
   if (password.length < 4 || confirmPassword.length < 4) {
      errors.push({
         text:
            'The Minimum password length policy setting determines the least number of characters that can make up a password for a user account. You can set a value of between 1 and 14 characters'
      });
   }

   if (!username || !email) {
      errors.push({ text: 'Fields uncompleted' });
   }
   if (errors.length > 0) {
      res.render('users/signup', { errors, username, email });
   } else {
      User.findOne({ email }).then(async (e) => {
         if (e) {
            req.flash('error_msg', 'This email is already exist');
            res.redirect('/login');
         } else {
            const newUser = new User({ name: username, email, password });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'User Registered');
            res.redirect('/login');
         }
      });
   }
};

const login = (req, res) => {
   res.send('Entrando...');
};

module.exports = {
   renderSignupForm,
   renderLoginForm,
   signup,
   login
};
