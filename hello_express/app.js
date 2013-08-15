var express = require('express');
var app = express();
var cons = require('consolidate');
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views',"views");

var mongoClient = new MongoClient(new Server('localhost', 27017));

var db = mongoClient.db('test');

app.get('/', function (req, res) {
	db.collection('coll').findOne({}, function (err, doc) {
		if(err) throw err;
		res.render('hello', doc);
	});
});

app.get('*', function (req, res) {
	res.send("Page not found!", 404)
});

mongoClient.open(function (err, mongoclient) {
	if (err) throw err;
	app.listen(8080);
	console.log("The server is started on 8080 port");	
});
