var express = require("express");
var router = express.Router();
const spotify = require("../Spotify/spotifyHandler.js");
const query = require("../db/queries");
const axios = require("axios");

router.get("/auth", async (req, res) => {
  res.json(spotify.createAuthRequest(req.query.uri));
});

router.post("/auth/code", async (req, res) => {
  var accessAndRefreshTokens = await spotify.fetchAccessToken(
    req.body.authCode
  );
  var hostUserName = req.body.userName;
  console.log(`accesstoken: ${accessAndRefreshTokens.accessToken}`);
  console.log(`username: ${hostUserName}`);
  console.log(await query.createNewRoom(accessAndRefreshTokens, hostUserName));
});

router.post("/song", async (req, res) => {
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer BQDZmmrCwA4GO55cXVtFefwGMGimUB7S1ARZgUE_RzQBYlnrDP1S8XhdiDCOYjjzfiifIEcBIZvPFWgaUhUB6lN-MGURO4TChDcAmSYYUHzeWfuii1vnCKpQI0mzQrOF3oYaPwtAb0su",
  }
  const track = req.body.track;
  track.upVoteCount = 0;
  const response = await axios.get(spotify.createGetTrackQuery(track.id), { headers: headers });
  track.songDuration = response.data.duration_ms;
  console.log(await query.addSongToPool(track, req.body.room));
});

module.exports = router;
