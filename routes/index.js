const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/userModel');

router.get('/', (req, res) => {
  res.render('sign-up', { errors: [], oldData: {} });
});

router.post('/createUser', [
  check('username').notEmpty().withMessage('Username is required'),
  check('email').isEmail().withMessage('Invalid email address'),
  check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render('sign-up', {
      errors: errors.array(),
      oldData: req.body
    });
  }

  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.render('form-data', { message: "Thank you for signing up!", user: { username, email } });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
