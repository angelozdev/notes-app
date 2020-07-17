const { Router } = require('express');
const router = Router();
const { isAuthenticated } = require('../helpers/auth')

/* Console */
const chalk = require('chalk');
const log = console.log;
const success = chalk.bgGreenBright.black
const error = chalk.bgRed;
const NOTES_ROUTES = '[NotesRouter]: '

const {
   createNewNote,
   getNotes,
   getNote,
   updateNote,
   deleteNote
} = require('../controller/notes.controller')


/* Create Note */
router.get('/new', isAuthenticated, (_req, res) => {
   res.render('notes/newNote')
});

router.post('/new-note', isAuthenticated, createNewNote);

/* Get Notes */
router.get('/', isAuthenticated, (req, res) => {
   getNotes(req.user.id)
      .then((notes) => {
         res.render('notes/notes', { notes })
         log(success(NOTES_ROUTES, 'GET NOTES'))
      })
      .catch((err) => {
         res.send('Error to get notes')
         log(error(NOTES_ROUTES, err))
      })
});

/* Edit Notes */
router.get('/edit/:id', isAuthenticated, (req, res) => {
   getNote(req.params.id)
      .then((note) => {
         if(note.user != req.user.id){
            req.flash('error_msg', 'Not Authorized')
            return res.redirect('/notes')
         }
         res.render('notes/editNote', { note })
      })
      .catch(err => res.send(err))
});
router.put('/edit/:id', isAuthenticated, updateNote);

/* Delete Note */
router.delete('/delete/:id', isAuthenticated, deleteNote);

module.exports = router;