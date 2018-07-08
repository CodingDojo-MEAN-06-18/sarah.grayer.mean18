
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

mongoose.connect('mongodb://localhost/message_board')//set up db connection

const Schema = mongoose.Schema;


const CommentSchema = new mongoose.Schema({ //set up Schema
  name: {type: String, required: [true, "Please include your name with your comment"]},
  comment: {type: String, required: [true, "Please write your comment"]},
  //_message: {type: Schema.Types.ObjectId, ref: 'Message'}
});

const MessageSchema = new mongoose.Schema({ //set up Schema
  name: {type: String, required: [true, "Please include your name with your message"]},
  message: {type: String, required: [true, "Please write your message"]},
  comments: [CommentSchema]
});

mongoose.model("Message", MessageSchema);
mongoose.model("Comment", CommentSchema);
const Message = mongoose.model("Message");
const Comment = mongoose.model("Comment");

//routes

//view index.ejs upon load
app.get('/', function(req, res){
  console.log("In index route")
  Message.find({}).populate('comments').exec(function(err, messages){
    if(err){
      console.log(err);
    }
    res.render('index', {messages: messages});
  });
});

//post, create message in db w/wdate in req.body, redirect back ('/')
app.post('/new', function(req, res){
  console.log("In route to add message... ")
  Message.create(req.body, function(err, result){
    if(err){
      console.log(err);
      res.redirect("/");
    }
    else{
      console.log("Successfully added message!");
      res.redirect("/");
    }
  })
})

//DELETE from DB
app.post('/:id/delete/', function(req, res){
  Message.remove({_id: req.params.id}, function(err, result){
    if (err){
      console.log(err);
    }
    console.log("Deleted message")
    res.redirect('/');
  })
})

app.post('/comment/:id', function(req, res){
  console.log("In route to add comment")
  Comment.create(req.body).then((comment) => {
    Message.findById(req.params.id).then((message) => {
      message.comments.push(comment);
      message.save().then(() => {
        res.redirect("/");
      });
    }).catch((error) => {
      console.log("Error: ", error);
    });
  }).catch((error) => {
    console.log("Error: ", error);
    for (let key in error.errors){
      req.flash("comments", err.errors[key].message)
    }
    console.log("Successfully add comment!")
    res.redirect('/');
  });
});



  //const messageID = req.params.id;
  //Message.findOne({ _id: messageID }, function(err, message){
  //  const newComment = new Comment({
  //    name: req.body.name,
    //  comment: req.body.comment });
  //  Message.update({ _id: messageID }, {$push: {_comments: newComment }}, function(err){
  //    if(err){
  //      console.log(err);
  //    }
    //  newComment.save(function(err){
    //    if(err){
      //    console.log(err);
      //    res.render('index', {errors: newComment.errors });
      //  }
      //  else{
        //  console.log("Successfully added comment!");
        //  res.redirect('/');
      //  }
  //    });
  //  });
  //});

  //Comment.create(req.body, function(err, result){
    //if(err){
  //    console.log(err);
  //  }
  //  console.log("successful comment");
  //  res.redirect('/');
  //})

//READ/Show.ejs
//app.get("/:id", function(req, res){
  //Dog.find({ _id: req.params.id }, function(err, response_object){
    //if (err){
    //  console.log(err);
  //  }
    //res.render("show", {dog: response_object[0]}); //Show the 1st response object matching the id given
  //});
//});

//index.ejs (READ) Home page, find all
//app.get('/', function(req, res){
  //Dog.find({}, function(err, all_dogs){
  //  if(err){
    //  console.log(err);
  //  }
    //res.render('index', {dogs: all_dogs}); //use dogs in index.ejs, <% for (const dog of dogs) { %>
//  });
//});

app.listen(port); //set above
