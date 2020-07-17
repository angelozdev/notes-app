const isAuthenticated = (req, res ,next) => {
   if(req.isAuthenticated()){
      return next()
   }
   req.flash('error_msg', 'Not Authorized')
   res.redirect('/login')
}

const isNotAuthenticated = (req, res ,next) => {
   if(!req.isAuthenticated()){
      return next()
   }
   req.flash('error_msg', 'You\'re already authenticated')
   res.redirect('/notes')
}

module.exports = {
   isAuthenticated,
   isNotAuthenticated
}