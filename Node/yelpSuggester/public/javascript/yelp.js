
function getQueryObject(){
	var search = location.search.substring(1);
	return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

}

$(document).ready(function(){

	var queryObject = getQueryObject();

	for(key	in queryObject){
		$("#inputZip").val(queryObject[key]);
	}
});

//$('#input-field-id').val($('#input-field-id').val() + 'more text');