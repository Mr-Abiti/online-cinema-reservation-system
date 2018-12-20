const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('../models/users');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'user route'
    });
});

router.post('/', (req, res, next) => {
    const user = new users({
        _id: new mongoose.Types.ObjectId,
    });
    user.save()
        .then(result => console.log(result))
        .catch(err => console.log(err))
    res.status(201).json({
        message: 'cinema is created',
        user: user
    });

});

router.put('/', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {

});

router.patch('/:id', (req, res, next) => {

});

module.exports = router;