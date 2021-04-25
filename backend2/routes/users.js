var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id:1,name:"reeee"},
    {id:2,name:"xd"},
    {id:3,name:"asdf"}
])
});

module.exports = router;
