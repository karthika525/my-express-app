const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const db = require('./database/db')
const productRoutes = require('./routes/index');
const app = express();

app.get('/', (req, res) => res.redirect('/products/add'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/products', productRoutes);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/products', productRoutes);
module.exports = app;
