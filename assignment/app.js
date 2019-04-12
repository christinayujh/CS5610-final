module.exports=function (app) {

  require('./services/user.service.server')(app);
  require("./services/house.service.server.js")(app);
  require("./services/comment.service.server.js")(app);
}
