module.exports = (app) => {
    const products = require('../controllers/product.controller');
    const users = require('../controllers/signin.controller');
    const orders = require('../controllers/order.controller');
    
    // Create a new product
    app.post('/products', products.create);

    // Retrieve all products
    app.get('/products', products.findAll);

    // Retrieve a single product with productId
    app.get('/products/:productId', products.findOne);

    // Update a product with productId
    app.put('/products/:productId', products.update);

    // Delete a product with productId
    app.delete('/products/:productId', products.delete);

    // Add customer
    app.post('/users',users.create);

    // Validate customer
    app.post('/validateusers',users.findUser);

    // Get all users
    app.get('/users',users.findAll);

    //get all orders
    app.get('/orders',orders.findAll);

    //create order
    app.post('/orders',orders.create);
}