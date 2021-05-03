

const mongoose = require('mongoose');

var Room = require('./schema.js');


exports.createNewRoom = async function (token, hostName) {
  // await mongoose.connect(connectionString, {
  //   useNewUrlParser: true
  // });
  console.log("Room =")
  console.log(Room); //mongoose.

  const room = new Room({
    host: {
      username: hostName,
      oAuthToken: token
    },
    code: "hehexdlmao"
  });

  addData(room);
  

};
async function addData(room) {

  // More efficient than adding one-by-one.
  const result = await Room.insertOne(room);
  console.log(`Added ${result.length} object(s) to the database.`);
  for (let todo of result) {
      console.log(` - ${todo.host} (${todo.code})`);
  }
}