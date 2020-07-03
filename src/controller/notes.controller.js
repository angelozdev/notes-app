const Note = require('../models/Note')

const renderNoteForm = (_req, res) => {
   res.render('notes/newNote')
}

const createNewNote = (req, res) => {
   const { title, description } = req.body;
   new Note({ title, description }).save()
   .then(() => res.redirect('/notes'))
   .catch(err => console.error(`Hubo un error en ${err}`))
}

const renderNotes = (_req, res) => {
   Note.find()
   .then((data) => {
      res.render('notes/notes', { notes: data })
   })
}

const renderEditForm = (req, res) => {
   Note.findById(req.params.id)
   .then((note) => res.render('notes/editNote', { note }))
}

const updateNote = (req, res) => {
   const { title, description } = req.body;
   Note.findByIdAndUpdate(req.params.id, { title, description })
   .then(() => res.redirect('/notes'))
   .catch(err => console.error(err))
}

const deleteNote = (req, res) => {
   console.log(req.params.id)
   Note.findByIdAndDelete(req.params.id)
   .then(() => res.redirect('/notes'))
   .catch(err => console.error(err))
}

module.exports = {
   renderNoteForm,
   createNewNote,
   renderNotes,
   renderEditForm,
   updateNote,
   deleteNote
}