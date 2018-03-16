const express = require('express');
const productController = require('../Controllers/product');
const userCtrl = require('../Controllers/user');
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

api.post('/signup', userCtrl.signUp);
api.post('/signIn', userCtrl.singIn);

api.get('/private',auth,(err,res)=>{
	res.status(200).send({msg:'tienes acceso'})
});
module.exports = api;