const mongoose =require('mongoose');
const modelSchema = mongoose.Schema({

    model:{type:String}

});
module.exports = mongoose.model('Model',modelSchema);