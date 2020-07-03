const mongoose = require('mongoose');
require('dotenv').config();
const {
   NOTES_APP_MONGODB_DATABASE,
   NOTES_APP_MONGODB_PASSWORD,
   NOTES_APP_MONGODB_USER
} = process.env;

const MONGODB_URI=`mongodb+srv://${NOTES_APP_MONGODB_USER}:${NOTES_APP_MONGODB_PASSWORD}@node-app.sgvck.mongodb.net/${NOTES_APP_MONGODB_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI, {
   useUnifiedTopology: true,
   useNewUrlParser: true
})
.then(() => console.log('Database is connected'))
.catch(err => console.error(err))