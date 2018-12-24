const Cinema = require('../models/cinemas');
const mongoose = require('mongoose');
exports.cinema_get_all = (req, res, next) => {
    Cinema.find()
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({
                error: err

            })
        })

}
exports.cinema_get_by_id = (req, res, next) => {
    const id = req.params.id;
    Cinema.findById(id)
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({
                error: err

            })
        })

}
exports.cinema_creat = (req, res, next) => {
    const cinemas = new Cinema({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        noseat: req.body.noseat
    });
    cinemas.save()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
}
exports.cinema_modify = (req, res, next) => {
    const id = req.params.id;
    const cinema = new Cinema({
        name: req.body.name,
        noseat: req.body.noseat
    });
    Cinema.findOneAndUpdate({
            _id: id
        }, cinema, {
            new: true
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
}
exports.cinema_delete = (req, res, next) => {
    const id = req.params.id;
    Cinema.deleteOne({
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
}