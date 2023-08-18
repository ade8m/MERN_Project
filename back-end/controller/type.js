const Type = require("../Models/type");

exports.getTypes =(req,res)=>{

    Type.find()
    .then((module)=>{
        res.status(200).json(module);
        console.log("Type get success");
    })
    .catch((error)=>{
        res.status(401).json(error)
        console.log('failed!!');
    })
};