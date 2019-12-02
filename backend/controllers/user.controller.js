const User = require('../models/user.model.js');

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
  User.find()
    .then(users => {
      console.log(users);
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.location) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'location can not be empty'
    });
  }

  if (!req.body.personsInHouse) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'personsInHouse can not be empty'
    });
  }

  if (!req.body.houseSize) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'houseSize can not be empty'
    });
  }

  // Create a new User
  const user = new User({
    location: req.body.location,
    personsInHouse: req.body.personsInHouse,
    houseSize : req.body.houseSize
    });

  // Save User in the database
  user
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.'
      });
    });
};