const Model = require("../Models/model");

exports.getModels =(req,res)=>{

    Model.find()
    .then((module)=>{
        res.status(200).json(module);
        console.log("model get success");
    })
    .catch((error)=>{
        res.status(401).json(error)
        console.log('failed!!');
    })
};