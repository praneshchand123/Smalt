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
        "Authorization": "Bearer BQCTQ-jWwXNzphLw3jbFse5FBQfI6TwUQbL_WMd_u1-3nhzJuXP818zReUVIKgz-OkJ5mIM5RaZX3kLGrM__r_b1e_W8GnF3tVfWjeQydqzlPlqoODo8Vt2McOM2vM87r3j7x7ui0j6wD74yIi_AyakR6w",
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
