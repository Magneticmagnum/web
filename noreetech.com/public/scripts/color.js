var xbox360wirelesshtml = "file:///C:/Users/Virus/My%20Documents/Aptana%20Studio%203%20Workspace/noreetech.com/public/colorxbox360wireless.html#";
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
	$(parent).append('<img src="images/stick images/xbox-360-controller-stick-' + col + '.png" class="xbox' + className + '">');
	alert(parent);
}

$(document).ready(function() {
	$(".hide").hide();
	
	
});

$(".colorpalette img").click(function() {
	var myColor = $(this).parent().attr("class");
	if ($(this).parent().siblings().children().hasClass("checkbox")) {
		$(this).parent().siblings().children().remove(".checkbox");
		$(this).parent().append('<img src="images/stick images/paletteX.png" class="checkbox">');
	}
	var thisItem = $(this).closest("ul").attr("id");
	changeButtonImage(thisItem, myColor);

});

