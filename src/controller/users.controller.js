const renderSignupForm = (req, res) => {
   res.render('users/login')
}

const renderSigninForm = (req, res) => {
   res.render('users/signin')
}

const signin = (req, res) => {
   res.send('Registrando...')
}

const login = (req, res) => {
   res.send('Entrando...')
}


module.exports = {
   renderSignupForm,
   renderSigninForm,
   signin,
   login
}