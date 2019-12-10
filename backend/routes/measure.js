var express = require('express');
var router = express.Router();
// we import our measure controller
var measure = require('../controllers/measure.controller');

/* create  one sensor   */
router.put('/', measure.create);

router.get('/', measure.findOne);
router.get('/:sensorID', measure.findOne);

router.post('/', measure.update);

router.delete('/', measure.delete);

module.exports = router;
