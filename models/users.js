const mongoose = require('mongoose');

const nameSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    mid_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    }

});

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
const contactSchema = mongoose.Schema({
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // match:/
    }

});

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: nameSchema,
    address: addressSchema,
    contact: contactSchema,
    password: {
        type: String,
        required: true
    }

});


module.exports =  mongoose.model('User',userSchema);
