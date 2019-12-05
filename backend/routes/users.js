var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', user.findAll);

module.exports = router;
