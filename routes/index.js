const express = require('express');
const router = express.Router();
const { validateEmail, validatePassword } = require('./customValidators');

// Render the form
router.get('/', (req, res) => {
  res.render('login-form', { errors: [], oldData: {} });
});

// Handle form submission
router.post('/createUser', validateEmail, validatePassword, (req, res) => {
  const errors = req.validationErrors || [];

  if (errors.length > 0) {
    res.render('login-form', { errors: errors, oldData: req.body });
  } else {
    res.render('form-data', { email: req.body.email });
  }
});

module.exports = router;
