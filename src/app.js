const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const api = require('./Router/index');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', api);

module.exports = app;