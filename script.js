$(document).ready(function(){
    $('#userform').submit(function(){
        console.log("serialize: "+$(this).serialize());
        // return false;
        event.preventDefault();
    
        $('.table').add(function(){
            var fname = $('input[type=text][name=firstname]').val();
            var lname = $('input[type=text][name=lastname]').val();
            var descr = $('input[type=text][name=description]').val();
           
            $('.tables').append(
                `<div class="table1">
                            <h2>`+fname+`</h2>
                            <h2>`+lname+`</h2>
                            <p class="des">`+descr+`</p>
                </div>`);
        })

        $("#userform input").val("");
    });
});