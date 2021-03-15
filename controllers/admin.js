//controllers are the link between the models(data management) and views(what the users sees)
const Product = require('../models/products')


exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/add-product', { activeAddProduct: true ,
       pageTitle: 'Add product', 
    path:'/admin/add-product', formCSS: true , productCSS: true} )
  }

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {prods: products, 
        path: '/admin/products', pageTitle: 'Admin products', 
        activeShop: 'true', hasProducts: products.length > 0,
        productCSS: 'true'}) //uses the default templating engibne and return the template
    })
}

exports.editProduct = (req, res, next) => {
    res.render('admin/edit-product', { activeAddProduct: true ,
        pageTitle: 'Edit product', 
     path:'/admin/edit-product', formCSS: true , productCSS: true} )
}