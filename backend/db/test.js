
const mongoose = require("mongoose");
const query = require('./queries');
const connect = require('./connect');

const connectionString = "mongodb+srv://smaltadmin:AG47gX6WIP3YUaB2@cluster0.knzot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

connect.connectToDatabase();
console.log('connection success');
query.createNewRoom("abcdefgh", "jack chen");