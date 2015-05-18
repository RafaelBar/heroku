var express = require('express');
var app = express();
var url = require('url');
var thriller = require('./thriller');
/////////////////
app.get ('/all', function (req, res) {
	res.json(thriller.getAllBooks());
});

app.get ('/id/:bookid', function (req, res) {
	res.json(thriller.getBookById(req.params.bookid));
});

app.get ('/reviews', function (req, res) {
	res.json(thriller.getMostReviews());
});
///////////////////
app.listen(3000);
console.log('listen 3000');