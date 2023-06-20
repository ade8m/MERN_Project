const mongoose =require('mongoose');
const modelSchema = mongoose.Schema({

    Model:{type:String,
        unique:true}

});
module.exports = mongoose.model('Model',modelSchema);