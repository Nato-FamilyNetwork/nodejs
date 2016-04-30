
module.exports = function(io) {

 var express = require('express');
 var router = express.Router();




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
     me.h =date.getHours()+1+"h";
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

 return router;
};
