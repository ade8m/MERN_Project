const mongoose =require('mongoose');
const colorSchema = mongoose.Schema({

    color:{type:String
        }

});
module.exports = mongoose.model('couleur',colorSchema);