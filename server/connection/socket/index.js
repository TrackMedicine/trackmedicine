let io
const MQTT = 'mqtt'
let http = require('../http').http

exports.emitMsg = () => {
	io.on('message', (topic = MQTT, msg) => {
    	io.emit(topic, msg.toString())
    	console.log(msg.toString)
	})
}

function _socket() {
	io = require('socket.io')(http)

	io.on('connection', (socket) => {
  	console.log(socket);
  	console.log('Socket connected');
	});
}

exports.socketclient = io
exports.emitName = MQTT

exports.start = () => {
	_socket()
}