const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const JowaiResultsSchema = new Schema({
  firstRound: {
    type: String,
    required: true
  },
  secondRound: {
    type: String,
    required: true
  },
  date: {
    day: Number,
    month: Number,
    year: Number,
  },
});

module.exports = JowaiResults = mongoose.model('jowaiResults', JowaiResultsSchema);