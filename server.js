var http = require("http");

var port = 3333;

function getHome(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });    //application/json
    res.write("<html><head><title>server</title></head><body><h2>Hi, there!</h2></body></html>");             
}

http.createServer(function (req, res) {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                getHome(req, res);
            }
            else if (req.url === "/data") {
                // getData();
            }
            break;
        case "POST":
            break;
        default:
            break;
    }
}).listen(port);

console.log("Server working at port: " + port);
