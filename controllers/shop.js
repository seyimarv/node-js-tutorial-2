//controllers are the link between the models(data management) and views(what the users sees)
const Product = require('../models/products')



exports.getProducts =  (req, res, next) => {
    // console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    Product.fetchAll((products) => {
        res.render('shop/product-list', {prods: products, 
        docTitle: 'Shop', path: '/products', pageTitle: 'All products', 
        activeShop: 'true', hasProducts: products.length > 0,
        productCSS: 'true'}) //uses the default templating engibne and return the template
    })
   
  }
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {prods: products, 
    docTitle: 'Shop', path: '/', pageTitle: 'shop', 
    activeShop: 'true', hasProducts: products.length > 0,
    productCSS: 'true'}) //uses the default templating engibne and return the template
})
}


exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'your cart',

  } )
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'checkout'
  })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'orders'
  })
}
