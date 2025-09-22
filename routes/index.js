const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
router.get('/', (req, res) => {
  res.render('reg-form', {
    errors: [],oldData: {}
  });
});
router.post('/createUser', [
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Invalid email address'),
  check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render('reg-form', {
      errors: errors.array(),
      oldData: req.body
    });
  }

  // if no validation errors
  const { name, email } = req.body;
  res.render('form-data', { name, email });
});

module.exports = router;
