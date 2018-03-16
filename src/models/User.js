const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto');
var userSchema = new Schema({
	displayName:{type:String},
	email:{type:String, unique:true,lowercase:true},
	avatar:{type:String},
	password:{type:String,select:false},
	signupDate:{type:Date, default:Date.now()},
	lastLogin:{type:Date}


});

userSchema.pre('save',(next)=>{
	let user = this;
	if(!user.isModified('password')) return next();
	bcrypt.genSalt(10,(err,salt)=>{
		if(err) return next();
		bcrypt.hash(user.password,salt,null,(err,hash)=>{
			if(err){
				return next(err);
			}
			else{
				user.password = hash;
				next();
			}
		})
	})
});

userSchema.method.gravatar = function(){
	if(!this.email) return 'http//gravatar.com/avatar/?=2005d=retro';
	const md5 = crypto.createHash('md5').update(this.email).digest('hex');
	return `https//gravatar.com/avatar/${md5}?=200d=retro`;
}

module.exports = mongoose.model('userSchema',userSchema);