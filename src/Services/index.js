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

module.exports = createToken;