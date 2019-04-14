var mongoose = require('mongoose');

var houseSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.ObjectId, ref: "User"},
  name: String,
  description: String,
  price: String,
  url: String,
  owner: String,
  buyer: mongoose.Schema.ObjectId,
  comments: [mongoose.Schema.ObjectId],
  dateCreate: {type: Date, default: Date.now()}
}, {collection: 'Houses'});

module.exports = houseSchema;
