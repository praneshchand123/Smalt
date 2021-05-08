var express = require('express');
const axios = require('axios');
const queries = require("../db/queries");
//const spotify = require('../Spotify/spotifyHandler.js');


var router = express.Router();


router.get('/', async (req, res)  => {
    console.log(`got code: ${req.query.roomCode}`);
    truth = await queries.roomDoesExist(req.query.roomCode)
    if(truth ){
        res.status(200).send({"result": true})
    }else{
        res.status(400).send({"result": false})
    }
        
});

module.exports = router;