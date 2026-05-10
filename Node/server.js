const http = require('http');

http.createServer(function(req,res){

    res.write("Welcome to Node JS");
    res.end();

}).listen(3000);

console.log("Server Running");
console.log("http://localhost:3000");