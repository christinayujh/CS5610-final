var commentModel = require('../model/comment/comment.model.server');

module.exports = function (app) {

//comment related api
  app.get("/api/house/:houseId/comment", findAllCommentsForUser);
  app.get("/api/comment/:commentId", findCommentById);
  app.post("/api/house/:houseId/comment", createComment);
  app.put("/api/comment/:commentId", updateComment);
  app.delete("/api/comment/:commentId", deleteComment);

  //delete me when push to heroku
  app.get("/api/populateComments", populateComments);

  var comments_pop = [
    {name: "Facebook", developerId: "456", description: "Lorem"},
    {name: "Tweeter", developerId: "456", description: "Lorem"},
    {name: "Gizmodo", developerId: "456", description: "Lorem"},
    {name: "Go", developerId: "123", description: "Lorem"},
    {name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
    {name: "Checkers", developerId: "123", description: "Lorem"},
    {name: "Chess", developerId: "234", description: "Lorem"}
  ]

  function populateComments(req, res) {
    console.log("pop DB!");
    //res.send("pop DB!");
    commentModel.populateComments(comments_pop)
      .then(
        function (comments) {
          console.log("comment populated!");
          res.json(comments);
        },
        function (error) {
          if (error) {
            console.log(error);
            res.statusCode(400).send(error);
          }
        }
      );
  }

  function findAllCommentsForUser(req, res) {
    let id = req.params.houseId;
    commentModel.findAllCommentsForUser(id).exec(
      function (err, comments) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(comments);
      }
    );
  }

  function findCommentById(req, res) {
    let id = req.params.commentId;

    commentModel.findCommentById(id).exec(
      function (err, comment) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(comment);
      }
    );
  }

  function createComment(req, res) {
    console.log("create comment");
    let houseId = req.params.houseId;
    let comment = req.body;
    commentModel
      .createComment(houseId, comment)
      .then(
        function (comment) {
          console.log("comment created!");
          res.json(comment);
        },
        function (error) {
          if (error) {
            console.log(error);
            res.statusCode(400).send(error);
          }
        }
      )
  }

  function updateComment(req, res) {
    console.log("update comment");
    let commentId = req.params.commentId;
    let comment = req.body;
    commentModel.updateComment(commentId, comment).exec(
      function (err, comment) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(comment);
      }
    );
  }

  function deleteComment(req, res) {
    console.log("delete comment");
    let commentId = req.params.commentId;
    commentModel.deleteComment(commentId).exec(
      function (err, comment) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(comment);
      }
    );
  }
}
