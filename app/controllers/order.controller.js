const Order = require('../models/orderModel');

// Create and Save a new order
exports.create = (req, res) => {
    // Validate request
    res.send(req.body)
    if(!req.body) {
        return res.status(400).send({
            message: "order content can not be empty"
        });
    }

    // Create a order
    const order = new Order({
        customername: req.body.customername,
        orderitems: req.body.orderitems, 
        price: req.body.price
    });

    // Save order in the database
    order.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the order."
        });
    });
};


// find all orders

exports.findAll = (req, res) => {
    Order.find()
    .then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving orders."
        });
    });
};

