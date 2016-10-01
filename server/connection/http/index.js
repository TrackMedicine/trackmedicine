let server = require('config').server
let app = require('config').express.app
let http = require('http').Server(app)

function _http() {
	http.listen(server.port, () => {
		console.log('Server listening at port %d', server.port)}) 
}

exports.http = http
exports.listen = _http