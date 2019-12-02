const Measure = require('../models/measure.model.js');

// Retrieve and return all measure from the database.
exports.findAll = (req, res) => {
  Measure.find()
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


// Create and Save a new measure
exports.create = (req, res) => {
  // Validate request
  if (!req.body.type) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'type can not be empty'
    });
  }

  if (!req.body.creationDate) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'creationDate can not be empty'
    });
  }

  if (!req.body.sensorID) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'sensorID can not be empty'
    });
  }

  if (!req.body.value) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'value can not be empty'
    });
  }

  // Create a new User
  const measure = new Measure({
    type: req.body.type,
    creationDate: req.body.creationDate,
    sensorID : req.body.sensorID,
    value : req.body.value
    });

  // Save User in the database
  measure
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