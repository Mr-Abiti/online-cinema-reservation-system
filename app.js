const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const cinemaRoute = require('./routes/cinemas');

const app = express();
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/OCR')
    .then(() => console.log('connected to mongodb.... '))
    .catch(err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/user', userRoute);
app.use('/movie', movieRoute);
app.use('/cinema', cinemaRoute);

app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;