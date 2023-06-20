const mongoose = require ('mongoose');
const color = require('./couleur');
const Model = require('./model');
const voitureSchema = mongoose.Schema({
    matricule:{type:String,unique:true},
    type:{type:String,unique:true},
    Model:{ type: mongoose.Schema.Types.ObjectId, ref: 'Model' },
    couleur:{ type: mongoose.Schema.Types.ObjectId, ref: 'Color' },
    Nassurrance:{type:String,unique:true},
    Nvig:{type:String,unique:true},
    Nlaiss:{type:String,unique:true},
    disponibilite:{type:String}
});

module.exports = mongoose.model('voiture',voitureSchema);