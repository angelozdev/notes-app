const Note = require('../models/Note')
const db = require('../db/notes.db')


const createNewNote = (req, res) => {
   const { title, description } = req.body;
   new Note({ title, description, user: req.user._id }).save()
   .then(() => {
      req.flash('success_msg', 'Note was created')
      res.redirect('/notes')
   })
   .catch(err => console.error(`Hubo un error en ${err}`))
}

const getNotes = () => {
   return Promise.resolve(db.get())
}

const getNote = (id) => {
   return Promise.resolve(db.getOne(id))
}

const updateNote = (req, res) => {
   const { title, description } = req.body;
   Note.findByIdAndUpdate(req.params.id, { title, description })
   .then(() => {
      req.flash('success_msg', 'Note was updated');
      res.redirect('/notes');
   })
   .catch(err => console.error(err))
}

const deleteNote = (req, res) => {
   console.log(req.params.id)
   Note.findByIdAndDelete(req.params.id)
   .then(() => {
      req.flash('success_msg', 'Note was deleted');
      res.redirect('/notes');
   })
   .catch(err => console.error(err))
}

module.exports = {
   createNewNote,
   getNotes,
   getNote,
   updateNote,
   deleteNote
}