const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 3000 })

server.on('connection', (connect) => {
    connect.on('message', (message) => {
        console.log(message.toString());

        if (message.toString() === 'exit')
            ws.close()

        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN)
                client.send(message.toString())
        })

    })

})