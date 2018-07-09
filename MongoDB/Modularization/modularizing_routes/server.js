const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const path=require("path");
const port=8000;
const app=express();
const session=require("express-session")
const flash=require("express-flash");
const time=require("express-timestamp")
app.use(session({
  secret: 'super_secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(flash());
app.use(bodyParser.urlencoded({ extended:true })); //set up body-parser to parse form data

mongoose.connect('mongodb://localhost/quoting_dojo')//set up db connection

app.use(express.static(path.join(__dirname, "./static"))); //tells server where static files are stored (.css, referenced in .ejs files)

app.set("views", path.join(__dirname, "./views")); //directs server to views folder for files to render
app.set("view engine", "ejs");

//routes in routes.js
require('./server/config/routes.js')(app)


app.listen(port); //set above
