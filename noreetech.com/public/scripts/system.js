/*
 * Author: Magnum Noree
 * Dependencies:  jquery-1.7.2
 * 				  jquery.cookies.2.2.0
 * About: Web app for Controller Customization
 */

$(".systemDisplayBox").click(function() {
	var myClass = $(this).attr("id");
	setCookie('model', myClass, 365);
});

$(".colorpalette img").click(function() {
	if ($(this).parent().siblings().children().hasClass("checkbox")) {
		$(this).parent().siblings().children().remove(".checkbox");
		$(this).parent().append('<img src="images/stick images/paletteX.png" class="checkbox">');
	}

});



function setCookie(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
	var i, x, y, ARRcookies = document.cookie.split(";");
	for ( i = 0; i < ARRcookies.length; i++) {
		x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g, "");
		if (x == c_name) {
			return unescape(y);
		}
	}
}

function checkCookie() {
	var username = getCookie("username");
	if (username != null && username != "") {
		alert("Welcome again " + username);
	} else {
		username = prompt("Please enter your name:", "");
		if (username != null && username != "") {
			setCookie("username", username, 365);
		}
	}
}
