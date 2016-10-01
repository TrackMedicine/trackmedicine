let http = require('./http')
let mqtt = require('./mqtt')
let mongo = require('./mongo')
let socket = require('./socket')

exports.start = () => {
	http.listen()
	mqtt.start()
	mongo.start()
	socket.start()
}

