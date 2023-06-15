const mongoose = require ('mongoose');
const societeSchema = mongoose.Schema({
    nom:{type:String},
    adress:{type:String},
    Ncontrat:{type:String},
    Nfacture:{type:String},
    TVA:{type:String},
    Description:{type:String},
    Anneé:{type:String}
});

module.exports = mongoose.model('societe',societeSchema);