const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const LoginSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = LoginModal = mongoose.model('loginDetails', LoginSchema);