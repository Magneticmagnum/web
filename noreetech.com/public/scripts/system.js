function replaceLoc(){
	window.location.replace("model.html");
}

function onClickSetCookie(model){
	$.cookies.set('model', model);
}

$(".systemDisplayBox").click(function(){
	var myClass = $(this).attr("id");
	setcookie('model', myClass, time(), '/path', 'noreetech.com');
});

