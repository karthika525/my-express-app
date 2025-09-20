const express = require('express');
const router = express.Router();
const hobbyTitle = "Writing";
const hobbyDescription = "Writing is a creative hobby that allows individuals to express thoughts, emotions, and stories through words. It enhances imagination, sharpens communication skills, and provides a powerful outlet for self-expression.";
router.get('/', (req, res) => {
  res.render('index', { hobbyTitle, hobbyDescription });
});

module.exports = router;
