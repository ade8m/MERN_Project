const Color = require('../Models/couleur');

exports.getColor =(req,res) =>{

    Color.find()
    .then((color)=>{
        res.status(200).json(color);
        console.log("color get success");
    })
    .catch((error)=>{
        res.status(401).json(error)
        console.log('failed!!');
    })
};