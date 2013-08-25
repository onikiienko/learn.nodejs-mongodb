var MongoClient = require('mongodb').MongoClient, request = require('request');

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	if(err) throw err;

	//makking a request to side URL
	request('http://www.reddit.com/r/technology/.json', function(error, response, body) {
		if(!error && response.statusCode == 200) {
			//parsing json to object
			var obj = JSON.parse(body);

			//map is aaplying callback for every item in array
			var stories = obj.data.children.map( function(story) { return story.data; });

			db.collection('reddit').insert(stories, function(err, data) {
				if(err) {throw err;}
				console.dir(data);
				db.close();
			});
		}

	});
});