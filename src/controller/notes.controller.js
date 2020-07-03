const Note = require('../models/Note')

const renderNoteForm = (_req, res) => {
   res.render('notes/newNote')
}

const createNewNote = (req, res) => {
   const { title, description } = req.body;
   new Note({ title, description })
   .save()
   .then(() => res.send('Note created.'))
   .catch(err => console.error(`Hubo un error en ${err}`))
}

const renderNotes = (_req, res) => {
   Note
   .find()
   .then((data) => {
      console.log('Get Notes success')
      res.render('notes/notes', { notes: data })
   })
}

const renderEditForm = (_req, res) => {
   res.send('Edit note form')
}

const updateNote = (_req, res) => {
   res.send('Update Note')
}

const deleteNote = (_req, res) => {
   res.send('Deleting Note...')
}

module.exports = {
   renderNoteForm,
   createNewNote,
   renderNotes,
   renderEditForm,
   updateNote,
   deleteNote
}