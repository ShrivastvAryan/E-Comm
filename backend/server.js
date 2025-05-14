const express=require('express');
const mongoDb=require('./db')
const app=express();
const PORT=5000;

mongoDb.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`)
    });
});

