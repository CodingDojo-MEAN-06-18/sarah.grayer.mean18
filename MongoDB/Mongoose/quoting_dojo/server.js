
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
const quoteSchema = new mongoose.Schema({ //set up Schema
  name: {type:String, required:true, date:{type: Date, default: Date.now}},
  quote: {type:String, required:true}
}, {timestamps: true });
const Quote = mongoose.model('quotes', quoteSchema);//set up model, set quoteSchema in models as 'quotes'

app.use(express.static(path.join(__dirname, "./static"))); //tells server where static files are stored (.css, referenced in .ejs files)

app.set("views", path.join(__dirname, "./views")); //directs server to views folder for files to render
app.set("view engine", "ejs");

//routes below
app.get('/', function(req, res){
  res.render('welcome');
});

app.get('/quotes', function(req, res){ //gets all existing quotes and pass into the rendered quotes.ejs view
  Quote.find({}, function(err, quotes){
    if (err){
      console.log(err);
    }
    res.render('quotes', {quotes:quotes});
  });
});

app.post('/quotes', function(req, res){ //creates new quote and sends to '/quotes', rendering quotes.ejs view
  Quote.create(req.body, function(err){
    if (err){
      console.log("We have an error");
      for(var key in err.errors){
        req.flash("required", err.errors[key].message); //messages is not interable, need them to be part of something to iterate
      }
      res.redirect('/');
    }
    else{
      console.log("Successfully added a quote")
      res.redirect('/quotes');
    }
  });
});

app.listen(port); //set above
