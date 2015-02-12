var mongoose = require('mongoose');

var Schema 	= mongoose.Schema;

var firemenSchema = new Schema({
	title : String,
	type : String,
	magnitude : Number,
	altitude : Number,
	latitude : Number
});

module.exports = mongoose.model('firemen', firemenSchema);