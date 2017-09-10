$(document).ready(onReady);

function onReady() {
    $('#addButton').on('click', addPeeps);
    //show people array on page load
    showPeeps();
} //END onReady function 

//function that send people objects to server route
function addPeeps() {
    //create new object from user input
    var person = {
        name: $('#name').val(),
        fact: $('#fact').val()
    } //END person  
    //send object to server route
    $.ajax({
        method: 'POST',
        url: '/person',
        data: person,
        success: function (resp) {
        } //END success
    }) //END ajax post
    //CALL showPeeps on click
    showPeeps();
    //clear input fields
    $('#name').val('');
    $('#fact').val('');
} //END addPeeps function

// function that gets people array from route and appends to DOM
function showPeeps() {
    var all = 0;
    var spot = 0;
    $.ajax({
        method: 'GET',
        url: '/person',
        success: function (resp) {
            //reset people list
            $('#peopleList').empty();
            //loop though people. Append name and fact
            for (i = 0; i < resp.length; i++) {
                var all = resp.length;
                var spot = i
                $('#peopleList').append('<p class="peep">' + resp[i].name + ': ' + resp[i].fact + '</p>');
                $('#slideShow').append('<script>allPeeps = w3.slideshow(".peep", 0);</script >');
            } //END for loop

        } //END success function
    }) //END ajax get
} //END showPeeps function
