//var xbox360wirelesshtml = "file:///C:/Users/Virus/My%20Documents/Aptana%20Studio%203%20Workspace/noreetech.com/public/colorxbox360wireless.html#";
/*
 * palette to colored image class / id links:
 * 
 * palette:				image:
 * #left-stick			xboxleftstick
 * #right-stick			xboxrightstick
 * #x-button			xboxbuttonx
 * #y-button			xboxbuttony
 * #a-button			xboxbuttona
 * #b-button			xboxbuttonb
 */
function changeButtonImage(className, col){
	var classToChange = ".xbox" +className;
	var parent = $(classToChange).parent();
	$(classToChange).remove();
	$(parent).append('<img src="images/stick images/xbox-360-controller-' + className + '-'+ col + '.png" class="xbox' + className + '">');
}

$(document).ready(function() {
	$(".hide").hide();
	
	
});




$(".colorpalette img").click(function() {
	var myColor = $(this).parent().attr("data-color");
	if ($(this).parent().siblings().children().hasClass("checkbox")) {
		$(this).parent().siblings().children().remove(".checkbox");
		$(this).parent().append('<img src="images/stick images/paletteX.png" class="checkbox">');
	}
	var thisItem = $(this).closest("ul").attr("id");
	changeButtonImage(thisItem, myColor);

});

$(".continueButton").click(function(){

	var colorPalette = $(".colorpalette");
	var colorObject = {};
	for (var i = 0; i < colorPalette.length; i++) {
		var color = $(colorPalette[i]).find(".checkbox").closest(".color").attr("data-color");
		var item = $(colorPalette[i]).attr("id");
		colorObject[item] = color;
	};
	var str = [];
	for(key in colorObject){
		str.push(key + "=" + colorObject[key])
	}
	var url = str.join("&");
	console.log(url);

	window.open("summary.html?"+url);

});


