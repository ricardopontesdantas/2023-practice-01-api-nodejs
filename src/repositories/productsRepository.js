const Product = require('../models/Product')
const { v4: uuidv4 } = require('uuid')

const getProducts = async () => {
    const products = await Product.find()
    return products
}

const getProduct = async (id) => {
    const product = await Product.find({ uuid: id })
    return product
}

const saveProduct = async ({ name, price }) => {
    const product = new Product({
        uuid: uuidv4(),
        name,
        price
    })
    await product.save()
    return product
}

const updateProduct = async (id, { name, price }) => {
    const product = await Product.findOneAndUpdate(
        { uuid: id },
        { 
            name,
            price
        },
        { new: true }
    )
    return product
}

const deleteProduct = async (id) => {
    return await Product.deleteOne({ uuid: id })
}

module.exports = { 
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}