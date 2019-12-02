var express = require('express');
var router = express.Router();
// we import our measure controller
var measure = require('../controllers/measure.controller');

/* create  one measure   */
router.put('/', measure.create);

module.exports = router;
