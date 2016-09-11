var io
var mqttclient

exports.mqtt_connection = function (mqtt_credential){
	mqttclient = require('mqtt').connect(mqtt_credential);
}

exports.ws_start = function (port){
	io = require('socket.io')(port);
	io.on('connection', function (socket) {
	  mqttclient.subscribe('temperature');
	});
}

