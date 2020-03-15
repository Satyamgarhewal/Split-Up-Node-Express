const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const individualSchema = new Schema({
  role: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

const Individual = ('Individual', individualSchema);
module.exports = { Individual };
