var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	if(err) throw err;


	var grades = db.collection('grades');

	/*var cursor = grades.findOne(query, callback);
	var query = {'assigment' : 'hw1'};
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
	};*/


	/*
	var query = {'assigment' : 'hw1'};
	var operator = {'$set' : {'date_returned' : new Date()}};
	grades.update(query, operator, function(err, updated) {
		if(err) throw err.message;

		console.dir('We just updated: ' + updated);
		
		return db.close();	
		});
*/
	var query = {};
	var operator = {'$unset' : { 'date_returned' : '' }};
	var options = {'multi' : true};

	grades.update(query, operator, options, function(err, updated) {
		if(err) throw err.message;

		console.dir('We just updated: ' + updated);
		
		return db.close();	
		});

});