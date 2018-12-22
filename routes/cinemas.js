const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cinema =require('../models/cinemas');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.get('/',(req,res,next)=>{
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

});
router.get('/:id',(req,res,next)=>{
    const id =req.params.id;
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

});

router.post('/',(req,res,next)=>{
    const cinemas = new Cinema({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        noseat:req.body.noseat
    });
    cinemas.save()
    .then(result =>{
        console.log(result);
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    })
});

router.put('/:id',(req,res,next)=>{
    const id = req.params.id;
    const cinema = new Cinema({
        name: req.body.name,
        noseat: req.body.noseat
    });
    Cinema.findOneAndUpdate({
            _id: id
        },cinema ,{new:true})
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

router.delete('/:id',(req,res,next)=>{
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
});


module.exports = router;