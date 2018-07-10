const nineteenFiftyFiveController = require('../controllers/1955');

module.exports = function(app){
  app.get('/', nineteenFiftyFiveController.index); //index- find({})
  app.get('/new/:name', nineteenFiftyFiveController.create); //create- create(req.params)
  app.get('/remove/:name', nineteenFiftyFiveController.destroy); //destroy- remove(req.params)
  app.get('/:name', nineteenFiftyFiveController.show); //show- findOne(req.params)
};
