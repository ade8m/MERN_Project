const societe = require('../Models/societe');

exports.addsociete =(req,res) =>{

  
    
    const newSociete = new societe({
        nom:req.body.nomS,
        adress:req.body.adressS,
        Ncontrat:req.body.numcontrat,
        Nfacture:req.body.numfacture,
        TVA:req.body.tva,
        Description:req.body.description,
        Anneé:req.body.annee

      });
     
      newSociete.save()
      .then(()=>{
        res.status(200).json(newSociete);
        console.log("societe created!!");
      })
      .catch((error) =>{
        res.status(400).json(error)
      });
    
};


exports.UpdateSociete = (req, res) => {
  const { id } = req.params;
  const { nom, adress, Ncontrat, Nfacture, tva,Description,Anneé} = req.body;

  societe
    .findOneAndUpdate({ _id: id }, { nom, adress, Ncontrat, Nfacture,Description ,Anneé,TVA: tva })
    .then((result) => {
      res.status(200).json(result);
      console.log('Societe updated successfully' );
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

exports.DeleteSociete =(req,res) =>{
  societe.deleteOne({_id: req.params.id})
  .then((result) =>{
      res.status(200).json(result);
    console.log('delete societed !!');
  })
  .catch((error) => {
    res.status(400).json(error);
  });
};

exports.getSociete = (req,res) =>{
societe.find()
.then((result) =>{
  res.status(200).json(result);
  console.log('get societe successeflly !!');
})
.catch((error) => {
  res.status(400).json(error);
});
};
