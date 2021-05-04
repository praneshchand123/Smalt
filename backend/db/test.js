const query = require("./queries");
const connect = require("./connect");

var testSong = {
  name: "the wheels on the bus",
  imageURL: "irefuse",
  artistNames: "no",
  songDuration: 10,
};

var testUser = {
  userName: makeCode(5),
};
const TESTCONNECTIONSTRING =
  "mongodb+srv://smaltadmin:AG47gX6WIP3YUaB2@cluster0.knzot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

if (connect.connectToDatabase(TESTCONNECTIONSTRING)) {
  console.log("connection success");
}
query.clearDB();
var roomCode = query.createNewRoom(makeCode(3), makeCode(4));

query.addSongToPool(testSong, roomCode);
query.addUserToRoom(testUser, roomCode);

function makeCode(length) {
  var result = [];
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}
