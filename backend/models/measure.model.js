const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema(
  {
    _id: {
      type: ObjectId,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    creationDate : {
      type: String,
      required: true
    },
    sensorID: {
      type: ObjectId,
      required: true
    },
    value: {
      type: Int32,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Measure', measureSchema);