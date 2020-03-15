const { User } = require('../model/user');

module.exports.create = function(req, res) {
  const body = req.body;
  const user = new User(body);
  user
    .save()
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.send(err);
    });
};
