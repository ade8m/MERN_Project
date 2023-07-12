const mongoose = require ('mongoose');
// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/location', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () =>  {
    console.log('Connected to the "location" database');
});
// Export the database connection
module.exports = db;