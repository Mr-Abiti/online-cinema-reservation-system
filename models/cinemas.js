const mongoose = require('mongoose');

const cinemaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    noseat: Number
});

module.exports = mongoose.model('Cinema', cinemaSchema);