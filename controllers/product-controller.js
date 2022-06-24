const { Product } = require('../models')

module.exports = async (req, res) => {
  try {
    const products = await Product.findAll()

    return res.json(products)
  } catch (err) {
    return res.json(err)
  }
}

// export const getProduct = () => {
//   console.log('ok done')
// }
