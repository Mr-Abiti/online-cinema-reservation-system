const users = require('../models/users');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.users_signup = (req, res, next) => {
    users.find({
            email: req.body.email
        })
        .exec()
        .then(user => {
                if (user.length >= 1) {
                    res.status(409).json({
                        message: "the emai adress is all ready signup"
                    })
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            return res.status(500).json({
                                error: err
                            })
                        } else {
                            const user = new users({
                                _id: new mongoose.Types.ObjectId(),
                                name: req.body.name,
                                age: req.body.age,
                                email: req.body.email,
                                password: hash
                            })
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
                        }

                    });
                }
            }

        )
        .catch()


}
exports.user_login = (req, res, next) => {
    users.find({
            email: req.body.email
        })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "auth faild"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "auth faild"
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        email: user[0].email,
                        userID: user[0]._id
                    }, process.env.JWT_KEY, {
                        expiresIn: "1h"
                    })
                    return res.status(200).json({
                        message: "auth successfull",
                        token: token
                    })
                } else {
                    return res.status(401).json({
                        message: "auth faild"
                    })
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}
exports.user_get_all = (req, res, next) => {
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
}
exports.user_get_by_id = (req, res, next) => {
    const id = req.params.id;
    users.findById(id)
        .exec()
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
}
exports.user_create = (req, res, next) => {
    const user = new users({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password
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
}
exports.user_modify = (req, res, next) => {
    const id = req.params.id;
    const user = new users({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password
    });
    users.findOneAndUpdate({
            _id: id
        }, user, {
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
exports.user_delete = (req, res, next) => {
    const id = req.params.id;
    users.deleteOne({
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