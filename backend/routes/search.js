var express = require('express');
const axios = require('axios');
var router = express.Router();

const spotify = require('../utils/spotify.js');
const formatter = require('../utils/formatter.js');

/* GET search Spotify API with search  term */
router.get('/search', async (req, res)  => {

    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer BQDAJuHHXV69jk0XjJcv2-lHCrYHZgmQPfzFwqcOelM-rcgLfn2pjztqgCDJ66i1v64L1oTVX_qL9x9mz9yf09SSFizRRcUYrfH5KTshcVtODfhYR2ctTXyntEF5zYrBUGV1fQ2me7-x",
    }
    
    //
    axios.get(spotify.createSearchQuery(req.body.searchTerm), {
            headers: headers
        })
        .then(response => {
            var formattedResponse = formatter.formatSearchResponse(response.data.tracks.items);
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});


module.exports = router;
