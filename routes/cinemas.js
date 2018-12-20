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
    res.status(200).json({
        message:'cinema route'
     });

});

router.post('/',(req,res,next)=>{
    const cinemas = new Cinema({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
    });
    cinemas.save()
        .then(result => console.log(result))
        .catch(err => console.log(err))
    res.status(201).json({
        message: 'movie is created',
        cinemas: cinemas
    });
});

router.put('/',(req,res,next)=>{

});

router.delete('/:id',(req,res,next)=>{

});

router.patch('/:id',(req,res,next)=>{

});

module.exports = router;