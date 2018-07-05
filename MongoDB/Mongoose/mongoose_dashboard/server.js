
const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const path=require("path");
const port=8000;
const app=express();

app.use(bodyParser.urlencoded({ extended:true })); //set up body-parser to parse form data
app.set("views", path.join(__dirname, "./views")); //directs server to views folder for files to render
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./static"))); //tells server where static files are stored (.css, referenced in .ejs files)

mongoose.connect('mongodb://localhost/mongoose_dashboard')//set up db connection
const DogSchema = new mongoose.Schema({ //set up Schema
  name: {type: String, required:true},
  color: {type: String, required:true}
});
const Dog = mongoose.model('Dog', DogSchema);//set up model, set quoteSchema in models as 'quotes'

//routes below
//CREATE in DB, w/data in req.body from new.ejs form
app.post('/', function(req, res){
  Dog.create(req.body, function(err, result){
    if (err){
      console.log(err);
    }
    res.redirect('/')
  });
});

//View new.ejs
app.get('/new', function(req, res){
  res.render('new');
});

//READ/Show.ejs
app.get("/:id", function(req, res){
  Dog.find({ _id: req.params.id }, function(err, response_object){
    if (err){
      console.log(err);
    }
    res.render("show", {dog: response_object[0]}); //Show the 1st response object matching the id given
  });
});

//index.ejs (READ) Home page, find all
app.get('/', function(req, res){
  Dog.find({}, function(err, all_dogs){
    if(err){
      console.log(err);
    }
    res.render('index', {dogs: all_dogs}); //use dogs in index.ejs, <% for (const dog of dogs) { %>
  });
});

//UPDATE in DB
app.post('/:id', function(req, res){
  Dog.update({ _id:req.params.id }, req.body, function(err, result){//1st parameter is showing what id we want updated, 2nd is info we want to update to, req.body from edit.ejs form
    if(err){
      console.log(err);
    }
    res.redirect('/');
  });
});

//Get Updated info from edit.ejs form submit
app.get('/:id/edit/', function(req,res){
  Dog.find({ _id: req.params.id }, function(err, response){
    if(err){
      console.log(err);
    }
    res.render("edit", {dog: response[0]});
  });
});

//DELETE from DB
app.post('/:id/delete/', function(req, res){
  Dog.remove({_id: req.params.id}, function(err, result){
    if (err){
      console.log(err);
    }
    res.redirect('/');
  })
})

app.listen(port); //set above
