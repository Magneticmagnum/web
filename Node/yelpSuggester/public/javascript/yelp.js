$(document).ready(function(){

	function getQueryObject(){
	console.log(yelp);
	return JSON.parse(yelp);
	}

	var queryObject = getQueryObject();

	for(key	in queryObject){
		$("#config").append("<p> " + key + " : " + queryObject[key] + "</p>");
		changeButtonImage(key, queryObject[key]);
	}
});

