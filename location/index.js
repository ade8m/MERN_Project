const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
require('dotenv').config();
const societeR = require('./routes/societe');


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

app.use("/societe",societeR);


app.listen(2000,()=>{
    console.log('server running in 2000')
    connect()
});
