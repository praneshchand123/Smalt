var express = require('express');
var users = require('./users');
var search = require('./search');
var join = require('./join');

const router = express.Router();

router.use('/users', users);
router.use('/search', search);
router.use('/join', search);
//router.use('/openSocket', openSocket);

//router.use('/specialmagicalurl', auth)

module.exports = router;
