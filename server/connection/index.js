let socket = require('socket.io')
let mqtt = require('mqtt')
let configserver = require('config').server
const TEMPERATURE = 'temperature'
const EMIT_NAME = 'mqtt'


exports.mqtt = credential => {
 	mqttclient = mqtt.connect(credential)

 	mqttclient.on('connect', () => {
 		console.log('Mqtt connected')
 	})
 	return mqttclient
}

exports.subscribe = (mqttclient, topic = TEMPERATURE) => {
 	mqttclient.on('connect', () => {
 		mqttclient.subscribe(topic)
  })
}

exports.read_msg = (mqttclient, io, topic, msg) => {
	mqttclient.on('message', topic, msg => {
    	io.sockets.emit(topic, msg.toString())
	})
}

exports.socket = (http) => {
	io = socket.listen(http, configserver)
	io.sockets.on('connection', socket => {
		console.log('socket connected')
	})
	return io
}

exports.emit_start = (io, name = EMIT_NAME) => {
	io.sockets.on('connection', socket => {
		socket.emit(name, '')
	})
}

exports.mongodb = uri => {
	require('mongoose').connect(uri)
}
