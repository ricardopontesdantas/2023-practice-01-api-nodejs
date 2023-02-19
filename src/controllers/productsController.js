const productsService = require('../services/productsService')

const getProducts = async (req, res) => {
    const products = await productsService.getProducts()
    res.status(200).json(products)
}

const getProduct = async (req, res) => {
    const { id } = req.params
    const product = await productsService.getProduct(id)
    res.status(200).json(product)
}

const saveProduct = async (req, res) => {
    const { name, price } = req.body
    const product = await productsService.saveProduct({ name, price })
    res.status(201).json(product)
}

const updateProduct = async (req, res) => {
    const { id } = req.params
    const { name, price } = req.body
    const product = await productsService.updateProduct(id, { name, price })
    res.status(200).send(product)
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    await productsService.deleteProduct(id)
    res.sendStatus(204)
}

module.exports = { 
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}