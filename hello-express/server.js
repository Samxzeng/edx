
var express = require('express');//create a ref to the express module
var app = express(); // use the express function to create an express object
var port =3000;
app.listen(port, function(){
    console.log('express is listening on port ' + port)
})

app.get('/', function(req,res){
    res.send('Hello express')
    console.log('it works')
})
