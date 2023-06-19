const user = require('../Models/user');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');



const GenToken = (user) =>{
  const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.secret_key);
  return token;
};

exports.registre =(req,res) =>{

    const {password,Email,Nom} = req.body;
         if (password.length <6){
        res.status(400).json({message:"Password less than 6 characters"})
    }

    
bcrypt.hash(password,10).then(async (hash)=>{


        await user.create({
            password:hash,
             Email,
              Nom,
         })
         .then((user) =>{
            const token = GenToken(user);
            res.status(200).json({
                message: "User successfully created",
                user,
                token,
            });
          })
         .catch((error) =>
         res.status(400).json({
           message: "User not successful created",
           error: error.message,
         })
       );
        }
)
};

exports.login =  (req, res) => {

    const { Nom, password } = req.body;
    
    if (!Nom || !password) {
      return res.status(400).json({
        message: "Name or password not provided",
      });
    }
    
    try {
      const usr =  user.findOne({ Nom });
      
      if (!usr) {
        return res.status(400).json({
          message: "Login not successful",
          error: "User not found",
        });
      }
      
      bcrypt.compare(password, usr.password)
        .then((result) => {
          if (result) {
            res.status(200).json({ message: "Login successful!" });
          } else {
            res.status(400).json({ message: "Incorrect password" });
          }
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error.message,
          });
        });
    } catch (error) {
      res.status(500).json({
        message: "An error occurred",
        error: error.message,
      });
    }
  };
  
