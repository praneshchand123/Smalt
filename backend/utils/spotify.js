//our spotify app keys
const clientId = '0a6cf31ec5bf4808831e58a7bb937cc7';
const clientSecret = '25b3362597014da293b32f9d99bca194';



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
const SEARCH = "https://api.spotify.com/v1/search";

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

exports.createSearchQuery = function (searchTerm) {
    let url = SEARCH;
    url += "?q=" + searchTerm;
    url += "&type=track&market=NZ&limit=4&offset=0";
    return url;
}


