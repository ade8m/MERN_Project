const mongoose = require ('mongoose');

const color = require('./couleur');
const Model = require('./model');
const voitureSchema = mongoose.Schema({
    matricule:{type:String},
    type:{type:String},
    Model: { type: mongoose.Schema.Types.ObjectId, ref: 'Model' },
  modelName: { type: String }, // New field for storing model name
  couleur: { type: mongoose.Schema.Types.ObjectId, ref: 'Color' },
  colorName: { type: String }, // New field for storing color name
    Nassurrance:{type:String},
    Nvig:{type:String},
    Nlaiss:{type:String},
    disponibilite:{type:String}
});

module.exports = mongoose.model('voiture',voitureSchema);