var express = require('express');
var router = express.Router();
const axios = require('axios');
const btoa = require('btoa')

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
// exports.createAuthRequest = function (redirectUri){

//     const payload = {
//     params : {client_id : clientId,
//         response_type : "code",
//         redirect_uri : redirectUri, 
//         show_dialog : "true",
//         scope : "user-read-private \
//                 user-read-email \
//                 user-modify-playback-state \
//                 user-read-playback-position \
//                 user-library-read \
//                 streaming \
//                 user-read-playback-state \
//                 user-read-recently-played \
//                 playlist-read-private"}}
//      axios.get(AUTHORIZE,payload);
// }
exports.requestToken = function (redirectUri, authCode) {
    let url = TOKEN;
    url += "?client_id=" + clientId;
    url += "&response_type=code";
    url += "&code=" + authCode;
    // url += "&redirect_uri=" + encodeURI('http://localhost:3000');
    url += "&redirect_uri=" + encodeURI(redirectUri);
}

exports.fetchAccessToken = function (code) {
    let body = "grant_type=authorization_code";
    body += "&code=" + code; 
    body += "&redirect_uri=" + encodeURI('http://localhost:3000/');
    body += "&client_id=" + clientId;
    body += "&client_secret=" + clientSecret;
    //var body = makeBody(code);
    callAuthorizationApi(body);
}

function makeBody(authCode) {
    var body = {
        grant_type: " authorization_code",
        code: authCode,
        redirect_Uri: encodeURI('http://localhost:3000/'),
        client_id: clientId,
        client_secret: clientSecret,
    }
    return body;
}

exports.refreshAccessToken = function () {
    refresh_token = localStorage.getItem("refresh_token");
    let body = "grant_type=refresh_token";
    body += "&refresh_token=" + refresh_token;
    body += "&client_id=" + client_id;
    callAuthorizationApi(body);
}

// function callAuthorizationApi(body){
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", TOKEN, true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(client_id + ":" + client_secret));
//     xhr.send(body);
//     xhr.onload = handleAuthorizationResponse;
// }
async function callAuthorizationApi(body) {
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    console.log(btoa(clientId + ":" + clientSecret));
    axios.post(TOKEN, body, { headers: headers }).then(res => {
        console.log(res);
    })
        .catch(err => {
            if (err.response) {
                console.log(err.response);
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log("else");
            }
        })
}

function handleAuthorizationResponse() {
    if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
        var data = JSON.parse(this.responseText);
        if (data.access_token != undefined) {
            access_token = data.access_token;
            localStorage.setItem("access_token", access_token);
        }
        if (data.refresh_token != undefined) {
            refresh_token = data.refresh_token;
            localStorage.setItem("refresh_token", refresh_token);
        }
        onPageLoad();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}



