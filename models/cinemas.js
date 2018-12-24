const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    sub_city: {
        type: String
    },
    str_no: {
        type: String
    }

});

const cinemaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    address: addressSchema,
    no_of_seat: Number
});

module.exports = mongoose.model('Cinema', cinemaSchema);