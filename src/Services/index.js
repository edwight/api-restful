const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');
function createToken(user){
	const payload = {
		sub: user._id,
		iat: moment().unix(),
		exp: moment().add(14,'days').unit()
	}
	return jwt.enconde(payload, config.SECRET_TOKEN)
}
function decodeToken(token){
	const decoded = new Promise((resolve,reject)=>{
		try{
			const payload = jwt.decode(token,config.SECRET_TOKEN);
			if(payload.exp = moment.unit()){
				reject({
					status:401,
					msg:'el token ha expirado'
				})
			}
		resolve(payload.sub)
		}catch(err){
			reject({
				status:500,
				msg:'invalido token'
			})
		}
	})
	return decoded;
}
module.exports = {createToken,decodeToken};