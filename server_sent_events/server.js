const http = require('http')



function sendData(req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
    })



    write()
    async function write() {

        const resp = await fetch('https://api.bitaps.com/market/v1/ticker/btcusd')
        const data = await resp.json()

        res.write(`data: ${JSON.stringify(data)} \n\n`)

        await write()
    }


}




http.createServer((req, res) => {

    if (req.url === '/') {
        sendData(req, res)
        return
    }

}).listen(8080)