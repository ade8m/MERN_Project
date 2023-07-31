const societe = require('../Models/location');


exports.UpdateSociete = (req, res) => {
  const { id } = req.params;
  const { nom, adress, Ncontrat, Nfacture, tva,Description,Anneé} = req.body;

  societe
    .findByIdAndUpdate({ _id: id }, { nom, adress, Ncontrat, Nfacture,Description ,Anneé,TVA: tva })
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

exports.getSocieteNom =(req,res) =>{
  const {nomS} =req.params
  societe.findOne({nom:nomS})
  .then((result) =>{
    res.status(200).json(result);
    console.log('get societe successeflly !!');
  })
  .catch((error) => {
    res.status(400).json(error);
  });
};