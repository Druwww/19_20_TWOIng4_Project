var express = require('express');
var router = express.Router();
var measure = require('../controllers/measure.controller');

/* GET measure listing. */
router.get('/', measure.findAll);

//Return n last measures from collection
router.get('/lastMeasures', measure.lastMeasures);

router.get('/timeMeasures', measure.timeMeasures);

router.get('/timeMeasuresTypeT', measure.timeMeasuresTypeT);
router.get('/timeMeasuresTypeH', measure.timeMeasuresTypeH);
router.get('/timeMeasuresTypeA', measure.timeMeasuresTypeA);

module.exports = router;