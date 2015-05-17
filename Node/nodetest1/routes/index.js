var express = require('express');
var router = express.Router();
var yelp = require("yelp").createClient({
  consumer_key: "vucKsgWW-x5vx7CFTwfbaQ", 
  consumer_secret: "USvc6t1wc2PzbZH6O14AnSbjXx8",
  token: "w8fAH41mNaPq-X784f0cov0pniog_oBv",
  token_secret: "F_Fv-S4J2ztyer7UzMaDp9DNbTc"
});

var yelpData = "";
	// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({term: "food", location: "Montreal"}, function(error, data) {
	 console.log(error);
	 console.log(data);
	 yelpData = data;
});

	// See http://www.yelp.com/developers/documentation/v2/business
yelp.business("yelp-san-francisco", function(error, data) {
	 console.log(error);
	 console.log(data);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expresssss',
  						yelp: yelpData });
});


/* Get hello world page*/
router.get('/helloworld', function(req, res){
	
	res.render('helloworld', {title: 'Hello, World!', 
								magnum: 'mmmmagnum',
								yelp: yelpData
	});
})



module.exports = router;
