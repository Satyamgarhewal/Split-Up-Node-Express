const { Individual } = require('../model/individual');

module.exports.add = function(req, res) {
  const body = req.body;
  const individual = new Individual(body);
  individual
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
};
