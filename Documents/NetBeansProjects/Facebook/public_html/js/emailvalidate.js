var $ = function(id) {
	return document.getElementById(id);
}
var valid = function() {
	var email = $("snemail").value;
	var confirmemail = $("confirmsnemail").value;
    var isValid = false;
	
	if (email == confirmemail)
		isValid = true;
	else 
		isValid = false;
	
	if (isValid) {
		$("confirmsnemail").setCustomValidity('');
	}
	else {
		$("confirmsnemail").setCustomValidity('Email must be matched');
	}
}

window.onload = function() {
	$("signup").onclick = valid;
	
}	