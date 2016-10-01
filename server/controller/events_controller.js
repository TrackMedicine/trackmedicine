'use strict';

let Event = require('../model/event')

class Events {
	constructor() {
		this.events = new Array()
	}

	getEvents() {return this.events}

	push(event) {
		let newEvent = new Event(event.name, event.data)
		this.events.push(newEvent)
		return this.events
	}

	
}

module.exports = Events;