var mongoose = require('mongoose');
var houseSchema = require('../house/house.schema.server');

var userSchema = new mongoose.Schema({
  facebook: { id: String, token: String, displayName: String },
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  role: String,
  houses: [houseSchema],
  dateCreate:{type: Date, default: Date.now()}
},{collection:'Users'});

module.exports = userSchema;
