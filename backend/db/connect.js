
const mongoose = require('mongoose');

const DEFAULT_CONNECTION_STRING = "mongodb+srv://smaltadmin:AG47gX6WIP3YUaB2@cluster0.knzot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
;

/**
 * This function begins the process of connecting to the database, and returns a promise that will
 * resolve when the connection is established.
 */
exports.connectToDatabase =  function (connectionString = DEFAULT_CONNECTION_STRING) {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true
    });
}