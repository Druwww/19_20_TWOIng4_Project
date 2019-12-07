var express = require('express');
var router = express.Router();
// we import our measure controller
var askme = require('../controllers/askMe.controller');

router.get('/', askme.askMe);

module.exports = router;