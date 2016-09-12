var read = require('read-file')
var file = 'config/.env'

module.exports = {
	server: {
		port: process.env.PORT || 3000
	},
	mqtt: {
		credential: process.env.CLOUDMQTT_URL || read.sync(file, 'utf8')
	}
};