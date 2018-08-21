
console.log ('start server');
var http = require('http');
var port = 3000;
var requestHandler = function (req,res,abc){
    console.log('new request from ' + req.url);
    res.end('Hello world')
    console.log(typeof req)
    console.log(typeof res)
    console.log(typeof abc)
}
var server = http.createServer(requestHandler)
server.listen(port, function(){
    console.log('listening on port' + port)
})
