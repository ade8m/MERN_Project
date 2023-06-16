const voiture = require('../Models/voiture');


exports.addVoiture =(req,res)=>{
    const NewVoiture = new voiture({
        matricule:req.body.matricule,
        type:req.body.type,
        Model:req.body.Model,
        couleur:req.body.couleur,
        Nassurrance:req.body.Nassurrance,
        Nvig:req.body.Nvig,
        Nlaiss:req.body.Nlaiss,
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
    const {matricule,Nassurrance,Nlaiss,Nvig,couleur,type,Model} = req.body;

    voiture.updateOne({_id: id},{matricule,Nassurrance,Nlaiss,Nvig,couleur,type,Model})
    .then(()=>{
        res.status(200).json();
        console.log('voiture updated successfully' );
    })
    .catch((error) => {
        res.status(400).json({ error });
      });

};