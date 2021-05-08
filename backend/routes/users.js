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
  console.log(`authrequest recieved: ${req.body.authCode}`)
  var accessAndRefreshTokens = await spotify.fetchAccessToken(req.body.authCode);
  console.log("gotaccessTokens");
  var hostUserName = req.body.userName;
  var roomId = await query.createNewRoom(accessAndRefreshTokens, hostUserName)
  if(roomId){
    console.log(roomId);
    res.status(200).send(roomId);
  }
});

router.post("/song", async (req,res) => {
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
    console.log(`added song to room ${req.body.room}`)
    sockets.broadcastNewSong(req.body.room,track)
  res.status(200);
});

module.exports = router;
