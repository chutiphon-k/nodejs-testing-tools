import SocketIO from 'socket.io-client'

const io = SocketIO('http://localhost:9090')

io.on('timer', (response) => {
	console.log('-------------------TIMER-----------------------------------')	
	console.log(response)
})

io.on('competitions', (response) => {
	console.log('-------------------COMPETITIONS-----------------------------------')	
	console.log(response)
})

// setInterval(() => {
// 	io.emit('b', 'Hello')
// }, 1000)
