var io
var mqttclient

exports.mqtt = function (credential,http){
	mqttclient = require('mqtt').connect(credential)
	topic = 'temperature'

	//Begin TODO:Spike works, next step: Create test, extract logic
	mqttclient.on('connect', function () {
 		mqttclient.subscribe(topic)
  	});

	io = require('socket.io').listen(http, require('config').server);
	io.sockets.on('connection', function (socket) {
		io.sockets.emit('mqtt', '');
	});

	mqttclient.on('message', function(topic,message) {
    	io.sockets.emit('mqtt', message.toString());
	});
	//End
}

exports.mongodb = function(uri) {
	var db = require('mongoose').connect(uri);
	db.on('error', console.error.bind(console, 'connection error:'));	
}
