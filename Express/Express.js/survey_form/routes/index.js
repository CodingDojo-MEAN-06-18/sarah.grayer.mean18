module.exports = function Route(app){
  app.get('/', function(req, resp){
    resp.render("index");
  });

  app.post('/result', function(req, resp){
    const submittedInfo={
      name: req.body.name,
      location: req.body.location,
      language: req.body.language,
      comment: req.body.comment
    };
    resp.render("success", {userData: submittedInfo});
  });
};
