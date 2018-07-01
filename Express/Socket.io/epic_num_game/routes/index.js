module.exports=function Route(app, server){

  var count = 0;

  //gets the socket.io module
  var io=require("socket.io").listen(server)

  //root route renders index.ejs view
  app.get('/', function(req, res){
    res.render("index");

  })
  //listen to connection from client side
  io.sockets.on("connection", function(socket){

    //server listens to "pressing_button" event
    socket.on("pressing_button", function(data){
      count++;
      //emit data to client
      socket.emit("updated_count", count);
      console.log("count is ", count);
    })

    socket.on("resetting", function(data){
      count = 0;
      //emit data to client
      socket.emit("reset", count);
      console.log("count is ", count);
    })


  })
};
