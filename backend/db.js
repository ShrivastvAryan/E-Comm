const mongoose=require('mongoose');

const URI=process.env.MONOGODB_URI

const connectDb=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection is successful")
    } catch (error) {
        console.log("Failed to connect",error);
        process.exit(0);
    }
}

module.exports(connectDb);