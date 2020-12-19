const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema({
    creation_date: { type: String, default: Date.now(), required: 'The order needs to have a creation date' },
    ref: 'Customer',
    ref: 'Product',
    total: { type: Number, required: 'To place an order total is needed' },
    status: { type: Boolean, default: false }
})

module.exports = mongoose.model('Order', Order)
