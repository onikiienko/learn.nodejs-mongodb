var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	if(err) throw err;

	var grades = db.collection('grades');
	var query = {'assigment' : 'hw3'};

	var cursor = grades.remove(query, callback);

	function callback(err, removed) {
		if(err) {
			console.log(err.message); 
			return db.close();
		}
		console.dir('We just removed: ' + removed);
		return db.close(); 
	};
});