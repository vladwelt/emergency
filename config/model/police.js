var mongoose = require('mongoose');

var Schema 	= mongoose.Schema;

var policeSchema 	= new Schema({
	title : String,
	type : String,
	departament : String,
	altitude : Number,
	latitude : Number
});
 module.exports = mongoose.model('police', policeSchema );