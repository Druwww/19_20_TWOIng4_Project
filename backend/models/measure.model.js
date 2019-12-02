const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true
    // },
    type: {
      type: String,
      required: true
    },
    creationDate : {
      type: String,
      required: true
    },
    sensorID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
);

module.exports = mongoose.model('Measure', measureSchema);