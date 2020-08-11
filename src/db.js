const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI =
   process.env
      .MONGODB_URI; /* La variable se fefine en .env y se trae gracias a dotenv que lee ese archivo y configura las varibales de entorno */

mongoose
   .connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
   })
   .then(() => console.log('Database is connected'))
   .catch((err) => console.error(err));
