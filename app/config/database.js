const mongoose = require('mongoose');

const configureDb = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect('mongodb://localhost:27017/Split-Up', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Successfully connected to Database');
    })
    .catch(err => {
      console.log('Error connecting to Database', err);
    });
};

module.exports = configureDb;
