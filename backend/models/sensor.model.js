const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true
    // },
    creationDate: {
      type: String,
      required: true
    },
    location : {
      type: String,
      required: true
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  }
);

module.exports = mongoose.model('Sensor', sensorSchema);