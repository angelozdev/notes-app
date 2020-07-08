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
router.get('/notes/new', isAuthenticated, (_req, res) => {
   res.render('notes/newNote')
});

router.post('/notes/new-note', isAuthenticated, createNewNote);

/* Get Notes */
router.get('/notes', isAuthenticated, (req, res) => {
   getNotes()
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
router.get('/notes/edit/:id', isAuthenticated, (req, res) => {
   getNote(req.params.id)
      .then((note) => res.render('notes/editNote', { note }))
      .catch(err => res.send(err))
});
router.put('/notes/edit/:id', isAuthenticated, updateNote);

/* Delete Note */
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;