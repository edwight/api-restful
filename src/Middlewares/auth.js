'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function isAuth(req, res, next){
	if(!req.headers.authorization){
		return res.status(403).send({msg:'No tienes autorización'})
	}
	const token = req.headers.authorization.split("")[1]
	const payload = jwt.decore(token, config.SECRET_TOKEN);
	if(payload.exp < moment().unit()){
		return res.status(401).send({msg:'el token ha expirado'})
	}
	req.user = payload.sub 
	next()
}	

module.exports = isAuth;