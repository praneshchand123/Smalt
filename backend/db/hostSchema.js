const mongoose = require("mongoose");

const Schema = mongoose.Schema; //This schema represents all the users, playlists and host in a room database
const hostSchema = new Schema({
  host: {
    userName: {
      type: String,
      required: true,
    },

    tokens: {
      accessToken: {
        type: String,
        required: true,
      },
      refreshToken: {
        type: String,
        required: true,
      },
    },

    rooms:[
         {type: Schema.Types.ObjectId, ref: 'Room' }
    ]
  }
})

module.exports = mongoose.model("Host", hostSchema);