var express = require('express');
var router = express.Router();

const spotify = require('../Spotify/spotifyHandler.js')

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

// router.post('/auth', async (req, res)  => {
//   console.log("backend called");
//   console.log(req.body.uri);
//   res.json(spotify.createAuthRequest(req.body));
//   console.log(res.data);
// });

router.get('/auth', async (req, res)  => {
  res.json(spotify.createAuthRequest(req.query.uri));
});

module.exports = router;
