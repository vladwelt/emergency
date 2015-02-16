var express = require('express');
var app 	= express();
var mongoose= require('mongoose');
var port	= 8080;
var database= require('./config/database');
var morgan	= require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var join = require('path').join;
var lessmiddleware = require('less-middleware');

//mongoose config
mongoose.connect(database.url);

//less-middleware config
app.use(lessmiddleware('/less', {
    dest : '/css',
    pathRoot : join(__dirname, 'public')
}));

app.use(express.static(join(__dirname , 'public')));
app.use(express.static(join(__dirname , 'public' ,'bower_components')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.set('views', join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('index.html');
});

app.listen(port);
console.log('App listening on port ' + port);
