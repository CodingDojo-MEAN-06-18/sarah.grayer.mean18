//server renders views/index.ejs that has form for user to fill out
//user fills out form and submits
//form info is emitted to the server w/event name "posting_form"
//server listens for an event "posting_form" and when triggered, organizes emmited info to create a single message and sends this msg w/the event called "updated_msg". Also emits an event called "random_number" w/random num beetween 1 and 1000.
//client listens for event called "random_number" and when event is triggered, shows the # in the HTML.
//client listens for an event called "updated_msg" and when event it triggered, displays msg in HTML

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
