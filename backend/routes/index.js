var express = require('express');
var users = require('./users');
var search = require('./search');

const router = express.Router();

router.use('/users', users);
router.use('/search', search)

//router.use('/specialmagicalurl', auth)

module.exports = router;
