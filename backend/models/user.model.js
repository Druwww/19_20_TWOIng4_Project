const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true
    // },
    location: {
      type: String,
      required: true
    },
    personsInHouse: {
      type: Number,
      required: true
    },
    houseSize : {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model('User', userSchema);
