const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminController = require('../controllers/admin')

const products = [];

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

router.get('/edit-product', adminController.editProduct)
// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/products', adminController.getProducts)
module.exports = router;

