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
      message: 'measureId can not be empty'
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
        message: err.message || 'Some error occurred while creating the Measure.'
      });
    });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {

  //If id is pass in request
  if(req.body.measureId){
    Measure.findById(req.body.measureId)
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'measure not found with id ' + req.body.measureId
        });
      }
      res.send(measure);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'measure not found with id ' + req.body.measureId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving measure with id ' + req.body.measureId
      });
    });
  }else if(req.body){
    var diffParams = {};

    if(req.body.type){
      diffParams.type = req.body.type;
    }

    if(req.body.creationDate){
      diffParams.creationDate = req.body.creationDate;
    }
    
    if(req.body.sensorID){
      diffParams.sensorID = req.body.sensorID;
    }

    if(req.body.value){
      diffParams.value = req.body.value;
    }

    Measure.find(diffParams)
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'Measure not found with thoses params ' + diffParams
        });
      }
      res.send(measure);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Measure not found with thoses params ' +diffParams
        });
      }
      return res.status(500).send({
        message: 'Error retrieving measure with thoses params' + diffParams
      });
    });
  }
  else{
    return res.status(404).send({
      message: 'No params in request'
    });
  }
};


// Update a User identified by the UserId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.measureId) {
    return res.status(400).send({
      message: 'measureId can not be empty'
    });
  }

  Measure.findById(req.body.measureId).lean()
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'Measure not found with id ' + req.body.measureId
        });
      }else{
        const measureReceived = req.body;
        const newMeasure = Object.assign({}, measure, measureReceived);
        delete newMeasure.measureId;
        newMeasure.value = Number(newMeasure.value);
        
        // Find user and update it with the request body
        console.log(newMeasure);
        Measure.findByIdAndUpdate(
          req.body.measureId,
          {$set: {
            creationDate: newMeasure.creationDate,
            value: newMeasure.value,
            sensorID: newMeasure.sensorID,
            type: newMeasure.type
          }},
          { new: true }
        )
          .then(measureMod => {
            console.log(measureMod);
            if (!measureMod) {
              return res.status(404).send({
                message: 'Measure not found with id ' + req.body.measureId
              });
            }
            res.send(measureMod);
          })
          .catch(err => {
            if (err.kind === 'ObjectId') {
              return res.status(404).send({
                message: 'Measure not found with id ' + req.body.measureId
              });
            }
            return res.status(500).send({
              message: 'Error updating Measure with id ' + req.body.measureId
            });
          });
      }
  })
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
  Measure.findByIdAndRemove(req.body.measureId)
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'measure not found with id ' + req.body.measureId
        });
      }
      res.send({ message: 'measure deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'measure not found with id ' + req.body.measureId
        });
      }
      return res.status(500).send({
        message: 'Could not delete measure with id ' + req.body.measureId
      });
    });
};