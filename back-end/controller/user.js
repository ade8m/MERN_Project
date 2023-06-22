const user = require('../Models/user');

exports.getAll =(req,res)=>{
  
    user.find()
    .then((users) => {
        res.status(200).json(users);
        console.log('get all user !!');
    })
    .catch((error)=>{
        res.status(401).json(error)
        console.log('failed!!');
    })
};

exports.UpdateUser =(req,res)=>{
    const {id} = req.params;
    const{Nom,password,Email} = req.body;

    user.findOneAndUpdate({_id :id},{Nom,password,Email})
    .then((result)=>{
        res.status(200).json(result)
        console.log('usr updated!!');
    })
    .catch((error)=>{
        res.status(401).json(error)
        console.log('usr dont updated!!');
    })
};

exports.getUser = (req,res) =>{
    user.findOne({_id: req.params.id})
    .then((result) =>{
      res.status(200).json(result);
      console.log('get user successeflly !!');
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

exports.DeleteUser =(req,res) =>{
    
    user.deleteOne({_id: req.params.id})
    .then((result) =>{
        res.status(200).json(result);
      console.log('delete societed !!');
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log('failed to delete!!')
    });
  };
  