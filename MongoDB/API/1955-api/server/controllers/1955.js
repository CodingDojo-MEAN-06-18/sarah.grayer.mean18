const Person = require('mongoose').model('Person');

module.exports = {
  index(req, res){
    Person.find({})
      .then(people => res.json(people))
      .catch(error => res.json(error));
  },
  show(req, res){
    Person.findOne(req.params)
      .then(person => {
        res.json(person ? person: 'No such person in 1955');
      })
      .catch(error => res.json(errror));
    },
    create(req, res){
      Person.create(req.params)
        .then(person => res.json(person))
        .catch(error => res.json(error));
    },
    destroy(req, res){
      Person.remove(req.params)
        .then(result => res.json(result))
        .catch(error => res.json(error));
    },
  };
