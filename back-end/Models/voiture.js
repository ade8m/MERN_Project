const mongoose = require ('mongoose');

const voitureSchema = mongoose.Schema({
    matricule:{type:Number},
    type:{type:String},
    model: { type: String }, 
    color: { type: String }, 
    Nassurrance:{type:Number},
    Nvig:{type:Number},
    Nlaiss:{type:Number},
    disponibilite:{type:String}
});

module.exports = mongoose.model('Voiture',voitureSchema);