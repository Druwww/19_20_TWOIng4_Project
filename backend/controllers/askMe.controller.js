const Measure = require('../models/measure.model.js');
const Sensor = require('../models/sensor.model.js');
const User = require('../models/user.model.js');

function getNumberSensor(){
    Sensor.count(function(err, count) {
        return count;
    });
}


exports.askMe = (req, res) => {

    if(req.body.numberSensor){
        Sensor.count()
        .then(numberSensor => {
            if (!numberSensor) {
              return res.status(404).send({
                message: 'Error in numberSensor'
              });
            }
            res.send({numberSensor});
          })
    }

  };