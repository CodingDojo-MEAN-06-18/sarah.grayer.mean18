module.exports=function Route(app, server){
  //gets the socket.io module
  var io=require("socket.io").listen(server)

  //root route renders index.ejs view
  app.get('/', function(req, res){
    res.render("index");
  })

  //listen to connection from client side
  io.sockets.on("connection", function(socket){

    //server listens to "posting_form" event
    socket.on("posting_form", function(data){

      //generate a random random num
      var random_number=Math.floor((Math.random()*1000)+1);
      
      //emit data to client
      socket.emit("updated_msg", {response: data});
      console.log(data);
      socket.emit("random_number", {response: random_number});
      console.log(random_number);
    })
  })
};
