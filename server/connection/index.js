let socket = require('socket.io')
let mqtt = require('mqtt')
let mongoose =require('mongoose')
let configserver = require('config').server
const EVENTS = 'events'
const MQTT = 'mqtt'
const EMIT_NAME = 'mqtt'


exports.mqtt = credential => {
 	mqttclient = mqtt.connect(credential)

 	mqttclient.on('connect', () => {
 		console.log('Mqtt connected')
 	})
 	return mqttclient
}

exports.subscribe = (mqttclient, topic = EVENTS) => {
 	mqttclient.on('connect', () => {
 		mqttclient.subscribe(topic)
  })
}

//TODO: Extract to object => mqttclient, io, topic, msg
exports.read_msg = (mqttclient, io) => {
	mqttclient.on('message', (topic, msg) => {
    	io.sockets.emit(MQTT, msg.toString())
	})
}

exports.socket = (http) => {
	io = socket.listen(http, configserver)
	io.sockets.on('connection', socket => {
		console.log('socket connected')
	})
	return io
}

exports.emit_start = (io) => {
	io.sockets.on('connection', socket => {
		console.log('Started emit')
		socket.emit(EMIT_NAME, '')
	})
}

exports.mongoose = uri => {
	mongoose.connect(uri)
}
