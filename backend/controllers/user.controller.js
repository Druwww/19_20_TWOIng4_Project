const User = require('../models/user.model.js');

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
  User.find()
    .then(users => {
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


// Find a single User with a UserId
exports.findOne = (req, res) => {

  //If id is pass in request
  if(req.body.userId){
    User.findById(req.body.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.body.userId
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.body.userId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with id ' + req.body.userId
      });
    });
  }else if(req.body){
    var diffParams = {};

    if(req.body.location){
      diffParams.location = req.body.location;
    }

    if(req.body.personsInHouse){
      diffParams.personsInHouse = req.body.personsInHouse;
    }
    
    if(req.body.houseSize){
      diffParams.houseSize = req.body.houseSize;
    }

    User.find(diffParams)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with thoses params ' + diffParams
        });
      }
      res.send(user);
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
  if (!req.body.userId) {
    return res.status(400).send({
      message: 'userId can not be empty'
    });
  }

  User.findById(req.body.userId).lean()
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.body.userId
        });
      }else{
        const userReceived = req.body;
        const newUser = Object.assign({}, user, userReceived);
        delete newUser.userId;
        newUser.personsInHouse = Number(newUser.personsInHouse);
        
        // Find user and update it with the request body
        User.findByIdAndUpdate(
          req.body.userId,
          {$set: {
            location: newUser.location,
            personsInHouse: newUser.personsInHouse,
            houseSize: newUser.houseSize
          }},
          { new: true }
        )
          .then(userMod => {
            if (!userMod) {
              return res.status(404).send({
                message: 'User not found with id ' + req.body.userId
              });
            }
            res.send(userMod);
          })
          .catch(err => {
            if (err.kind === 'ObjectId') {
              return res.status(404).send({
                message: 'User not found with id ' + req.body.userId
              });
            }
            return res.status(500).send({
              message: 'Error updating user with id ' + req.body.userId
            });
          });
      }
        
  })
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {

  User.findByIdAndRemove(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.body.userId
        });
      }
      res.send({ message: 'User deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'User not found with id ' + req.body.userId
        });
      }
      return res.status(500).send({
        message: 'Could not delete user with id ' + req.body.userId
      });
    });
};

exports.numberPersonsInHouse = (req, res) => {

  User.find()
    .then(users => {
      
      var valeursPersonnes = [];

      for(var i = 0; i<6; i++){
        valeursPersonnes[i] = 0;
      }

      for(var i = 0; i < users.length; i++){
        valeursPersonnes[users[i].personsInHouse - 1] += 1;
      }

      var values = {};

      for(var i = 0; i <  6; i++){
        values[i + 1] = valeursPersonnes[i];
      }
      res.send(values);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });

};
