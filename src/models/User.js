const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema(
   {
      name: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true,
         unique: true
      },
      password: {
         type: String,
         required: true
      }
   },
   {
      timestamps: true
   }
);

/* Se crea un método dentro de UserSchema que nos permita encriptar la contraseña */
UserSchema.methods.encryptPassword = async (password) => {
   const salt = await bcrypt.genSalt(10);
   const hash = await bcrypt.hash(password, salt);
   return hash;
};

/* Este mètodo hace match con la contraseña que se pase por parámetro */
UserSchema.methods.matchPassword = async function (password) {
   const isCorrect = await bcrypt.compare(password, this.password);
   return isCorrect;
};

module.exports = model('User', UserSchema, 'users');
