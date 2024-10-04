const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const contactController = require('../controllers/contactController');

// Home and about pages
router.get('/',(req, res)=>res.render('home'));
router.get('/about',(req, res)=>res.render('about'));

// Contact routes (form render and submission)
router.get('/contact', contactController.getContactPage);
router.post('/contact', contactController.submitContactForm);

// Products list
router.get('/products', productController.getProducts);

// Add product (form render and submission)
router.get('/products/add',(req, res)=>res.render('add-product'));
router.post('/products/add', productController.addProduct);

// Edit product (form render and update)
router.get('/products/edit/:id', productController.getEditProductForm);
router.post('/products/edit/:id', productController.updateProduct);

// Delete product
router.post('/products/delete/:id', productController.deleteProduct);

// Export router
module.exports = router;
