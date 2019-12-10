var express = require('express');
var router = express.Router();
var sensor = require('../controllers/sensor.controller');

/* create  one sensor   */
router.put('/', sensor.create);

router.get('/', sensor.findOne);

router.get('/:userID', sensor.findOne);

router.post('/', sensor.update);

router.delete('/', sensor.delete);
router.delete('/:sensorID', sensor.delete);

module.exports = router;