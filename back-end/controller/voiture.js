const voiture = require('../Models/voiture');
const Color = require('../Models/couleur');
const Model = require('../Models/model');


exports.addVoiture = async (req, res) => {
  try {
    const { matricule, type, Nassurrance, Nvig, Nlaiss, disponibilite } = req.body;
    const colorName = req.body.colorName;
    const modelName = req.body.modelName;

    // Create the color if it doesn't exist
    let color = await Color.findOne({ name: colorName }).exec();
    if (!color) {
      color = new Color({ name: colorName });
      await color.save();
    }

    // Create the model if it doesn't exist
    let model = await Model.findOne({ name: modelName }).exec();
    if (!model) {
      model = new Model({ name: modelName });
      await model.save();
    }

    // Create the voiture object
    const newVoiture = new voiture({
      matricule,
      type,
      Nassurrance,
      Nvig,
      Nlaiss,
      disponibilite,
      color: color._id,
      model: model._id,
      colorName,
      modelName
    });

    // Save the voiture
    await newVoiture.save();

    res.status(200).json(newVoiture);
    console.log('Voiture created successfully!');
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.UpdateVoiture =(req,res) =>{

    const {id} = req.params;
    const {matricule,Nassurrance,Nlaiss,Nvig,couleur,type,Model,disponibilite} = req.body;

    voiture.updateOne({_id: id},{matricule,Nassurrance,Nlaiss,Nvig,couleur,type,Model,disponibilite})
    .then(()=>{
        res.status(200).json();
        console.log('voiture updated successfully' );
    })
    .catch((error) => {
        res.status(400).json({ error });
      });

};

exports.DeleteVoiture =(req,res) =>{

    voiture.deleteOne({_id: req.params.id})
    .then(() =>{
        res.status(200).json();
      console.log('voiture supprimer !!');
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
  };
exports.getVoiture =(req,res)=>{
    voiture.findOne({_id: req.params.id})
    .then(()=>{
        res.status(200).json(voiture);
        console.log('get success!!');
    })
    .catch((error) => {
        res.status(400).json({ error });
      });
};