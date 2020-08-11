/* Estos son los schemas que debe segir la nota */
const { Schema, model, SchemaTypes } = require('mongoose'); /*   */

const NoteSchema = new Schema(
   {
      title: {
         type: String,
         required: true
      },
      description: {
         type: String,
         required: true
      },
      user: {
         type: SchemaTypes.ObjectId,
         ref: 'user'
      }
   },
   {
      timestamps: true
   }
);

module.exports = model('Note', NoteSchema, 'notes');
