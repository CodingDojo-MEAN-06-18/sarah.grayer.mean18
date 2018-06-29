const express=require("express");
const app=express();
const bodyParser=require('body-parser');
const path=require('path');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //sets view engine itself, so express knows which templating engine to because

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.resolve('assets')));

require('./routes/index.js')(app);

app.listen(8000, function(){
  console.log("Listening on port 8000");
})
