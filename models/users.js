const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    _id : String,
    user_id : String,
    pswd : String,
    dob : String
});

module.exports = mongoose.model('user',userSchema);