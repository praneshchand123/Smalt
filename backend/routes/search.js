var express = require('express');
const axios = require('axios');
const spotify = require('../Spotify/spotifyHandler.js');
const formatter = require('../utils/formatter.js');
const query = require("../db/queries");
var router = express.Router();

/* GET search Spotify API with search  term */
router.get('/', async (req, res)  => {
    console.log(req.query.room);
    const tokens = await query.getAccessToken(req.query.room);
    console.log(tokens);
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization":"Bearer " + tokens.host.Tokens.accessToken
    }
    console.log(req.query.searchTerm);
    var response = await axios.get(spotify.createSearchQuery(req.query.searchTerm), {
            headers: headers
        });

        var formattedResponse = formatter.formatSearchResponse(response.data.tracks.items);
        console.log("search done");
        res.json(formattedResponse);
});

module.exports = router;
