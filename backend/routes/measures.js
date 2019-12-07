var express = require('express');
var router = express.Router();
var measure = require('../controllers/measure.controller');

/* GET measure listing. */
router.get('/', measure.findAll);

//Return n last measures from collection
router.get('/lastMeasures', measure.lastMeasures);

module.exports = router;