var express = require('express');
var router = express.Router();
var sensor = require('../controllers/sensor.controller');

/* GET sensor listing. */
router.get('/', sensor.findAll);

// Get Number of sensors
router.get('/numberSensors', sensor.numberSensors);

module.exports = router;