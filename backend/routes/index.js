var express = require('express');
var users = require('./users');
var search = require('./search');

const router = express.Router();

router.use('/users', users);
router.use('/search', search)

module.exports = router;
