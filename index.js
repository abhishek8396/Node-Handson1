const http = require("http")
const server = http.createServer((req, res)=>{
    if(req.url==="/"){
        res.write("<h1>Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).</h1>")
        res.end();
    }
    else if(req.url==='/home'){
        res.write("Hello Home")
        res.end();
    }
})

server.listen(3002);