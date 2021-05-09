const { Server } = require("socket.io");
const query = require("../db/queries");
let io;

exports.init = function (server) {
  console.log("init called");
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });


  io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);
    socket.emit("WhichRoom", "idk");

    socket.on("SpecifyRoom", async (ans) => {
      console.log(`ans: ${ans.room}`);
      socket.join(ans.room);
      socket.emit("initPlaylist", await query.getAllSongs(ans.room));
    });

    socket.on("addSong", (song) => {
      console.log(song);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

exports.broadcastNewSong = function (room, song) {
  io.in(room).emit("newSong", song);
  console.log(`new song broadcasted to: ${room}`);
};

exports.broadcastSongUpdated = function (room, song) {
  io.in(room).emit("songUpdated", song);
  console.log(`updated song broadcasted to: ${room}`);
};
