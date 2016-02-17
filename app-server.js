var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);


io.sockets.on('connection', function(socket){
  console.log("connection: ", socket.id);
});

console.log("server running on local host 3000");
