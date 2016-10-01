'use strict';

let read = require('read-file')
let file_mqtt = 'config/mqtt_env'
let file_mongo = 'config/mongoose_env'
let app = require('express')()

module.exports = {
	server: {
		port: process.env.PORT || 3000
	},
	mqtt: {
		credential: process.env.CLOUDMQTT_URL || read.sync(file_mqtt, 'utf8')
	},
	mongo: {
		uri: process.env.PROD_MONGODB || read.sync(file_mongo, 'utf8')
	},
	express:{
		app: app
	}
};