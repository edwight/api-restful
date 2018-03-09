const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
var port = process.env.PORT || 3000; 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/api/product',(req, res)=>{
	res.send(200,{product:[]});
});
app.get('/api/product/:name',(req,res)=>{
	var name = req.params.name ;
	res.send({msg:`hola ${name}`});
});
app.post('/api/product',(req,res)=>{
	console.log(req.body);
	res.status(200).send({msg:'el producto se ha guardado'});
});
app.put('/api/product',(req,res)=>{

});
app.delete('/api/product',(req,res)=>{

});

mongoose.connect('localhost//27.0.0.1:2707/shop',(err,res)=>{
	if(err){
		console.log('error al conectar a la base de dato');
	}
	else{
		console.log('conecion establecida en DB');
		var server = app.listen(port,function(err){
		if(err){
			return console.log('a ocurrido un error'),process.exit(1);
		}
		console.log(`api restful corriendo http//localhost:${port}`);
		})
	}
	
})
