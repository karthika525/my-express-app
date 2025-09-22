const validateEmail = (req, res, next) => {
  const email = req.body.email;
  const errors = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    errors.push({ msg: 'Invalid email address' });
  }
  req.validationErrors = req.validationErrors || [];
  req.validationErrors.push(...errors);
  next();
};

const validatePassword = (req, res, next) => {
  const password = req.body.password;
  const errors = [];

  if (!password || password.length < 8) {
    errors.push({ msg: 'Password must be at least 8 characters long' });
  }

  req.validationErrors = req.validationErrors || [];
  req.validationErrors.push(...errors);
  next();
};

module.exports = { validateEmail, validatePassword };
