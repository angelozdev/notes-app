const { Router } = require('express');
const router = Router();
const {
   renderNoteForm,
   createNewNote,
   renderNotes,
   renderEditForm,
   updateNote,
   deleteNote
} = require('../controller/notes.controller')

/* Create Note */
router.get('/notes/new', renderNoteForm);
router.post('/notes/new-note', createNewNote);

/* Get Notes */
router.get('/notes', renderNotes);

/* Edit Notes */
router.get('/notes/edit/:id', renderEditForm);
router.put('/notes/edit/:id', updateNote);

/* Delete Note */
router.delete('/notes/delete/:id', deleteNote)

module.exports = router;
