var debug = require('debug')('backend2:server');
var http = require('http');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var connect = require('./db/connect');
var routes = require('./routes');
var usersRouter = require('./routes/users');
const socketMgr = require('./Sockets/socketMgr');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
//app.use('/', indexRouter);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log(`connectiontodb:${connect.connectToDatabase()}`);

/**
 * Get port from environment and store in Express.
 */

 var port = normalizePort(process.env.PORT || '3001');
 app.set('port', port);
 
 /**
  * Create HTTP server.
  */
 
 var server = http.createServer(app);
 
 
 /**
  * open sockets
  */
 
 socketMgr.init(server);
 
//  var song1 = {
//   src: "data:image/jpeg;base64,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",
//   name: "song from server",
//   artist: "artist"
// }
// var song2 = {
//   src: "data:image/jpeg;base64,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",
//   name: "oh no",
//   artist: "artist"
// }
//  //test
// socketMgr.broadcastNewSong("rightRoom",song1);
// socketMgr.broadcastNewSong("wrongroom",song2);

 /**
  * Generate spotify key.
  */
 
  //var spotifyKey = Spotify.genNewKey();
 
 
 /**
  * Listen on provided port, on all network interfaces.
  */
 
 server.listen(port);
 server.on('error', onError);
 server.on('listening', onListening);
 
 /**
  * Normalize a port into a number, string, or false.
  */
 
 function normalizePort(val) {
   var port = parseInt(val, 10);
 
   if (isNaN(port)) {
     // named pipe
     return val;
   }
 
   if (port >= 0) {
     // port number
     return port;
   }
 
   return false;
 }
 
 /**
  * Event listener for HTTP server "error" event.
  */
 
 function onError(error) {
   if (error.syscall !== 'listen') {
     throw error;
   }
 
   var bind = typeof port === 'string'
     ? 'Pipe ' + port
     : 'Port ' + port;
 
   // handle specific listen errors with friendly messages
   switch (error.code) {
     case 'EACCES':
       console.error(bind + ' requires elevated privileges');
       process.exit(1);
       break;
     case 'EADDRINUSE':
       console.error(bind + ' is already in use');
       process.exit(1);
       break;
     default:
       throw error;
   }
 }
 
 /**
  * Event listener for HTTP server "listening" event.
  */
 
 function onListening() {
   var addr = server.address();
   var bind = typeof addr === 'string'
     ? 'pipe ' + addr
     : 'port ' + addr.port;
   debug('Listening on ' + bind);
 }

module.exports = app;
