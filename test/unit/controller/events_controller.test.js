'use strict';

let assert = require('chai').assert
let Event = require('../../../server/model/event')
let EventsController = require('../../../server/controller/events_controller')

describe('Events', () => {

    it('has only one event', () => {
     	
     	const event = new Event('event type', {})
     	let events = new EventsController()

    	let result = events.push(event)

      assert.equal(result.length, 1);
    })
})