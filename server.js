console.log('worked');
var mongo = require('mongodb').MongoClient;
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
http.listen(3000, function(){
  console.log('listening on *:3000');
});
//	socket = require('socket.io').listen(8080).sockets;
	mongo.connect('mongodb://127.0.0.1/chat',function(err,db){
		if(err)throw err;
		io.on('connection', function(){
			var col = db.collection('messages');
	console.log('someone has connected');
	//wait for input
	io.on('input', function(data){
		var name=data.name,
			message = data.message;
			whilespacePattern=/^\s*$/;
			if(whilespacePattern.test(name) || whilespacePattern.test(message)){
				console.log('invalid');
			}
			else
			{
				col.insert({name:name, message:message}, function(){
				console.log('inserted');
			});
			}
			

	});
	
	});

});	
		