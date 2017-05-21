define(['jquery'], function(){
	
	$('#contactForm').on('submit', function(){
		var fname = $('#fname').val()
		alert('submitted name : '+ fname);
	})
})