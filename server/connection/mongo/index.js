let mongoclient

function _mongo() {
  let uri = require('config').mongo.uri
  let mongoose =require('mongoose')

	mongoose.connect(uri)
	mongoclient = mongoose.connection
		mongoclient.on('error', console.error.bind(console, 'connection error:'))
		mongoclient.once('open', function() {
  		console.log('Mongo connected')
		})
}

exports.mongoclient = mongoclient

exports.start = () => {
	_mongo()
}
