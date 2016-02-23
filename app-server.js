var express = require('express');
var app = express();
var _   = require('underscore')

var connections     = [];
var title           = "Untitled Presentation";
var audience        = [];
var speaker         = {};
var questions       = require('./app-questions');
var currentQuestion = false;


app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);


io.sockets.on('connection', function(socket){

  socket.once('disconnect', function(){
    var member = _.findWhere(audience, {id: this.id});

    if(member){
      audience.splice(audience.indexOf(member), 1);
      io.sockets.emit('audience', audience);
      console.log("Left: ", member.name, audience.length);
    } else if(this.id === speaker.id){
      console.log("%s has left. '%s' presentation is over", speaker.name, title);
      speaker = {};
      title = "Untitled presentation";
      io.sockets.emit('end', {title : title, speaker : ''});
    }

    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log("disconnected:   sockets remaining", connections.length);
  });

  socket.on('join', function(payload){
      var newMember = {
        id: this.id,
        name: payload.name,
        type: 'audience'
      };

      this.emit('joined',  newMember);
      audience.push(newMember);
      io.sockets.emit('audience', audience);
      console.log("Audience Joined as ", payload.name);
  });

  socket.on('start', function(payload){
    speaker.name = payload.name;
    speaker.id   = this.id;
    speaker.type = 'speaker';
    title        = payload.title;
    this.emit('joined', speaker);
    io.sockets.emit('start',{title: title, speaker:speaker.name});
    console.log("Presentation started: ", title, speaker.name);
  });

  socket.on('ask', function(question){
    currentQuestion = question;
    io.sockets.emit('ask', currentQuestion);
    console.log("question Asked: '%s'", question.q);
  });

  socket.emit('welcome', {
    title: title,
    audience: audience,
    speaker : speaker.name,
    questions: questions,
    currentQuestion: currentQuestion
  });

  connections.push(socket);
  console.log("connection: number of sockets connected", connections.length);
});

console.log("server running on local host 3000");
