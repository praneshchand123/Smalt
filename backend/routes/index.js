var express = require('express');
var users = require('./users');
var search = require('./search');
var openSocket = require('./openSocket');

const router = express.Router();

router.use('/users', users);
router.use('/search', search);
//router.use('/openSocket', openSocket);

//router.use('/specialmagicalurl', auth)

module.exports = router;
