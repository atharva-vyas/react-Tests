const express = require('express');
const http = require('http');
const app = express()


const server = http.createServer(app)
const io = require('socket.io')(server, { cors: { origin: "*", methods: ['GET', 'POST'] }})

io.on("connection", (socket) => {
    // sends the unique connection id to the client
    socket.emit("getID", socket.id)


    socket.on('newMessage', (data) => {
        console.log(data);

        io.to(data.uid).emit("response", {response: 'message received!'})
    })
})


server.listen(5000, () => {{
    console.log('on 5000');
}}) 