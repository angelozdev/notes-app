const renderLoginForm = (req, res) => {
   res.render('users/login')
}

const renderSignupForm = (req, res) => {
   res.render('users/signup')
}

const signin = (req, res) => {
   res.send('Registrando...')
}

const login = (req, res) => {
   res.send('Entrando...')
}


module.exports = {
   renderSignupForm,
   renderLoginForm,
   signin,
   login
}