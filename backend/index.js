const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer  = require('multer');
const path  = require("path");
const cors  = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://slqseng:Password@cluster0.gfcqong.mongodb.net/slqseng')


app.get("/",(req,res)=>{
    res.send("Express App is Running")
})


// CSR image storage engine
const csrStorage = multer.diskStorage({
    destination: './csr/csrimages',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const csrupload = multer({ storage: csrStorage });

// Gallery image storage engine
const galleryStorage = multer.diskStorage({
    destination: './gallery/galimages',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const galleryupload = multer({ storage: galleryStorage });


// creating upload endpoint for csrimages

app.use('/csrimages',express.static('csr/csrimages'))

app.post("/csrupload", csrupload.single('csrproduct'), (req, res) => {
    res.json({
        success:1,
        image_url:`http://localhost:${port}/csrimages/${req.file.filename}`}
    );
});
// creating upload endpoint for galleryimages

app.use('/galimages',express.static('gallery/galimages'))

app.post("/galupload", galleryupload.single('galproduct'), (req, res) => {
    res.json({
        success:1,
        image_url:`http://localhost:${port}/galimages/${req.file.filename}`}
    );
});


//Schema for creating products

const CsrProduct = mongoose.model("csrproduct", {
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    stitle:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }, 
    date:{
        type:Date,
        default:Date.now
    },
    album:{
        type:Array,
        required:true
    }
      
})


//Schema for creating products

const GalleryProduct = mongoose.model("galleryproduct", {
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }, 
    date:{
        type:Date,
        default:Date.now
    },
    album:{
        type:Array,
        required:true
    }
      
})



//creating API for getting csr products

app.get('/csrproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All products Fetched.")
    res.send(products);
})


//creating API for getting gallery products

app.get('/galleryproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All products Fetched.")
    res.send(products);
})



app.listen(port,(err)=>{
    if(!err){
        console.log(`Server is running at port ${port}`);
    }else{
        console.log("Error: "+ err)
    }
})