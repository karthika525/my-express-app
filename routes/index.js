var express = require('express');
var router = express.Router();

// Home Page
router.get('/', function(req, res) {
  res.render('home', { title: 'Home' });
});

// Destinations Page
router.get('/destinations', function(req, res) {
  res.render('destinations', { title: 'Destinations' });
});

// Contact Page
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;

