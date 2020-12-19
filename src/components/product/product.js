const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    name: { type: String, required: 'product should have a name' },
    price: { type: Number, required: 'All products should have a price' },
    measures: {
        height: { type: Number },
        long: { type: Number }
    },
    img: { type: String, default: 'https://www.flaticon.com/svg/static/icons/svg/1524/1524539.svg' },
    color: [ String ]
})

module.exports = mongoosem.model('Product', Product)