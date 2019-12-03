var express = require('express');
var router = express.Router();
// we import our user controller
var user = require('../controllers/user.controller');

/* create  one user   */
router.put('/', user.create);

router.get('/', user.findOne);

module.exports = router;