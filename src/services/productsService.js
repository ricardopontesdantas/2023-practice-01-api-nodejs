const productsRepository = require('../repositories/productsRepository')

const getProducts = async () => {
    const products = await productsRepository.getProducts()
    return products
}

const getProduct = async (id) => {
    const product = await productsRepository.getProduct(id)
    return product
}

const saveProduct = async ({ name, price }) => {
    const product = await productsRepository.saveProduct({ name, price })
    return product
}

const updateProduct = async (id, { name, price }) => {
    const product = await productsRepository.updateProduct(id, { name, price })
    return product
}

const deleteProduct = async (id) => {
    return await productsRepository.deleteProduct(id)
}

module.exports = { 
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}