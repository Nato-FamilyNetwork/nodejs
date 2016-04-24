var express = require('express');
var router = express.Router();
var http = require('http');


var port = process.env.PORT || 300;

var httpServer = http.createServer(function (req, res) {
 
 res.end("hello djiddou");
});
httpServer.listen(process.env.PORT || port);



var io = require('socket.io').listen(httpServer);

var users ={};
io.sockets.on('connection', function (socket) {
var me = false;
	console.log("new user");
	var me;

for(var k in users){

	socket.emit('newusers',users[k]);
}



  //   socket.emit('welcome', { message: 'Welcome!' });
  socket.on('login', function (user) {

  
     me=user;
     users[me.id]=me;
     date = new Date();
     me.h =date.getHours()+"h";
     me.m =date.getMinutes()+"min"; 
     io.sockets.emit('newusers',me);
     console.log(me.fid);
  });

  socket.on('disconnect',function(){
  	if(!me){
  		return false;
  	}
  	delete  users[me.id];
  	io.sockets.emit('disuser',me);
  })
	

});

module.exports = router;
