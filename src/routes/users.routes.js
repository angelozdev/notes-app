const { Router } = require('express');
const router = Router()

const {
   renderSignupForm,
   renderLoginForm,
   signin,
   login
} = require('../controller/users.controller');

/* Register */
router.get('/signup', renderSignupForm)
router.post('/signup', signin)

/* signup */
router.get('/login', renderLoginForm)
router.post('/login', login)


module.exports = router;