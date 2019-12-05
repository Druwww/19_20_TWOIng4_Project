var express = require('express');
var router = express.Router();
var sensor = require('../controllers/sensor.controller');

/* GET sensor listing. */
router.get('/', sensor.findAll);

module.exports = router;