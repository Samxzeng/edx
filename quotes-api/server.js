
var express = require('express');//create a ref to the express module
var bodyParser=require('body-parser')//this is a retrieve the data from req.body message
var app = express(); // use the express function to create an express object
app.use(bodyParser.urlencoded({ extended: true }));//Use app.use() to tell your Express app to use body-parser as middleware for url-encoded form data (this is the data format we expect to receive from HTML forms)
//after use body-parser, we are able to access the key-value pairs of data that we passed in the request body for a POST request

var port =3000;
app.listen(port, function(){
    console.log('express is listening on port ' + port)
})
app.get('/',function(req, res){
    // res.send("hello expresss");
    res.send("listening"+req.url)
    console.log("listening"+req.url)
})

var quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    }
    ];  

//query string
app.get('/quotes',function(req,res){
    console.log('get a list of quote')
    //this is to add the req.query year, meaning the uri of /quote?year=1234
    if(req.query.year){
        for (let i = 0; i < quotes.length; i++) {
            console.log(quotes[i].year)
            if(req.query.year==quotes[i].year){
                res.send(quotes[i]);
                return 
                //when return is in use, it means send but stop here as you already have the results.
                //so return means a stop in the code execution. 
            }
        else{
            console.log('not match')
            }
        }
    } 
    else{
        res.send(quotes);   
    }
})

//name route parametera, use param
app.get('/quotes/:id',function (req,res){
    console.log("return quote with the ID: " + req.params.id);
    res.send("Return quote with the ID: " + req.params.id);
});

//post method
app.post('/quotes',function(req,res){
    console.log('insert a new post '+ req.body.quote)
    res.json(req.body.quote+" in "+req.body.year)
})
