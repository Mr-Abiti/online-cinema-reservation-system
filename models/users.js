const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        first_name:String,
        midle_name:String,
        last_name:String
    },
    address:{
        region:String,
        city:String,
        Sub_citr:String,
        Streat_num:String
    },
    contact:{
        email:String,
        phone_num:String
    }
});

module.exports = mongoose.model('User',userSchema);