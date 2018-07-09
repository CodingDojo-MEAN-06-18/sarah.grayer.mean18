const quotes = require('../controllers/quotes.js')

module.exports=function(app){

  app.get('/', function(req, res){
    quotes.index(req, res);
  });

  app.get('/quotes', function(req, res){ //gets all existing quotes and pass into the rendered quotes.ejs view
    quotes.get_quotes(req, res);
  });

  app.post('/quotes', function(req, res){ //creates new quote and sends to '/quotes', rendering quotes.ejs view
    quotes.create(req, res);
  });

}
