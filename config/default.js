var read = require('read-file')
var file_mqtt = 'config/mqtt_env'
var file_mongo = 'config/mongoose_env'

module.exports = {
	server: {
		port: process.env.PORT || 3000
	},
	mqtt: {
		credential: process.env.CLOUDMQTT_URL || read.sync(file_mqtt, 'utf8')
	},
	mongodb: {
		uri: process.env.PROD_MONGODB || read.sync(file_mongo, 'utf8')
	}
};