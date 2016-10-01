let mqttclient
let Event = require('../../model/Event')
const TEMPERATURE = 'temperature'

exports.subscribe = (topic = TEMPERATURE) => {
	mqttclient.on('connect', () => {
 		mqttclient.subscribe(topic)
  })
}

exports.publish = (topic, message) => {
	mqttclient.on('connect', () => {
 		mqttclient.publish(topic, message)
  })
}

exports.readMsg = (io) => {
	let event
	mqttclient.on('message',(topic, msg) => 
		event = new Event(topic,msg))
  return event  
}

function _mqtt() {
	let credential = require('config').mqtt.credential
	let mqtt = require('mqtt')

 	mqttclient = mqtt.connect(credential)
 	mqttclient.on('connect', () => {
 		console.log('Mqtt connected')
 	})
}

exports.mqttclient = mqttclient

exports.start = () => {
	_mqtt()
}

