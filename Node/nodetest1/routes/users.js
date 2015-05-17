var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET hello world page */
router.get('/helloworld', function(req, res){
	res.render('helloworld', {title: 'Hello, World!',
							  	magnum: 'mmmmagnum'
							  	});

})


module.exports = router;
