var express = require('express');
var router = express.Router();
var sensor = require('../controllers/sensor.controller');

/* create  one sensor   */
router.put('/', sensor.create);

module.exports = router;