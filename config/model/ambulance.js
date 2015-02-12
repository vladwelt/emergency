var mongoose = require('mongoose');

var Schema 	= mongoose.Schema;

var ambulanceSchema = new Schema({
	title : String,
	type : String,
	altitude : Number,
	latitude : Number
});

module.exports = mongoose.model('ambulance', ambulanceSchema );