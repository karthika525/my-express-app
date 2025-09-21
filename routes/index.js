const express = require('express');
const router = express.Router();
const storeName = "My Book Store";
const books = [
  { title: "Gitanjali", author: "Rabindranath Tagore" },
  { title: "Naalukettu", author: "M T Vasudevan Nair" },
  { title: "Khasakkinte Ithihasam", author: "O V Vijayan" }
];
router.get('/', function(req, res) {
  res.render('index', { storeName, books });
});
module.exports = router;


