var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	if(err) throw err;

	var doc = [ {'student' : 'valera', 'age' : 60}, 
				{'student' : 'lera', 'age' : 50} ];

	var grades = db.collection('students');

	var cursor = grades.insert(doc, callback);

	function callback(err, inserted) {
		if(err) {
			console.log(err.message); 
			return db.close();
		}
		console.dir('We just inserted: ' + JSON.stringify(inserted));
		return db.close(); 
	};
});