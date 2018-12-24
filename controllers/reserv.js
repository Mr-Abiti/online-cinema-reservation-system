const reserv = require('../models/reserv');
const mongoose = require('mongoose');

exports.get_all_reserved = (req, res, next) => {
    reserv.find()
        .populate('user cinema movie')
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
exports.get_reserved_by_id = (req, res, next) => {
    const id = req.params.id
    reserv.findById(id)
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
exports.reserv = (req, res, next) => {
    const reservs = new reserv({
        _id: new mongoose.Types.ObjectId,
        user: req.body.user,
        cinema: req.body.cinema,
        movie: req.body.movie
    });
    reservs.save()
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
exports.modify_reserv = (req, res, next) => {
    const id = req.params.id;
    const reservs = new reserv({
        _id: new mongoose.Types.ObjectId,
        user: req.body.user,
        cinema: req.body.cinema,
        movie: req.body.cinema
    });
    reserv.findOneAndUpdate({
            _id: id
        }, reservs, {
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
exports.delete_reserv = (req, res, next) => {
    const id = req.params.id;
    reserv.deleteOne({
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