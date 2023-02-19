const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    uuid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    price: {
        type: Number,
        require: true,
        default: 0
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    versionKey: false
})
const Product = mongoose.model('Products', productSchema)

module.exports = Product