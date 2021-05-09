var express = require('express');
var users = require('./users');
var search = require('./search');
var join = require('./join');
var host = require('./host')

const router = express.Router();

router.use('/users', users);
router.use('/search', search);
router.use('/join', join);
router.use('/host', host);


module.exports = router;
