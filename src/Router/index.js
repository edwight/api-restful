const express = require('express');
const productController = require('../Controllers/product');
const api = express.Router();
const auth = require('../Middlewares/user');

//product index
api.get('/product', productController.getProducts);
//product show
api.get('/product/:productId', productController.getProduct);
//product /store
api.post('/product', productController.saveProduct);
//product /update
api.put('/product/:productId', productController.updateProduct);
//product /delete
api.delete('/product/:productId', productController.deleteProduct);

api.get('/private',user.isAuth,(err,res)=>{
	res.status(200).send({msg:'tienes acceso'})
});
module.exports = api;