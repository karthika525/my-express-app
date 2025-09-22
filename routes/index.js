const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/', (req, res) => {
  res.render('product-form');
});


router.post('/addProduct', async (req, res) => {
  const { name, quantity, price } = req.body;

  try {
    const newProduct = new Product({
      name,quantity: parseInt(quantity),price: parseFloat(price)
    });

    await newProduct.save();
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while saving product.");
  }
});

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().lean();
    const totalCount = await Product.countDocuments();

    res.render('pdt-list', {
      products,
      totalCount
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while listing products.");
  }
});

module.exports = router;


