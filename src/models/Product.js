const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Product = new Schema({
	name:{type:String},
	picture:{type:String},
	price:{type:Number, default:0},
	category:{type:String, enum:['computers','phone','accesories']},
	description:{type:String}
},{
	collection:'items'
});

module.exports = mongoose.model('Product', Product);