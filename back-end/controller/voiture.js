const voiture = require('../Models/voiture');
const color = require('../Models/couleur');




exports.addVoiture =(req,res)=>{
    const NewVoiture = new voiture({
        matricule:req.body.matricule,
        type:req.body.type,
        Model:req.body.Model,
        couleur:req.body.couleur,
        Nassurrance:req.body.Nassurrance,
        Nvig:req.body.Nvig,
        Nlaiss:req.body.Nlaiss,
        disponibilite:req.body.disponibilite,
    });
    NewVoiture.save()
    .then(()=>{
        res.status(200).json(NewVoiture);
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