const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema({
    name: { type: String, required: 'User name is required' },
    age: { type: Number, required },
    email: { type: String, required: 'eMail is required' },
    address: { type: String, required: 'User should have an address' }
})

module.exports = mongoose.model('Customer', Customer)