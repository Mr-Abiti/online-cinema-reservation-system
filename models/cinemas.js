const mongoose = require('mongoose');

const cinemaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String
});

module.exports = mongoose.model('Cinema',cinemaSchema);