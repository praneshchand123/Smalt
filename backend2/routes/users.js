var express = require('express');
var router = express.Router();
import createAuthRequest from 'spotify.js';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id:1,name:"reeee"},
    {id:2,name:"xd"},
    {id:3,name:"asdf"}
])
});

//register login
router.post('/', function(req, res, next) {
  res.json([
    {id:1,name:"reeee"},
    {id:2,name:"xd"},
    {id:3,name:"asdf"}
])
});

router.get('/auth', function(req, res, next) {
  res.json([{url: createAuthRequest()}]);
});

module.exports = router;
