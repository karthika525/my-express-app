const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const db = require('./database/db')
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
module.exports = app;
