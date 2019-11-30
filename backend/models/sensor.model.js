const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema(
  {
    _id: {
      type: ObjectId,
      required: true
    },
    creationDate: {
      type: String,
      required: true
    },
    location : {
      type: String,
      required: true
    },
    userID: {
      type: ObjectId,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Sensor', sensorSchema);