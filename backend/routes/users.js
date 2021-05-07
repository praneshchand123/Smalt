var express = require("express");
var router = express.Router();
const spotify = require("../Spotify/spotifyHandler.js");
const query = require("../db/queries");
const axios = require("axios");
const sockets = require("../Sockets/socketMgr");

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
  const tokens = await query.getAccessToken(req.body.room);
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization":"Bearer " + tokens.host.Tokens.accessToken
}
  const track = req.body.track;
  track.upVoteCount = 0;
  const response = await axios.get(spotify.createGetTrackQuery(track.id), { headers: headers });
  track.songDuration = response.data.duration_ms;
  await query.addSongToPool(track, req.body.room);
    console.log("pleasssssse");
    sockets.broadcastNewSong(req.body.room,track)
  
});

module.exports = router;
