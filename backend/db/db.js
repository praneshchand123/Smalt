import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    //user subdocument
    user: {userName: String},

    //host subdocument
    host: {userName: String},

    //playlist subdocument
    playlist: {
        queueNumber: Number, 
        currentSong: TYPEREQUIRED,
        songDuration: Number, //in milliseconds

        //songs nested subdocument
        songs: [{noOfUpVote: String, spotifyAPIData: TYPEREQUIRED}]
    }
}, {
    timestamps: {}
});

