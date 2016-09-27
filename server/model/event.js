class Event {
	constructor(eventName, data) {
		this.name = eventName
		this.data = data
	}

	name() {this.name}
	data() {this.data}
}

module.exports = Event;