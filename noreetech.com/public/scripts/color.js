var xbox360wirelesshtml = "file:///C:/Users/Virus/My%20Documents/Aptana%20Studio%203%20Workspace/noreetech.com/public/colorxbox360wireless.html#";

$(document).ready(function() {
	$(".hide").hide();

	/*
	 * Checks cookies for model cookie.  If it's not found, create one.
	 * If 'model' cookie found, redirect to correct html page
	 */
	if($.cookie("model") == null){
		$.cookie("model", "xbox 360 wireless");
	}
	else{
		var myModel = $.cookie("model");
		switch(myModel){
			case "xbox 360 wireless":
				window.location.replace(xbox360wirelesshtml);
		}
	}
}); 