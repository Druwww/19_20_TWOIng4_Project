const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: ObjectId,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    personsInHouse: {
      type: Int32,
      required: true
    },
    houseSize : {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);
