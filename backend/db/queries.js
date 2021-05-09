const Host = require("./hostSchema.js");
var Room = require("./roomSchema.js");


exports.createNewHost = async function(tokens, hostName){
  console.log(hostName);
var host =await new Host();

host.host.userName = hostName;
host.host.tokens = tokens;
console.log(host);
await addData(host);
return host._id;
}

exports.addRoomtoHost = async function(hostName,room_id){
  const host = await Host.findOne({userName : hostName});
  host.room.push(room_id);

}
exports.createNewRoom = async function (host_id) {
  codee = makeCode(6);
  console.log(host_id);
  const room = new Room({

    code: codee,
    playlist: {
      songs: [],
    },
  });
  room.host = host_id;
  await addData(room);
  const host = await Host.findOne({_id : host_id});
  console.log(host);
  ans = await host.host.rooms.push(room._id);
  console.log(ans);
  host.save();

  return codee;
};

exports.addSongToPool = async function (song, roomId) {
  room = await this.getRoomById(roomId);
  console.log(song);
  room.playlist.songs.push(song);

  return await room.save(function (err, doc) {
    if (err) return false;
    return true;
  });
};

exports.refreshTokens = async function (newToken, roomId) {
  const room = await Room.findOne({ code: roomId });
  const host = await Host.findOne({_id: room.host._id})
  console.log(room);
  console.log(newToken);
  host.host.tokens.accessToken = newToken;
  host.save();
  console.log("tokens updated");
  console.log(await this.getAccessToken(roomId));
};

exports.addUserToRoom = async function (user, roomId) {
  room = await this.getRoomById(roomId);
  room.users.push(user);
  room.save();
};

exports.clearDB = async function () {
  const roomsGone = await Room.deleteMany({});
  const hostsGone = await Host.deleteMany({});
  console.log(`Cleared database (removed ${roomsGone.deletedCount} rooms, ${hostsGone.deletedCount} hosts).`);
};

async function addData(room) {
  const result = await room.save();
  console.log(`Added room to the database.`);
}

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

exports.getAllSongs = async function (room) {
  songs = await Room.findOne({ code: room }).select("playlist.songs -_id");
  return songs.playlist;
};

exports.roomDoesExist = async function (roomCode) {
  truth = Room.exists({ code: roomCode });
  return truth;
};

exports.getAccessToken = async function (roomId) {
  console.log(`room id: ${roomId}`)
  const room = await Room.findOne({ code: roomId }).populate("host");
  return room.host.host.tokens.accessToken;
};



exports.getRoomById = async function (roomId) {
  const room = await Room.findOne({ code: roomId });
  return room;
};

exports.addLikeToSong = async function (roomId, songId) {
  Room.findOneAndUpdate(
    { code: roomId, "playlist.songs.id": songId },
    {
      $inc: {
        "playlist.songs.$.upVoteCount": 1,
      },
    },
    function (err, doc) {
      console.log(err);
      console.log(doc);
    }
  );
};

exports.removeLikeFromSong = async function (roomId, songId) {
  Room.findOneAndUpdate(
    { code: roomId, "playlist.songs.id": songId },
    {
      $inc: {
        "playlist.songs.$.upVoteCount": -1,
      },
    },
    function (err, doc) {
      console.log(err);
      console.log(doc);
    }
  );
};
