"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  order_data: {
    type: Array,
    required: true
  }
});
module.exports = mongoose.model('order', OrderSchema);