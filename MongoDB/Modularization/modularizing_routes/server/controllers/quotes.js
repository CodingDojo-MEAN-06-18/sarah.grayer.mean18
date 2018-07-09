const Quote = require("../models/quote.js");

module.exports={
  index: function(req, res){
    res.render("welcome");
  },

  get_quotes: function(req, res){
    Quote.find({}, function(err, quotes){
      if (err){
        console.log(err);
      }
      res.render('quotes', {quotes:quotes});
    });
  },

  create: function(req, res){
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
  }

}
