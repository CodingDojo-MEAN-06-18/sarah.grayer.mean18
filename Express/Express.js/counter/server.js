const express=require("express");
const app=express();
const session=require("express-session");
const path=require('path');
const bodyParser=require('body-parser');

const sessionconfig={
  saveUninitialized: true,
  resave: false,
  name: 'session',
  secret: 'secret',
};

app.set('views', __dirname + '/views'); //ses where express
app.set('view engine', 'ejs'); //sets view engine itself, so express knows which templating engine to because
app.set('views', path.resolve('views'));


app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.resolve('assets')));
app.use(session(sessionconfig));

app.get('/', function(req, resp){
  resp.render('index', {count: addOneToCounter(req)});
});

app.post('/plus2', function (req, resp){
  addOneToCounter(req); //only need to run this function once more, because index('/') is already adding 1
  resp.redirect('/');
});

app.post('/reset', function (req, resp){
  req.session.destroy();
    resp.redirect('/');
});

function addOneToCounter(req){
  console.log("count is now: "+ req.session.count);
  return req.session.count = req.session.count ?
    req.session.count + 1:1; //add 1, begin at 1 if not no count yet
}

app.listen(8000, function(){
  console.log("Listening on port 8000");
})
