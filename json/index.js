const http = require('http')

function onRequest (request,response){
    response.writeHead(200, {
        'Content-Type':'application/json'
    })
    response.write(JSON.stringify({
        name : "carolina",
        email : "carolinacantik@gmail.com",
        phone : "63693242987",
        age : "27",
        sex : "female",
        code : 2000
    }))

    response.end()
}

http.createServer(onRequest).listen(8000)

console.log("server is running")