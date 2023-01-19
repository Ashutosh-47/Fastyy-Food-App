"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('user', UserSchema);