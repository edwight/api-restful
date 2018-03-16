
const mongoose = require('mongoose');
const User = require('../models/User');
const service = require('../Services');

function signUp(req,res){
	user = new User({
		email: req.body.email,
		displayName: req.body.displayName,
		password: req.body.password

	})
	user.save((err)=>{
		if(err) return res.status(500).send({msg:`error a crear usuario ${err}`});
		res.status(200).send({token: service.createToken(user)})
	})

}

function signIn(res,res){
	User.find({email:req.body.email},(err,user)=>{
		if(err) return res.status(500).send({msg:`error al buscar en la base de dato ${err}`});
		if(!user) return res.status().send({msg:'el usuario no exite'});
		res.status.send({
			msg:'te has autentificado',
			token: service.createToken(user)
		})
	})
}

module.exports = {
	signUp,
	signIn 
}