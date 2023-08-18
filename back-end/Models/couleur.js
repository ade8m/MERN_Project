const mongoose =require('mongoose');
const colorSchema = mongoose.Schema({

    color:{type:String,
       unique:true }

});
module.exports = mongoose.model('couleur',colorSchema);