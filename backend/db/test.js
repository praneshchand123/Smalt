
const mongoose = require("mongoose");
const query = require('./queries');
const connect = require('./connect');

const connectionString = "mongodb+srv://smaltadmin:AG47gX6WIP3YUaB2@cluster0.knzot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

connect.connectToDatabase();

console.log('connection success');
query.clearDB();
var code = query.createNewRoom(makeCode(3), makeCode(4));
var testSong = {
  name:"the wheels on the bus",
  imageURL:"irefuse",
  artistNames:"no",
  songDuration:10
}
query.addSongToPool(code,testSong);

function makeCode(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * 
charactersLength)));
 }
 return result.join('');
}
