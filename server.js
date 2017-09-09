//Requires and globals
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var route = require('./routes/personRoute.js')
var app = express();
var port = 3000;


//middleware 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Route
//app.use('/people', route);

//server listening
app.listen(port, function(){
    console.log('listening on port 3000');
})//END listen

//Base URL 
app.get('/', function(req, res){
    res.sendFile(path.resolve('public/views/index.html'));
})//END get base URL
