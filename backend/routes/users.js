var express = require('express');
var router = express.Router();
const axios = require('axios');
const spotify = require('../Spotify/spotifyHandler.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json([
    { id: 1, name: "reeee" },
    { id: 2, name: "xd" },
    { id: 3, name: "asdf" }
  ])
});

//register login
router.post('/', function (req, res, next) {
  res.json([
    { id: 1, name: "reeee" },
    { id: 2, name: "xd" },
    { id: 3, name: "asdf" }
  ])
});



router.get('/auth', async (req, res) => {
  //payload = spotify.createAuthRequest(req.query.uri)
  res.json(spotify.createAuthRequest(req.query.uri));
});

router.get('/auth/code', async (req, res) => {
  var response = await spotify.fetchAccessToken(req.query.authCode);
  console.log(response);
});

module.exports = router;
