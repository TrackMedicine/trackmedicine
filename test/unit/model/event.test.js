let assert = require ('assert')
let Event = require ('../../../server/model/event')


describe('Event', () => {

  it('holds the given data', () => {
  	const name = 'event type'
  	const data = {some: 'data', here: 'too'}

  	let event = new Event(name, data)

  	assert.deepEqual(event.name, 'event type')
  	assert.deepEqual(event.data, {some: 'data', here: 'too'})
  })
})