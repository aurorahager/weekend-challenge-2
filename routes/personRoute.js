//requires
var router = require('express').Router();
var path = require('path');

//global array to store person objects
var people = [];


router.get('/', function (req, res) {
    res.send(people);
}) //END router get

router.post('/', function (req, res) {
    var person = req.body;
    //add new person to people array
    people.push(person);
}) //END router post

module.exports = router