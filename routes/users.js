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
    users.find()
        .exec()
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
});

router.post('/', (req, res, next) => {
    const user = new users({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age
    });
    user.save()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err

            })
        })
})
router.put('/', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {

});

router.patch('/:id', (req, res, next) => {

});

module.exports = router;