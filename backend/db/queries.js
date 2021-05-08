var Room = require("./schema.js");

exports.createNewRoom = async function (token, hostName) {
  codee = makeCode(6);
  const room = new Room({
    host: {
      userName: hostName,
      Tokens: token,
    },
    code: codee,
    playlist: {
      songs: [],
    },
  });

  await addData(room);
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
  room = await this.getRoomById(roomId);

  room.host.Tokens.accessToken = newToken;
  room.save();
  console.log("tokens updated");
};

exports.addUserToRoom = async function (user, roomId) {
  room = await this.getRoomById(roomId);
  room.users.push(user);
  room.save();
};

exports.clearDB = async function () {
  const roomsGone = await Room.deleteMany({});
  console.log(`Cleared database (removed ${roomsGone.deletedCount} rooms).`);
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
  const host = await Room.findOne({ code: roomId }).select("host.Tokens -_id");
  return host;
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
