const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const societeRoute = require('./Routes/societe');
const voitureRoute = require('./Routes/voiture');
const AuthRoute = require('./Routes/auth');
const userRoute = require('./Routes/user');
const app = express();
require('dotenv').config();

const connect = async () =>{ 
    try{
        
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB.")
    }   catch (error){
        throw error;
    }
    };

// midellware
app.use(bodyParser.json());
app.use(express.json());
app.use(
    cors({
      origin: 'http://localhost:3000', // Specify the origin URL of your frontend application
      optionsSuccessStatus: 200, // Return 200 for preflight requests
      credentials: true, // Enable CORS with credentials (e.g., cookies, authorization headers)
    })
  );
  


 
app.use("/voiture",voitureRoute);
app.use("/auth",AuthRoute);
app.use("/api",userRoute);







//Create Server

app.listen(3001,()=>{ 
    connect();
    console.log('Server is running on port 3001');
});