const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const {
  validateProductName,validatePrice,validateDescription
} = require('./customValidator');

module.exports = router;
router.get('/', (req, res) => {
  res.render('product-form', { errors: [], oldData: {} });
});

router.post(
  '/addProduct',
  [validateProductName, validatePrice, validateDescription],
  async (req, res) => {
    const errors = req.validationErrors || [];

    if (errors.length > 0) {
      return res.render('product-form', {
        errors,
        oldData: req.body
      });
    }

    const { name, price, description } = req.body;

    try {
      const newProduct = new Product({ name, price, description });
      await newProduct.save();
      res.render('form-data', { name });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error saving product');
    }
  }
);

