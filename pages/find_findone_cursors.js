var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	if(err) throw err;

	var query = {'grade' : 100};

	/*
	//USING FINDONE

	db.collection('grades').findOne(query, function(err, doc) {
		if(err) throw err;

		console.dir(doc);

		db.close();
	});
	
	// USING FIND
	db.collection('grades').find(query).toArray(function(err, docs) {
		if(err) throw err;

		console.dir(docs);

		db.close();
	});*/
	var cursor = db.collection('grades').find(query);

	cursor.each(function(err, doc) {
		if(err) throw err;

		if(doc == null) {
			return db.close();
		}
		
		console.dir(doc.student + " got a good grade!");
	});
});