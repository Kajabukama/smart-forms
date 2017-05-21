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

    var output = $('.errors');



    $('#contact').on('submit', function(ev) {

        var email = $('#email').val();
        var fullname = $('#fullname').val();
        var mobile = $('#mobile').val();
        var message = $('#message').val();

        if (!validateEmail(email)) {
            errors.push('Email is not valid')
        }

        if (!check(fullname) && !check(message) && !check(mobile) && !check(email)) {
            errors.push('You must provide a fullname');
            errors.push('You must provide a message');
            errors.push('You must provide a mobile phone number');
            errors.push('Email field is empty')
        }

        data = { 'email': email, 'fullname': fullname, 'mobile': mobile, 'message': message }

        if (errors.length == 0) {
            console.log('no errors');
            console.log(data);
        } else {
            console.log(errors);
        }



        ev.preventDefault()
    });

})