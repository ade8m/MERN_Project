const express = require('express');
const app = express();
const mongoose = require ('mongoose');
require('dotenv').config();


const connect = async () =>{ 
    try{
        
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB.")
    }   catch (error){
        throw error;
    }
    };

app.listen(2000,()=>{
    console.log('server running in 2000')
    connect()
});
