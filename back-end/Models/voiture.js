const mongoose = require ('mongoose');
const voitureSchema = mongoose.Schema({
    matricule:{type:String},
    type:{type:String},
    Model:{type:String},
    couleur:{type:String},
    Nassurrance:{type:String},
    Nvig:{type:String},
    Nlaiss:{type:String},
    disponibilite:{type:String}
});

module.exports = mongoose.model('voiture',voitureSchema);