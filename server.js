console.log('worked');
var mongo = require('mongodb').MongoClient,
	express = require('express'),
	app = express().use(express.static(__dirname)),
	http = require('http').Server(app),
	io = require('socket.io')(http);

http.listen(3000, function(){
  console.log('listening on *:3000');
});
//	socket = require('socket.io').listen(8080).sockets;
	mongo.connect('mongodb://127.0.0.1/chat',function(err,db){
		if(err)throw err;
		io.on('connection', function(socket){
			var col = db.collection('messages'),
				sendStatus = function(s){
					socket.emit('status', s);
				};
				col.find().limit(50).sort({_id:1}).toArray(function(err,res){
					if(err) throw err;
					socket.emit('output',res);
				});	
			console.log('someone has connected');
			//wait for input
			socket.on('input', function(data){
				console.log('m inside on method')
				console.log(data)
				var name=data.name,
					message = data.message;
					whilespacePattern=/^\s*$/;
					if(whilespacePattern.test(name) || whilespacePattern.test(message)){
						sendStatus('Name and message required.');
					}
					else
					{
						col.insert({name:name, message:message}, function(){
					//	console.log('inserted');
						socket.emit('output',[data]);
						sendStatus({message:"Message sent",clear:true});
					});
						//event.preventDefault();
					}
					

			});
	
		});

});	
		