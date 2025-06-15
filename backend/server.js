require("dotenv").config(); // compulsory for .env file
const express=require('express');
const connectDb=require('./db')
const app=express();
const PORT=5000;
const multer =require("multer");
const path=require('path');
const cors=require('cors');
const mongoose=require('mongoose');


app.use(express.json());
app.use(cors());

//Database Connection with MongoDb

mongoose.connect('mongodb+srv://asguy29:aryan290605@carcluster.nvwibz1.mongodb.net/?retryWrites=true&w=majority&appName=CarCluster')


//API creation 

app.get("/",(req,res)=>{
    res.send("Express App is running")
})
;
app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server is running successfully at ${PORT}`)
    }
    else{
        console.log(error);
    }
})

//Image storage Engine 

const storage= multer.diskStorage({
    destination:'./upload',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload=multer({storage:storage})

//Creating upload endpoint for images
app.use('/images',express.static('upload/images'));

app.post("/upload",upload.single('product'),(req,res)=>{
   res.json({
    success:1,
    image_url:`http://localhost:${PORT}/images/${req.file.filename}`
   })
});
