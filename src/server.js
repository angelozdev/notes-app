/* Acá se configura todo el servidor */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const expressSession = require('express-session');
const passport = require('passport');

// initialitions
const app = express();
require('./config/passport');

// settings
app.set(
   'port',
   process.env.PORT || 3000
); /* Literalmente esto es una variable */
app.set(
   'views',
   path.join(__dirname, 'views')
); /* Express busca la carpeta views en la raiz del proyecto por esta razón hay que setearlo */
app.set('view engine', 'pug');

// middlewares
app.use(morgan('dev'));
app.use(
   express.urlencoded({ extended: false })
); /* Para poder obtener los datos enviados desde un formulario */
app.use(methodOverride('_method'));
app.use(
   expressSession({
      secret: process.env.EXPRESS_SESSION_SECRET || 'secret',
      saveUninitialized: true,
      resave: true,
      cookie: {
         maxAge: 60000
      }
   })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// global variables
app.use((req, res, next) => {
   try {
      res.locals.success_msg = req.flash('success_msg');
      res.locals.error_msg = req.flash('error_msg');
      res.locals.error = req.flash('error');
      res.locals.user = req.user || null;
      next();
   } catch (error) {
      next(error);
   }
});

// routes
app.use('/', require('./routes/index.routes'));
app.use('/notes', require('./routes/notes.routes'));
app.use('/', require('./routes/users.routes'));
app.get('*', (req, res) => {
   req.flash('error_msg', 'Not Found');
   res.redirect('/');
});

// static files
app.use(
   express.static(path.join(__dirname, 'public'))
); /* Acá le decimos a express dónde se encuentran los archivos estáticos */

/* Exporto el servidor para ser inicializado desde el index.js */
module.exports = app;
