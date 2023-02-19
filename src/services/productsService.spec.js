require('../infra/database')
const productsService = require('./productsService')

describe('Create product', () => {
    it('Should be able to get all products', async () => {
        const products = await productsService.getProducts()
        expect(products).toBeDefined()
    })

    it('Should be able to get a product by id', async () => {
        const savedProduct = await productsService.saveProduct({
            name: "product test",
            price: 1
        })
        const searchedProduct = await productsService.getProduct(savedProduct.uuid)
        expect(searchedProduct).toHaveLength(1)
        await productsService.deleteProduct(savedProduct.uuid)
    })

    it('Should be able to create a product', async () => {
        const savedProduct = await productsService.saveProduct({
            name: "product test",
            price: 1
        })
        expect(savedProduct).toHaveProperty('uuid')
        await productsService.deleteProduct(savedProduct.uuid)
    })

    it('Should be able to update a product', async () => {
        const savedProduct = await productsService.saveProduct({
            name: "product test",
            price: 1
        })
        const updatedProduct = await productsService.updateProduct(savedProduct.uuid, {
            name: 'product test updated',
            price: 10
        })
        const searchedProduct = await productsService.getProduct(savedProduct.uuid)
        expect(searchedProduct[0].name).toEqual('product test updated')
        expect(searchedProduct[0].price).toEqual(10)
        await productsService.deleteProduct(savedProduct.uuid)
    })

    it('Should be able to delete a product by id', async () => {
        const savedProduct = await productsService.saveProduct({
            name: "product test",
            price: 1
        })
        await productsService.deleteProduct(savedProduct.uuid)
        const searchedProduct = await productsService.getProduct(savedProduct.uuid)
        expect(searchedProduct).toHaveLength(0)
    })
})