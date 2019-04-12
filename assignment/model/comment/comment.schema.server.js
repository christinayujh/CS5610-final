var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  houseId: {type: mongoose.Schema.ObjectId, ref: "House"},
  description: String,
  owner: String,
  dateCreate: {type: Date, default: Date.now()}
}, {collection: 'Comments'});

module.exports = commentSchema;
