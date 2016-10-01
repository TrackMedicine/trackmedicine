'use strict'

class Event {
	constructor(eventName, data, timestamp) {
		this.name = eventName
		this.data = data
		this.timestamp = timestamp
	}

	name() {this.name}
	data() {this.data}
	timestamp() {this.timestamp}
}

module.exports = Event;