const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

require('dotenv').config();

//Connect to dataBase
const dataBase = process.env.MONGO

const client = new MongoClient(dataBase);
client.connect();


module.exports= app;
//Create Server

app.listen(3001,()=>{ 
    console.log('Server is running on port 3001');
});