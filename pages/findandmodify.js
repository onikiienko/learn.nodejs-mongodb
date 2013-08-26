var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	if(err) console.dir(err.message);


	var grades = db.collection('counters');

	var query = {'name' : 'comments'};
	var sort = [];
	var operator = {'$inc' : {'counter' : 1}};
	var options = {'new' : true};
	grades.findAndModify(query, sort,  operator, options, callback);
	
	function callback(err, doc) {
		if(err) {
			console.log(err.message); 
			return db.close();
		}
		if(!doc) {
			console.log('No documet found!'); 
			return db.close();
		}

		console.dir('Number of comments: ' + doc.counter);
		
		return db.close();	
	};
	
});