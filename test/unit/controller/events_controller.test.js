var  assert = require('chai').assert
var Event = require('../../../server/model/event')
var EventsController = require('../../../server/controller/events_controller')

describe('Events', function() {

    it('has only one event', function() {
     	
     	const event = new Event('event type', {})
     	var events = new EventsController()

    	var result = events.push(event)

      assert.equal(result.length, 1);
    })
})