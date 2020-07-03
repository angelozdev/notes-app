/* Acá se configura todo el servidor */

const express = require('express');
const app = express();
const path = require('path');

// initialitions

// settings
app.set('port', process.env.PORT || 4000); /* Literalmente esto es una variable */
app.set('views', path.join(__dirname, 'views')); /* Express busca la carpeta views en la raiz del proyecto por esta razón hay que setearlo */
app.set('view engine', 'pug')
app.use(express.json()); /* Para poder manipular json en las peticiones */

// middlewares

// global variables

// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));


// static files
app.use(express.static(path.join(__dirname, 'public'))) /* Acá le decimos a express dónde se encuentran los archivos estáticos */


/* Exporto el servidor para ser inicializado desde el index.js */
module.exports = app;