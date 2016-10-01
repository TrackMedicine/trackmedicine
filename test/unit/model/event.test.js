'use strict';

var assert = require('chai').assert
var Event = require('../../../server/model/event')

describe('Event', function() {

  it('holds the given data', function() {
  	const name = 'event type'
  	const data = {some: 'data', here: 'too'}
  	const timestamp = Date.now

  	var event = new Event(name, data, timestamp)

  	assert.deepEqual(event.name, name)
  	assert.deepEqual(event.data, data)
  	assert.deepEqual(event.timestamp, timestamp)
  })
})