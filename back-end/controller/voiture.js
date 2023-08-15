const voiture = require('../Models/voiture');
const Color = require('../Models/couleur');
const Model = require('../Models/model');

exports.addVoiture = async (req, res) => {
  const societeId = req.body.societeId;

  const newColor = new Color({
    color: req.body.couleur
  });

  const newModel = new Model({  
    model: req.body.model
  });

  const newVoiture = new voiture({
    matricule: req.body.matricl,
    type: req.body.type,
    Nassurrance: req.body.assur,
    Nvig: req.body.vigni,
    Nlaiss: req.body.laispasse,
    disponibilite: req.body.dispo,
    societe: societeId,
    color: req.body.couleur,
    model: req.body.model
  });
  Promise.all([
    newColor.save(),
    newModel.save(),
    newVoiture.save()
  ])
    .then((results) => {
      res.status(200).json(results[2]); // Return the saved voiture document
      console.log("voiture created!!");
    })
    .catch((error) => {
      res.status(400).json(error);
    });
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
    .then((voiture)=>{
        res.status(200).json(voiture);
        console.log('get success!!');
    })
    .catch((error) => {
        res.status(400).json({ error });
      });
};
exports.getVoitureS =(req,res) =>{
const {societeId} = req.params;

voiture.find({ societe: societeId })
  .then((result) => {
  res.status(200).json(result);
  console.log('get all voiture');
})
.catch((error) => {
  res.status(400).json({ error });
});
};

exports.getVoitureByAvailability = (req, res) => {
  const { availability } = req.params;

  voiture.find({ disponibilite: availability })
    .then((voitures) => {
      if (!voitures) {
        return res.status(404).json({ message: `No available voiture with ${availability} status found` });
      }

      res.status(200).json(voitures);
      console.log(`Get ${availability} voiture list!!`);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
