const { Router } = require('express');
const router = Router()

const {
   renderSignupForm,
   renderSigninForm,
   signin,
   login
} = require('../controller/users.controller');

/* Register */
router.get('/signin', renderSigninForm)
router.post('/signin', signin)

/* signup */
router.get('/login', renderSignupForm)
router.post('/login', login)


module.exports = router;