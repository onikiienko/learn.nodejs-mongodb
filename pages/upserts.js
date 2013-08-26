var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	if(err) console.dir(err.message);


	var grades = db.collection('grades');

	/*
	
	//UPSERTS

	var query = {'student' : 'boris', 'assigment' : 'hw1'};
	//var operator = {'student' : 'boris', 'assigment' : 'hw1', 'grade' : 11};
	var operator = {'$set' : {'date_returned' : new Date(), 'assigment' : 'hw1', 'grade' : 11 }};
	var options = {'upsert' : true};
	grades.update(query, operator, options, callback);
	
	function callback(err, updated) {
		if(err) console.dir(err.message);

		console.dir('We just updated: ' + updated);
		
		return db.close();	
	};
	*/


	//SAVE

	var cursor = grades.findOne(query, callback);
	var query = {'assigment' : 'hw2'};
	function callback(err, doc) {
		if(err) {
			console.log(err.message); 
			return db.close();
		}
		if(!doc) {
			console.log('No documet found!'); 
			return db.close();
		}
		query['_id'] = doc['_id'];
		doc['date_returned'] = new Date();

		grades.update(query, doc, function(err, updated) {
		if(err) throw err.message;

		console.dir('We just updated: ' + updated);
		
		return db.close();	
		})
	};


});