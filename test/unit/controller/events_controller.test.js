let  assert = require('chai').assert
let Event = require('../../../server/model/event')
let EventsController = require('../../../server/controller/events_controller')

describe('Events', function() {

    it('has only one event', function() {
     	
     	const event = new Event('event type', {})
     	 events = new EventsController()

    	let result = events.push(event)

      assert.equal(result.length, 1);
    })
})