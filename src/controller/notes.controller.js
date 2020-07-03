const renderNoteForm = (req, res) => {
   res.render('notes/newNote')
}

const createNewNote = (req, res) => {
   console.log(req.body);
   res.send('creating note...')
}

const renderNotes = (req, res) => {
   res.send('Note list')
}

const renderEditForm = (req, res) => {
   res.send('Edit note form')
}

const updateNote = (req, res) => {
   res.send('Update Note')
}

const deleteNote = (req, res) => {
   res.send('Deleting Note')
}

module.exports = {
   renderNoteForm,
   createNewNote,
   renderNotes,
   renderEditForm,
   updateNote,
   deleteNote
}