var houseModel = require('../house/house.model.server');
var mongoose = require('mongoose');
var commentSchema = require('./comment.schema.server');

var commentModel = mongoose.model("Comment", commentSchema);


commentModel.createComment = createComment;
commentModel.findAllCommentsForUser = findAllCommentsForUser;
commentModel.findCommentById = findCommentById;
commentModel.updateComment = updateComment;
commentModel.deleteComment = deleteComment;

module.exports = commentModel;

//helper function
commentModel.populateComments = populateComments;


function populateComments(comments) {
  return commentModel.insertMany(comments);
}

function createComment(houseId, comment) {
  comment.houseId = houseId;
  return commentModel.create(comment).then(
    function (comment) {
      houseModel.findHouseById(houseId)
        .then(
          function (house) {
            house.comments.push(comment);
            // userModel.updateUser(userId,user);
          }
        );
      return comment;
    }
  );
}

function findAllCommentsForUser(houseId) {
  return commentModel.find({houseId: houseId});
}

function findCommentById(id) {
  return commentModel.findById(id);
}


function updateComment(commentId, comment) {
  return commentModel.findByIdAndUpdate(commentId, comment);
}

function deleteComment(commentId) {
  return commentModel.findByIdAndRemove(commentId);
}
