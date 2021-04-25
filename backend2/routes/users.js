var express = require('express');
var router = express.Router();

const spotify = require('./spotify.js')

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

router.get('/auth', async (req, res)  => {
  res.json([{url: spotify.createAuthRequest(req.uri)}]);
  console.log(res);
});

module.exports = router;
