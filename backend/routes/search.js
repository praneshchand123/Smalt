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
        "Authorization": "Bearer BQBRXyk26kKWynCvrKoE8BzjVJK1O4jo2eloPJ4aOVyIJHDBuo_COQfo-kxpj2kmZohfrFpFZAj1P3uiY38iAt4m83Sx-s-ReRNnI6Su-bH4fxzAwBk9vDnw_UHpbqIRUF0h2_88rkTm",
    }
    
    //
    axios.get(spotify.createSearchQuery(req.body.searchTerm), {
            headers: headers
        })
        .then(response => {
            var formattedResponse = formatter.formatSearchResponse(response.data.tracks.items);
            res.json(formattedResponse);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;
