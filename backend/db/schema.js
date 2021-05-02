import mongoose from 'mongoose';
import { mainModule } from 'node:process';
const Schema = mongoose.Schema;

//This schema represents all the users, playlists and host in a room database
const roomSchema = new Schema({
    //user subdocument
    user: {
        userName: { type: String, unique: true, required: true}
    },

    //host subdocument
    host: {
        userName: { type: String, unique: true, required: true},
        oAuthToken: { type: String, required: true}
    },

    //playlist subdocument
    playlist: {
        currentSong: { type: Schema.Types.ObjectId},

        //songs nested subdocument. This array syntax means we can have multiple songs in a given playlist
        songs: [{
            upVoteCount: { type: Number}, 
            name: { type: String, required: true},
            imageURL: { type: String, required: true},
            artistNames: [{ type: String, required: true}],
            songDuration: { type: Number, required: true}  //in milliseconds
        }]
    }
}, {
    timestamps: {}
    /* This object allows us to specify more config info. In this case, we're enabling automatic timestamps 
    using the default options. */ 
});

//Actually create's the Room Schema
export const Room = mongoose.model('Room', roomSchema);


