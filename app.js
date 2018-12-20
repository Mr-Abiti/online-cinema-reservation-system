const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const cinemaRoute = require('./routes/cinemas');

const app = express();

app.use('/user',userRoute);
app.use('/movie',movieRoute);
app.use('/cinema',cinemaRoute);

mongoose.connect('mongodb://localhost/OCR')
    .then(() => console.log('connected to mongodb.... '))
    .catch(err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'));

module.exports = app;