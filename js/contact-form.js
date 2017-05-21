define(['jquery'], function() {

    function validateEmail(email) {
        var pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        return $.trim(email).match(pattern) ? true : false;
    }

    function check(input) {
        return (input != '') ? true : false;
    }

    var errors = [];
    var data = {};

    var output = "";


    $('#contact').on('submit', function(ev) {

        var email = $('#email').val();
        var fullname = $('#fullname').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        if (!validateEmail(email)) {
            errors.push('Email is not valid')
        }

        if (!check(fullname) && !check(message) && !check(subject) && !check(email)) {
            errors.push('You must provide a fullname');
            errors.push('You must provide a message');
            errors.push('You must provide a subject to the messager');
            errors.push('Email field is empty')
        }

        data = { 'email': email, 'fullname': fullname, 'subject': subject, 'message': message }

        if (errors.length == 0) {

            console.log('no errors');
            console.log(data);

        } else {
            output += "<ul class='list-group red'>";
            for (var i = 0; i < errors.length; i++) {
                output += "<li class='list-group-item'>" + errors[i] + "</li>"
            }
            output += "</ul>";
            $('.errors').append(output);
        }

        ev.preventDefault();
    });

})