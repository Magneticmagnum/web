var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
	res.render('helloworld', { title: 'Hello, World!' })
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

router.get('/yelp', function(req, res){
    var yelp = req.yelp;
    var zipCode = req.body.zipcode || "Minneapolis";
    var restInfo = '';
    yelp.search({location: zipCode}, function(error, data){
        var length = data.businesses.length-1;
        var rand = Math.floor(Math.random() * length);
        restInfo = data.businesses[rand];
        console.log(restInfo.image_url);
        res.render('yelp', {title: "Restaurant suggester",
                    restName: restInfo.name,
                    restPhone: restInfo.display_phone,
                    restLocation: restInfo.location.display_address,
                    image: restInfo.image_url
                    });
    });
});

router.get('/restaurant', function(req, res){
    res.render('restaurant', {title: "suggester"});
});


router.post('/yelp', function(req, res){
    var yelp = req.yelp;
    var zipCode = req.body.zipcode || 0;
    var restInfo = '';
    yelp.search({location: zipCode}, function(error, data){
        var length = data.businesses.length-1;
        var rand = Math.floor(Math.random() * length);
        restInfo = data.businesses[rand];
        console.log(restInfo.name);
        res.render('yelp', {title: "Restaurant suggester",
                    restName: restInfo.name,
                    restPhone: restInfo.display_phone,
                    restLocation: restInfo.location.display_address,
                    image: restInfo.image_url
                    });
    });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

module.exports = router;