var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name:  String,
  timestamp: Date,
  data: {}
});