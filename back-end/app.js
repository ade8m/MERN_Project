const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const societeRoute = require('./Routes/societe');
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

app.use("/",societeRoute);






//Create Server

app.listen(3001,()=>{ 
    connect();
    console.log('Server is running on port 3001');
});