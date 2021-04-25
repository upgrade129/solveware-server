const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    customername : String,
    order: String,
    price: Number
});

module.exports = mongoose.model('Order', OrderSchema);