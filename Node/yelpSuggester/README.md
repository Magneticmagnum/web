#Restaurant suggester app
A simple app that suggests a random restaurant to the user based on zipcode and simple tags.


How to run:  

1: Clone the reposity with the commands:
git clone https://github.com/Magneticmagnum/web.git

2: navigate to the yelpSuggester path:
cd Node/yelpSuggester
npm start

3: Open in your browser and type in the url:
localhost:3000/yelp

This instance is also running on my website:  http://noreetech.com:3000/yelp

Enjoy!


To do:
1 - Allow user to choose how far of a distance from the zipcode for the restaurant.  Currently it is searching for a default of a 15 mile radius.
ie: Filter results by 1 mile, 5 miles, 10 miles, etc...

2 - Implement an algorithm to remove duplicate restaurants and get only the closest result.  
ie: Searching for 'Fast Food' in a Minneapolis Zip code will give you a Taco Bell in Plymoth, even though there are several Taco Bells in Minneapolis.
