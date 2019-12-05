var express = require('express');
var router = express.Router();
var measure = require('../controllers/measure.controller');

/* GET measure listing. */
router.get('/', measure.findAll);

module.exports = router;