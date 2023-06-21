const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    Email :{type:String,unique:true},
    password:{type:String ,minlength: 6},
    Nom:{type:String},
    isAdmin:  {
        type: Boolean,
        default: false,
        required: true,
      },

}); 
module.exports = mongoose.model('User',UserSchema);