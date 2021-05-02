var express = require('express');
var router = express.Router();
const axios = require('axios');
var bodyParser = require('body-parser')
//our spotify app keys
const clientId = '0a6cf31ec5bf4808831e58a7bb937cc7';
const clientSecret = '25b3362597014da293b32f9d99bca194';

var access_token = null;
var refresh_token = null;

//spotify api endpoints
const AUTHORIZE = "https://accounts.spotify.com/authorize"
const TOKEN = "https://accounts.spotify.com/api/token";
const PLAYLISTS = "https://api.spotify.com/v1/me/playlists";
const DEVICES = "https://api.spotify.com/v1/me/player/devices";
const PLAY = "https://api.spotify.com/v1/me/player/play";
const PAUSE = "https://api.spotify.com/v1/me/player/pause";
const NEXT = "https://api.spotify.com/v1/me/player/next";
const PREVIOUS = "https://api.spotify.com/v1/me/player/previous";
const PLAYER = "https://api.spotify.com/v1/me/player";
const TRACKS = "https://api.spotify.com/v1/playlists/{{PlaylistId}}/tracks";
const CURRENTLYPLAYING = "https://api.spotify.com/v1/me/player/currently-playing";
const SHUFFLE = "https://api.spotify.com/v1/me/player/shuffle";


//this function creates string which redirects user to spotify with login prompt and returns it. User is redirected by frontend.
//redirectUri Must be approved in spotify
exports.createAuthRequest = function (redirectUri) {
    let url = AUTHORIZE;
    url += "?client_id=" + clientId;
    url += "&response_type=code";
    // url += "&redirect_uri=" + encodeURI('http://localhost:3000');
    url += "&redirect_uri=" + encodeURI(redirectUri);
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    return url;
}


exports.fetchAccessToken = async function (code) {
    let body = "grant_type=authorization_code";
    body += "&code=" + code; 
    body += "&redirect_uri=" + encodeURI('http://localhost:3000/');
    body += "&client_id=" + clientId;
    body += "&client_secret=" + clientSecret;
    
    var responseToken = await callAuthorizationApi(body);
        output = {
            accessToken:responseToken.data.access_token,
            refreshToken:responseToken.data.refresh_token,
        };
    return output;
}



exports.refreshAccessToken = function () {
    refresh_token = localStorage.getItem("refresh_token");
    let body = "grant_type=refresh_token";
    body += "&refresh_token=" + refresh_token;
    body += "&client_id=" + client_id;
    callAuthorizationApi(body);
}


async function callAuthorizationApi(body) {
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    res = await axios.post(TOKEN, body, { headers: headers });
    return res;

}





