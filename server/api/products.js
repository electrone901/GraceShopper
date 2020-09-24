const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

/* All Products Routes */

//GET /api/products/
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'imageUrl', 'price', 'inventory'],
    })

    //TODO: Confirm currency is sent to front-end as a properly localized string.

    res.json(products)
  } catch (err) {
    next(err)
  }
})

/* Single Product Route */

//GET /api/product/:productId
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.productId,
      },
    })
    res.json(product)
  } catch (error) {
    next(error)
  }
})

//PUT /api/product/:productId
router.put('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.productId,
      },
    })
    if (!product) {
      res.sendStatus(404)
    } else {
      const updatedProduct = await product.update(req.body)
      res.json(updatedProduct)
    }
  } catch (error) {
    next(error)
  }
})

//DELETE /api/products/:productId
router.delete('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.productId,
      },
    })
    if (!product) {
      res.sendStatus(404)
    } else {
      await product.destroy(req.body)
      res.sendStatus(204)
    }
  } catch (error) {
    next(error)
  }
})
