const mongoose =require('mongoose');
const modelSchema = mongoose.Schema({

    Nom:{type:String,
        unique:true}

});
module.exports = mongoose.model('Model',modelSchema);