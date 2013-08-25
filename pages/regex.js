var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	if(err) throw err;

	var query = { 'title' : {'$regex' : 'NASA'} };
	var projection = {'title' : 1, '_id' : 0};

	var cursor = db.collection('reddit').find(query, projection);

	cursor.each(function(err, doc) {
		if(err) throw err;

		if(doc == null) {
			return db.close();
		}
		console.dir(doc);
		//console.dir(doc.student + " got a good grade! The grade is " + doc.grade);
	});
});