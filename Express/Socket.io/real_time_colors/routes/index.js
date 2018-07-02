module.exports=function Route(app, server){

  //gets the socket.io module
  var io=require("socket.io").listen(server)

  //root route renders index.ejs view
  app.get('/', function(req, res){
    res.render("index");

  })
  //listen to connection from client side
  io.sockets.on("connection", function(socket){

    socket.on("pressed_green", function(data){
      socket.emit('change_green');
    });

    socket.on("pressed_blue", function(data){
      socket.emit('change_blue');
    });

    socket.on("pressed_pink", function(data){
      socket.emit('change_pink');
    });
  });
};
