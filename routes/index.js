const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/add', (req, res) => {
  res.render('product-form');
});


router.post('/add', async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const newProduct = new Product({
      name: name.trim(),
      quantity: parseInt(quantity),
      price: parseFloat(price)
    });

    await newProduct.save();
    res.redirect('/products/list');
  } catch (err) {
    res.status(500).send('Error saving product: ' + err.message);
  }
});
router.get('/list', async (req, res) => {
  try {
    const products = await Product.find({})
      .sort({ price: 1 })
      .limit(5)
      .select('name price');

    res.render('pdt-list', { products });
  } catch (err) {
    res.status(500).send('Error fetching products');
  }
});

module.exports = router;
