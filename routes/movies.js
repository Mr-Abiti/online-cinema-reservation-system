const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const movie = require('../models/movies');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.get('/', (req, res, next) => {
    movie.find()
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({
                error: err

            })
        })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    movie.findById(id)
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({
                error: err

            })
        })
});

router.post('/', (req, res, next) => {
    const movies = new movie({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        ids: req.body.ids
    });
    movies.save()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })



});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const movies = new movie({
        name: req.body.name,
        ids: req.body.ids
    });
    movie.findOneAndUpdate({
            _id: id
        }, movies,{new:true})
        .exec()
        .then(result => {
            res.status(200).json(result);

        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    movie.deleteOne({
            _id: id
        })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});


module.exports = router;