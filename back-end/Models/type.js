const mongoose = require('mongoose');
const typeSchema = mongoose.Schema({

    type:{type:String,
        unique:true}

});
module.exports = mongoose.model('Type',typeSchema);