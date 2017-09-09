$(document).ready(onReady);


function onReady () {
    $('#addButton').on('click', addPeeps);
}//END onReady function 

//function that adds people to array in route
function addPeeps () {
    console.log('clicked');
    //create new object
    var person = { 
        name: $('#name').val(), 
        fact: $('#fact').val()
    }//END person 
        console.log(person)  
        //send object to server route
    $.ajax({
        method: 'POST',
        url: '/person',
        data: person,
        success: function(resp) {
            console.log('response:', resp)
        }//END success
    })//END ajax post
    showPeeps();
}//END addPeeps function

function showPeeps (){
    $.ajax({
        method: 'GET',
        url: '/person',
        success: function (resp) {
            $('#peopleList').empty();
            for(i = 0; i <resp.length; i++) {
                $('#peopleList').append('<p>'+resp[i].name+': '+resp[i].fact+'</p>');

            }//END for loop
        }//END success function
    })//END ajax get

}//END showPeeps function 