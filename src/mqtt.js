import mqtt from 'mqtt'

const options = {
	'host': 'localhost',
	'port': 1883
}

const topicSub = '/TIMINGGATE'
const topibPub = '/TIMINGGATE/TRACKING'

let	client = mqtt.connect(options)

client.on('connect', () => {
	client.subscribe(topicSub)
})

client.on('message', (topic, payload) => {
	let msg = payload.toString()
	console.log(msg)
})

client.publish(topibPub, '1000')
client.publish(topibPub, '2500')
client.publish(topibPub, '4200')
