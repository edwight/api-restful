const mongoose = require('mongoose');
var app = require('./app');
const config = require('./config');


mongoose.connect(config.db,(err,res)=>{
	if(err){
		console.log('error al conectar a la base de dato');
	}
	else{
		console.log('conecion establecida en DB');
		var server = app.listen(config.port,function(err){
		if(err){
			return console.log('a ocurrido un error'),process.exit(1);
		}
		console.log(`api restful corriendo http//localhost:${config.port}`);
		})
	}
	
})
