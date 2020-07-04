/* Acá se configura todo el servidor */
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const expressSession = require('express-session');

// initialitions

// settings
app.set('port', process.env.PORT || 4000); /* Literalmente esto es una variable */
app.set('views', path.join(__dirname, 'views')); /* Express busca la carpeta views en la raiz del proyecto por esta razón hay que setearlo */
app.set('view engine', 'pug')

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false})); /* Para poder obtener los datos enviados desde un formulario */
app.use(methodOverride('_method'));
app.use(expressSession({
   secret: 'secret',
   saveUninitialized: true,
   resave: true
}))
app.use(flash())

// global variables
app.use((req, res, next) => {
   res.locals.success_msg = req.flash('success_msg');
   next()
})

// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));


// static files
app.use(express.static(path.join(__dirname, 'public'))) /* Acá le decimos a express dónde se encuentran los archivos estáticos */


/* Exporto el servidor para ser inicializado desde el index.js */
module.exports = app;