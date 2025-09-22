const validateProductName = (req, res, next) => {
  const name = req.body.name?.trim();
  const errors = [];

  if (!name) {
    errors.push({ msg: 'Product name is required' });
  }

  req.validationErrors = req.validationErrors || [];
  req.validationErrors.push(...errors);
  next();
};
const validatePrice = (req, res, next) => {
  const price = parseFloat(req.body.price);
  const errors = [];

  if (isNaN(price) || price <= 0) {
    errors.push({ msg: 'Price must be a positive number' });
  }

  req.validationErrors = req.validationErrors || [];
  req.validationErrors.push(...errors);
  next();
};

const validateQuantity = (req, res, next) => {
  const quantity = parseInt(req.body.quantity, 10);
  const errors = [];

  if (isNaN(quantity) || quantity < 0) {
    errors.push({ msg: 'Quantity must be a non-negative integer' });
  }

  req.validationErrors = req.validationErrors || [];
  req.validationErrors.push(...errors);
  next();
};

const validateDescription = (req, res, next) => {
  const description = req.body.description?.trim();
  const errors = [];

  if (!description) {
    errors.push({ msg: 'Add a description' });
  }

  req.validationErrors = req.validationErrors || [];
  req.validationErrors.push(...errors);
  next();
};
module.exports = {
  validateProductName,
  validatePrice,
  validateQuantity, 
  validateDescription
};

