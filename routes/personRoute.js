//requires
var router = require('express').Router();
var path = require('path');

//global array to store person objects
var people = [];


router.get('/', function(req, res){
    console.log('in person router');
    res.send(people);
})//END router get

router.post('/', function (req, res){
    var person = req.body;
    people.push(person);
    console.log('people array:', people);
    
})//END router post

module.exports = router