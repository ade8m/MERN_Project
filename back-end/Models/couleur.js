const mongoose =require('mongoose');
const colorSchema = mongoose.Schema({

    Nom:{type:String,
        unique:true}

});
module.exports = mongoose.model('couleur',colorSchema);