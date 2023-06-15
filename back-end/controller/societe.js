const societe = require('../Models/societe');

exports.addsociete =(req,res) =>{
    
    const newSociete = new societe({
        nom:req.body.nom,
        adress:req.body.adress,
        Ncontrat:req.body.Ncontrat,
        Nfacture:req.body.Nfacture,
        TVA:req.body.TVA,
      });
      newSociete.save()
      .then(()=>{
        res.status(201).json();
        console.log("societe created!!");
      })
      .catch((error) =>{
        res.status(400).json(error)
      });
    
};

exports.UpdateSociete =(req,res) =>{
    
}