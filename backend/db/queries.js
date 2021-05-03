

const mongoose = require('mongoose');

var Room = require('./schema.js');


exports.createNewRoom = function (token, hostName) {
  // await mongoose.connect(connectionString, {
  //   useNewUrlParser: true
  // });
  console.log("Room =")
  console.log(Room); //mongoose.
  codee = makeCode(6);
  const room = new Room({
    host: {
      userName: hostName,
      oAuthToken: token
    },
    code: codee,
    playlist:{
      songs:[]
    }

  });

  addData(room);
  console.log(codee);
  return codee
};

exports.addSongToPool = async function (roomId, song) {
  room = await getRoomById(roomId);
  // Room.update(
  //   {_id: room._id/* doc id */},
  //   {$push: {'playlist.song': { /* your subdoc */ song}}}
  // );
  room.playlist.songs.push(song);
  room.save();
}

exports.clearDB = async function(){
    const roomsGone = await Room.deleteMany({});
    console.log(`Cleared database (removed ${roomsGone.deletedCount} rooms).`);
}

async function addData(room) {

  const result = await room.save();
  console.log(`Added object(s) to the database.`);
  console.log(` - ${result.host} (${result.code})`);
}


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

async function getRoomById(roomId){
  const xd = await Room.findOne({ code: roomId });
  //const xd = await Room.find().populate('host');

  console.log(`id: ${xd._id}`);
  return xd;
}