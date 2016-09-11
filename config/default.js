var read = require('read-file')

module.exports = {
	server: {
		port: process.env.PORT || 3000
	},
	mqtt: {
		credential: read.sync('config/.env', 'utf8')
	}
};