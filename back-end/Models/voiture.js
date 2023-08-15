const mongoose = require ('mongoose');

const voitureSchema = mongoose.Schema({
    matricule:{type:String ,
             unique:true},
    type:{type:String},
    model: { type: String }, 
    color: { type: String }, 
    Nassurrance:{type:String},
    Nvig:{type:String},
    Nlaiss:{type:String},
    disponibilite:{type:String},
    societe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'societe' 
      }
});

module.exports = mongoose.model('Voiture',voitureSchema);