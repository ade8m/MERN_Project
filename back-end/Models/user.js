const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    Email :{type:String,unique:true},
    password:{type:String ,minlength: 6},
    Nom:{type:String},
    isAdmin: Boolean

});
module.exports = mongoose.model('User',UserSchema);