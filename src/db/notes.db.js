const Note = require('../models/Note');

/* Console */
const chalk = require('chalk');
const log = console.log;
const success = chalk.bgGreenBright.black;
const error = chalk.bgRed;
const NOTES_DB = '[NotesDB]: ';

const getNotes = (id) =>
   new Promise((resolve, reject) => {
      Note.find({ user: id })
         .then((data) => {
            log(success(NOTES_DB, 'GET NOTES'));
            resolve(data);
         })
         .catch((err) => {
            log(error(NOTES_DB, err));
            reject(err);
         });
   });

const getNote = (id) =>
   new Promise((resolve, reject) => {
      Note.findById(id)
         .then((note) => {
            log(success(NOTES_DB, 'GET NOTE'));
            resolve(note);
         })
         .catch((err) => reject(err));
   });

module.exports = {
   get: getNotes,
   getOne: getNote
};
