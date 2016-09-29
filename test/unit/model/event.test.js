'use strict';

let assert = require('chai').assert
let Event = require('../../../server/model/event')

describe('Event', function() {

  it('holds the given data', function() {
  	const name = 'event type'
  	const data = {some: 'data', here: 'too'}

  	let event = new Event(name, data)

  	assert.deepEqual(event.name, 'event type')
  	assert.deepEqual(event.data, {some: 'data', here: 'too'})
  })
})