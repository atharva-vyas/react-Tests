const express = require('express')
const app = express()
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// ADD THIS TO YOUR NODE.JS EXPRESS BACKEND TO ALLOW *ALL* CROSS ORIGIN REQUESTS :-
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.post('/test', function (req, res) {
  res.json({data: 'Hello World!'})
})

app.listen(3001)