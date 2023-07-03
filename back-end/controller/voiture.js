const voiture = require('../Models/voiture');
const Color = require('../Models/couleur');
const Model = require('../Models/model');


exports.addVoiture = async (req, res) => {
 

   
    const newVoiture = new voiture({
      matricule:req.body.matricl,
      type:req.body.type,
      Nassurrance:req.body.assur,
      Nvig:req.body.vigni,
      Nlaiss:req.body.laispasse,
      disponibilite:req.body.dispo,  
      color:req.body.couleur,
      model:req.body.model,
    });

    
   newVoiture.save()

  .then(()=>{
    res.status(200).json(newVoiture);
    console.log("voiture created!!");
  })
  .catch((error) =>{
    res.status(400).json(error)
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
    .then(()=>{
        res.status(200).json(voiture);
        console.log('get success!!');
    })
    .catch((error) => {
        res.status(400).json({ error });
      });
};