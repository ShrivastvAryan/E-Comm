require("dotenv").config(); // compulsory for .env file
const express=require('express');
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

//Schema for creating Products

const Product=mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post ('/addproduct',async(req,res)=>{
    let products=await Product.find({});
    let id;
    if(product.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id:1;
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });

    console.log(product);

    await product.save();
    console.log("saved");

    res.json({
        success:true,
        name:req.body.name,
    })
});

//Creating API for deleting product
app.post("/removeproduct",async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//Creating API for getting all products

app.get("/allproducts",async(req,res)=>{
    let products=await Product.find({});
    console.log("All products fetched");

    res.send(products);
})

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
