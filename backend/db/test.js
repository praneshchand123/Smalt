const query = require("./queries");
const connect = require("./connect");

main();

async function main() {

  var testSong = {
    name: "the wheels on the bus",
    imageURL: "irefuse",
    artistNames: "no",
    songDuration: 10,
    id: makeCode(10),
  };

  var testUser = {
    userName: makeCode(5),
  };

  const testToken = {
    accessToken: makeCode(5),
    refreshToken: makeCode(5),
  }

  const TESTCONNECTIONSTRING =
    "mongodb+srv://smaltadmin:AG47gX6WIP3YUaB2@cluster0.knzot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  if (connect.connectToDatabase(TESTCONNECTIONSTRING)) {
    console.log("connection success");
  }
  await query.clearDB();
  var roomCode = await query.createNewRoom(testToken, makeCode(4));

  await query.addSongToPool(testSong, roomCode);
  await query.addUserToRoom(testUser, roomCode);
  //await query.getRoomById(roomCode);
  console.log(`token: ${await query.getAccessToken(roomCode)}`);

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
}
