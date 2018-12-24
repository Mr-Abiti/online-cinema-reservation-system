const mongoose = require('mongoose');

const reservSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.ObjectId,
        ref: 'User',
        required: true
    },
    cinema: {
        type: mongoose.ObjectId,
        ref: 'Cinema',
        required: true
    },
    movie: {
        type: mongoose.ObjectId,
        ref: 'Movie',
        required: true
    }


});

module.exports = mongoose.model('reserv', reservSchema);