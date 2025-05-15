require("dotenv").config(); // compulsory for .env file
const express=require('express');
const connectDb=require('./db')
const app=express();
const PORT=5000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`)
    });
});

