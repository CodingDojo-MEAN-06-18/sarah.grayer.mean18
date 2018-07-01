//require express, path, and body-parser
const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");

//create the express app
const app=express();
app.use(bodyParser.urlencoded());

//static content
app.use(express.static(path.join(__dirname, "./static")));

//set up ejs and views folder
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//tell express app to listen on port 3000
const server=app.listen(8000, function(){
  console.log("listening on port 8000");
})

//have routes/index.js handle all routing
const route=require("./routes/index.js")(app, server)
