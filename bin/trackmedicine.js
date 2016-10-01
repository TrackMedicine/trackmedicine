let client = '../client'
let path = require('path')
let static = require('serve-static')
let app = require('config').express.app
let connection = require('../server/connection')


app.use('/', static(path.resolve(__dirname, client)))
connection.start()









