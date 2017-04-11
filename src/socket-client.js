import SocketIO from 'socket.io-client'

const io = SocketIO('http://localhost:9090')

io.on('a', (response) => {
	console.log(response)
})

setInterval(() => {
	io.emit('b', 'Hello')
}, 1000)
