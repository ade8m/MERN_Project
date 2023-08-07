const societe = require('../Models/societe');


exports.addOtherProperties = async (req, res) => {

  const { id } = req.params;
  const { Ncontrat, Nfacture, TVA, Description, Anneé } = req.body;

  try {
   
    const Societe = await societe.findById(id);

    if (!Societe) {
      return res.status(404).json({ error: 'Societee not found' });
    }

   
    Societe.Ncontrat = Ncontrat;
    Societe.Nfacture = Nfacture;
    Societe.TVA = TVA;
    Societe.Description = Description;
    Societe.Anneé = Anneé;

    
    await Societe.save();

    res.status(200).json({ message: 'Other properties added to societe successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



exports.UpdateSociete = (req, res) => {
  const { id } = req.params;
  const { nom, adress, Ncontrat, Nfacture, tva,Description,Anneé} = req.body;

  societe
    .findByIdAndUpdate({ _id: id },{ nom, adress, Ncontrat, Nfacture,Description ,Anneé,TVA: tva })
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