require("dotenv").config(); 
const express=require('express');
const app=express();
const PORT=5000;
const multer =require("multer");
const path=require('path');
const cors=require('cors');
const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());

//Database Connection with MongoDb

mongoose.connect(process.env.MONGODB_URI)

app.get('/healthcheck',(req,res)=>{
    res.json 
    ({
        success:true,
        message:"Backend is working"
    })
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
app.use('/images',express.static('upload'));

app.post("/upload",upload.single('product'),(req,res)=>{
   res.json({
    success:1,
    image_url:`https://e-comm-z0ij.onrender.com/images/${req.file.filename}`
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
    cloth_type:{
        type:String,
        required:true,
    },
    description:{
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
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        cloth_type:req.body.cloth_type,
        description:req.body.description,
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

app.post("/addcart", async (req, res) => {

  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const product = await Product.findOne({ id });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error in /addcart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//Creating API for getting all products

app.get("/allproducts",async(req,res)=>{
    let products=await Product.find({});
    console.log("All products fetched");

    res.send(products);
})

//Creating API for getting women,men, kids products

app.get('/menproduct',async(req,res)=>{
    try {
        let products=await Product.find({category:"men"});
        console.log("men product fetched")
        res.send(products)
    } catch (error) {
        res.status(500).send({error:"Internal server error"})
    }
})

app.get('/:category/products', async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category });
    res.send(products);
  } catch (err) {
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.get('/:category/products/:id', async (req, res) => {
  const { category, id } = req.params;
  try {
   const product = await Product.findOne({ id: id, category: category });
    if (!product) return res.status(404).send({ error: 'Product not found' });
    res.send(product);
  } catch (err) {
    res.status(500).send({ error: 'Internal server error' });
  }
});

//Schema creating for user Model

const Users=mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating endPoint for registering the User
app.post('/signup',async(req,res)=>{

    let check=await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,error:'existing user found with same email address'})
    }

    let cart={};
    for(let i=0; i<300 ;i++){
        cart[i]=0;
    };

    const user= new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data={
        user:{
            id:user.id
        }
    }

    const token=jwt.sign(data,'secret_ecom');
    res.json ({success:true,token})


})

//Creating EndPoint for User Login
app.post('/login', async (req, res) => {
    const user = await Users.findOne({ email: req.body.email });

    if (!user) {
        return res.json({ success: false, error: "User not found" });
    }

    const passCompare = req.body.password === user.password; // use bcrypt in production

    if (!passCompare) {
        return res.json({ success: false, error: "Wrong password" });
    }

    const data = {
        user: {
            id: user.id
        }
    };

    const token = jwt.sign(data, 'secret_ecom');
    return res.json({ success: true, token });
});

//creating end point for new collection
app.get('/newcollections',async(req,res)=>{
    let products=await Product.find({});
    let newCollection=products.slice(1).slice(-8);
    console.log("New collection fetched");
    res.send(newCollection);
})

//creating end point for popular in women,men and kids
app.get('/popularwomen',async(req,res)=>{
    let products=await Product.find({category:"women"})
    let popularwomen=products.slice(0,4)
    console.log("popular in women fetched")
    res.send(popularwomen)
})

app.get('/popularmen',async(req,res)=>{
    let products=await Product.find({category:"men"})
    let popularmen=products.slice(0,4)
    console.log("popular in men fetched")
    res.send(popularmen)
})

app.get('/popularkids',async(req,res)=>{
    let products=await Product.find({category:"kids"})
    let popularkids=products.slice(0,4)
    console.log("popular in kids fetched")
    res.send(popularkids)
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
