var express = require('express');
const axios = require('axios');
const spotify = require('../Spotify/spotifyHandler.js');
const formatter = require('../utils/formatter.js');
const query = require("../db/queries");
var router = express.Router();

/* GET search Spotify API with search  term */
router.get('/', async (req, res) => {
    console.log(req.query.room);
    const token = await query.getAccessToken(req.query.room);
    console.log(token);
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    }
    console.log("search started")
    axios.get(spotify.createSearchQuery(req.query.searchTerm), {
        headers: headers
    }).then((response) => {
        var formattedResponse = formatter.formatSearchResponse(response.data.tracks.items);
        console.log("search done");
        res.json(formattedResponse);

    }).catch(async (error) => {
        console.log(error.response.data);
        
        const refreshToken = await query.getRefreshToken(req.query.room);
        newTokens = await spotify.refreshAccessToken(refreshToken);
        newToken = newTokens.data.access_token;
        query.refreshTokens( newToken, req.query.room)
    });
});

module.exports = router;
