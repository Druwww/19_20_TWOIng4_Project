const Sensor = require('../models/sensor.model.js');
const axios = require('axios');


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


// Find a single User with a UserId
exports.findOne = (req, res) => {

  //If id is pass in request
  if(req.body.sensorId){
    Sensor.findById(req.body.sensorId)
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'User not found with id ' + req.body.sensorId
        });
      }
      res.send(sensor);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.body.sensorId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with id ' + req.body.sensorId
      });
    });
  }else if(req.body){
    var diffParams = {};

    if(req.body.location){
      diffParams.location = req.body.location;
    }

    if(req.body.creationDate){
      diffParams.creationDate = req.body.creationDate;
    }
    
    if(req.body.userID){
      diffParams.userID = req.body.userID;
    }

    Sensor.find(diffParams)
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'User not found with thoses params ' + diffParams
        });
      }
      res.send(sensor);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with thoses params ' +diffParams
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with thoses params' + diffParams
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
  if (!req.body.sensorId) {
    return res.status(400).send({
      message: 'sensorId can not be empty'
    });
  }

  Sensor.findById(req.body.sensorId).lean()
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'User not found with id ' + req.body.sensorId
        });
      }else{
        const sensorReceived = req.body;
        const newSensor = Object.assign({}, sensor, sensorReceived);
        delete newSensor.sensorId;
        
        // Find user and update it with the request body
        console.log(newSensor);
        Sensor.findByIdAndUpdate(
          req.body.sensorId,
          {$set: {
            creationDate: newSensor.creationDate,
            location: newSensor.location,
            userId: newSensor.userId
          }},
          { new: true }
        )
          .then(sensorMod => {
            console.log(sensorMod);
            if (!sensorMod) {
              return res.status(404).send({
                message: 'User not found with id ' + req.body.sensorId
              });
            }
            res.send(sensorMod);
          })
          .catch(err => {
            if (err.kind === 'ObjectId') {
              return res.status(404).send({
                message: 'User not found with id ' + req.body.sensorId
              });
            }
            return res.status(500).send({
              message: 'Error updating user with id ' + req.body.sensorId
            });
          });
      }
  })
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
  Sensor.findByIdAndRemove(req.body.sensorId)
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.body.sensorId
        });
      }
      res.send({ message: 'sensor deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.body.sensorId
        });
      }
      return res.status(500).send({
        message: 'Could not delete sensor with id ' + req.body.sensorId
      });
    });
};

exports.numberSensors = (req, res) => {
  Sensor.count()
        
  .then(numberSensor => {
    if (!numberSensor) {
      return res.status(404).send({
        message: 'Error in numberSensor'
      });
    }
    
    res.send({numberSensor});
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Error 1'
        });
      }
            
      return res.status(500).send({
        message: 'Error 2'
      });
    });
};

function countSensorLocation(location){
  Sensor.count({'location' : location}).lean()    
      .then(numberSensor => {
          if (!numberSensor) {
            return res.status(404).send({
              message: 'Error in loop'
            });
          }

        arrayNumberSensorLocation.push({location, numberSensor})
        console.log(arrayNumberSensorLocation);
      });
}

exports.sensorsLocation = (req, res) => {

  var location = Sensor.distinct('location')
  .then(listAllLocation => {
    if (!listAllLocation) {
      return res.status(404).send({
        message: 'Error in listAllLocation'
      });
    }

    res.send(listAllLocation);

    //Aide pour récuperation nombre de capteur par localisation
    // var aidePierre = [];

    // for(var local in listAllLocation){
    //     axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/sensor',
    //     data: {
    //       location: 'entrance'
    //     }
    //   })
    //   .then(response => {

    //     var total = 0;

    //     for(var i in response.data){
    //       total++;
    //     }
        
    //     aidePierre.push(local,total);
    //   });
      
    // }
    // console.log(aidePierre);


  });
}

exports.lastSensors = (req, res) => {

  if (!req.body.numberSensors) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'type can not be empty'
    });
  }

  if(req.body){
    var diffParams = {};

    if(req.body.location){
      diffParams.location = req.body.location;
    }

    if(req.body.creationDate){
      diffParams.creationDate = req.body.creationDate;
    }
    
    if(req.body.userID){
      diffParams.userID = req.body.userID;
    }

    Sensor.find(diffParams).sort({ creationDate: -1 })
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'Sensor not found with thoses params ' + diffParams
        });
      }
      sensor.length = req.body.numberSensors;
      sensor.sort(function(a,b){return (new Date(a.creationDate)) < (new Date(b.creationDate))})
      // sensor.reverse();
      console.log(sensor);
      res.send(sensor);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Sensor not found with thoses params ' +diffParams
        });
      }
      return res.status(500).send({
        message: 'Error retrieving sensor with thoses params' + diffParams
      });
    });
  }
  else{
    return res.status(404).send({
      message: 'No params in request'
    });
  }
};