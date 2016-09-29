var  assert = require('chai').'assert'
var Event = require('../../../server/model/event')
var EventsController = require('../../../server/controller/events_controller')

describe('Events', () => {

    it('has only one event', () => {
     	
     	const event = new Event('event type', {})
     	let events = new EventsController()

    	let result = events.push(event)

      assert.equal(result.length, 1);
    })
})