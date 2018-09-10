var express = require('express')
	mongoose = require('mongoose');
config = require('./server/configure');
app = express();
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);
mongoose.connect('mongodb://localhost');
mongoose.connection.on('open', function(){
	console.log('Mongoose connected.');
});

// app.get('/', function(req, res){
// 	res.send('Hello World.');
// });
var server = app.listen(app.get('port'), function(){
	console.log('Server up: http://localhost:' + app.get('port'));
});