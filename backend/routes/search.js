var express = require('express');
const axios = require('axios');
const spotify = require('../Spotify/spotifyHandler.js');
const formatter = require('../utils/formatter.js');

var router = express.Router();

/* GET search Spotify API with search  term */
router.get('/search', async (req, res)  => {

    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer BQDZmmrCwA4GO55cXVtFefwGMGimUB7S1ARZgUE_RzQBYlnrDP1S8XhdiDCOYjjzfiifIEcBIZvPFWgaUhUB6lN-MGURO4TChDcAmSYYUHzeWfuii1vnCKpQI0mzQrOF3oYaPwtAb0su",
    }
    console.log(req.query.searchTerm);
    var response = await axios.get(spotify.createSearchQuery(req.query.searchTerm), {
            headers: headers
        });

        var formattedResponse = formatter.formatSearchResponse(response.data.tracks.items);
        console.log(formattedResponse);
        res.json(formattedResponse);
});

module.exports = router;
