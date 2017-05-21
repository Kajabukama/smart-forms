define(['jquery'], function(){

	$('#contactForm').on('submit', function(){
		var fname = $('#fname').val()

		if (fname === '') {
			alert('the form field is empty');
		}else{
			alert('Your name is : ' + fname.toUpperCase());
		}
	})
})