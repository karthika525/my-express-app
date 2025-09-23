const express = require('express');
const router = express.Router();

let lastBook = { title: '', pages: '' };
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});
router.get('/add-book', (req, res) => {
  res.render('add-book', { title: 'Add Book' });
});
router.post('/submit-book', (req, res) => {
  const { title, pages } = req.body;
  lastBook.title = title;
  lastBook.pages = pages;
  res.redirect('/thank-you');
});
router.get('/thank-you', (req, res) => {
  res.render('thank-you', { title: 'Thank You' });
});
router.get('/show-title', (req, res) => {
  res.render('show-title', { title: 'Book Title', bookTitle: lastBook.title });
});
router.get('/show-pages', (req, res) => {
  res.render('show-pages', { title: 'Book Pages', bookPages: lastBook.pages });
});

module.exports = router;


