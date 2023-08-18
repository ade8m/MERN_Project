const mongoose =require('mongoose');
const modelSchema = mongoose.Schema({

    model:{type:String,
        unique:true}

});
module.exports = mongoose.model('Model',modelSchema);