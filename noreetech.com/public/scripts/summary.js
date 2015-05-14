
function getQueryObject(){
	var search = location.search.substring(1);
	return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

}

$(document).ready(function(){

	var queryObject = getQueryObject();

	for(key	in queryObject){
		$("#config").append("<p> " + key + " : " + queryObject[key] + "</p>");
		changeButtonImage(key, queryObject[key]);
	}
});

