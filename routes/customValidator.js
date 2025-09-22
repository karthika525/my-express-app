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

const validateDescription = (req, res, next) => {
  const description = req.body.description?.trim();
  const errors = [];

  if (!description) {
    errors.push({ msg: 'Description is required' });
  }

  req.validationErrors = req.validationErrors || [];
  req.validationErrors.push(...errors);
  next();
};

module.exports = {validateProductName,validatePrice,validateDescription
};
