const { Router } = require('express');
const router = Router()

const {
   renderSignupForm,
   renderLoginForm,
   signup,
   login
} = require('../controller/users.controller');

/* Register */
router.get('/signup', renderSignupForm)
router.post('/signup', signup)

/* signup */
router.get('/login', renderLoginForm)
router.post('/login', login)


module.exports = router;