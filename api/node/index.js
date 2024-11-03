const http = require('node:http')

const server = http.createServer({}, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
        Id: 1,
        Username: 'Raziel Rodrigues',
        Data: 'Loading...'
    }))
})

server.listen(8082, "localhost")
console.log("Listening: localhost:8082")