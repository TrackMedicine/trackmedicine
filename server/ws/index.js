var io
var mqttclient

exports.mqtt_connection = function (credential){
	mqttclient = require('mqtt').connect(credential);
}

exports.ws_start = function (port){
	io = require('socket.io')(port);
	io.on('connection', function (socket) {
		//TODO: Extract mqtt subscribe
	  mqttclient.subscribe('temperature');
	});
}

