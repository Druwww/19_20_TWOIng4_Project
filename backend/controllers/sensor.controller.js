const Sensor = require('../models/sensor.model.js');

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
  Sensor.find()
    .then(sensor => {
      console.log(sensor);
      res.send(sensor);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving sensor.'
      });
    });
};


// Create and Save a new Sensor
exports.create = (req, res) => {
  // Validate request
  if (!req.body.creationDate) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'creationDate can not be empty'
    });
  }

  if (!req.body.location) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'location can not be empty'
    });
  }

  if (!req.body.userID) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'userID can not be empty'
    });
  }

  // Create a new User
  const sensor = new Sensor({
    creationDate: req.body.creationDate,
    location: req.body.location,
    userID : req.body.userID
    });

  // Save User in the database
  sensor
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Sensor.'
      });
    });
};