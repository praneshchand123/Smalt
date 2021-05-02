var express = require('express');
var users = require('./users');

const router = express.Router();

router.use('/users', users);

//router.use('/specialmagicalurl', auth)

module.exports = router;
