const users = [];
const messages = [];

function isUser(user){ //testing if a new data.user entered matches any user name already in [users]. Returns true if match.
  const usersCount=users.length;
  for(var i=0; i<usersCount; i++){
    if (user==users[i]){
      return true;
    }
  }
  return false;
}

module.exports=function Route(app, server){
  var io=require("socket.io").listen(server)

  io.sockets.on("connection", function(socket){
    socket.on("page_load", function(data){
      const existingUser=isUser(data.user); //isUser function above, checking if name already exists in [users], returns true/false
      const event = existingUser ? 'existing_user' : 'load_messages';//if val true in existingUser, go to 'existing_user' in index.ejs, otherwise go to 'load_messages'
      const info = existingUser ? {error: "This user already exists"} : { current_user: data.user, messages: messages }; //upon having a value true in existingUser, send error message
      if(!existingUser){
        users.push(info.current_user);
        console.log("Current user is ", info.current_user)//shows name
      };
      socket.emit(event, info);
    });

    socket.on("new_message", function(data){
      messages.push({ name:data.user, message: data.message}); //adds to namd and message to [messages]
      io.emit("post_new_message", {new_message: data.message, user: data.user}); //goes to 'post_new_message' in index.ejs
      console.log(users);// Array of user names ['', '']
      console.log(messages);//Array of key/val pairs with [{name:'', message:''}]
    });
  });

  app.get("/", function(request, response){
    response.render("index")
  });
};
