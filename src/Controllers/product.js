var Product = require('../Models/Product');

function getProduct(req,res){
	let product = req.params.productId;
	Product.findById(product, (err,product)=>{
		if(err){
			res.status(500).send({msg:`error al realizar la peticion: ${err}`});
		}
		if(!product){
			res.status(404).send({msg:`el producto no existe:`});
		}
		res.send(200,{product});
	});
}
function getProducts(req,res,next){
	Product.find({},(err,products)=>{
		if(err){
			res.status(500).send({msg:`error al realizar la peticion: ${err}`});
		}
		if(!products){
			res.status(404).send({msg:'no hay producto'});
		}
		res.send(200,products);
	});
}
function saveProduct(req, res){
	console.log(req.body);
	let product = new Product();
	product.name = req.body.name;
	product.price = req.body.price;
	product.picture = req.body.picture;
	product.description = req.body.description;
	product.save((err,productStored)=>{
		if(err){
			res.status(500).send({msg:`error al salvar en la base de dato ${err}`});
		}
		else{
			res.status(200).send({
				msg:'el producto se ha guardado',
				product:productStored
			});
		}
	})
}
function updateProduct(req,res){
	let product = req.params.productId;
	let update = req.body;
	Product.findByIdAndUpdate(product, update,(err, productUpdate)=>{
		if(err){
			res.status(500).send({msg:`error al actualizar producto ${err}`});
		}
		res.status(200).send({
			msg:'producto actualizado',
			product:productUpdate
		});
	});
}
function deleteProduct(req,res){
	let product = req.params.productId;
	Product.findById(product,(err)=>{
		if(err){
			res.status(500).send({msg:`error al eliminar producto ${err}`});
		}
		if(!product){
			res.send(404,{msg:'producto no existe'});
		}
		Product.remove(err =>{
			if(err){
				res.status(500).send({msg:`error al borrar producto ${err}`});

			}
			res.status(200).send({msg:'producto eliminado'});
		})
	});
}

module.exports = {
	getProduct,
	getProducts,
	saveProduct,
	updateProduct,
	deleteProduct
}