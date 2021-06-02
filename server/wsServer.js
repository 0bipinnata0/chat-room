const ws = require('nodejs-websocket')

let len = 0

const server = ws.createServer(function (conn) {
    len++
    console.log('len', len)
    console.log('new connection')
    conn.on("text", function (str) {
        console.log('Received ' + str)
        broadcast(str)
    })
    conn.on('close', function (code, reason) {
        console.log('connection closed')
    })
    conn.on('error', function (err) {
        console.dir('err', err)
    })
}).listen(3333)


function broadcast(str) {
    server.connections.forEach(conn => conn.sendText(str))
}
