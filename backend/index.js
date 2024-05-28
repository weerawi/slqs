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


//////////////  CSR //////////////////////

//Schema for creating csr products

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


//creating API for adding csr products

app.post('/csraddproducts',async (req,res)=>{

    let csrproducts = await CsrProduct.find({});
    let id;
    if(csrproducts.length > 0){
        let last_csr_array = csrproducts.slice(-1);
        let last_csr = last_csr_array[0];
        id = last_csr.id + 1;
    }else{
        id = 1;
    }


    let csrproduct = await CsrProduct({
        id:id, 
        title:req.body.title,
        stitle:req.body.stitle,
        image:req.body.image,
        date:req.body.date,
        album:req.body.album

    });
    console.log(csrproduct)
    await csrproduct.save();
    console.log("csr save");
    res.json({
        success:true,
        title:req.body.title
    })
})

//Creating API for deleting csr products

app.post('/removecsrproduct',async (req,res)=>{
    await CsrProduct.findOneAndDelete({id:req.body.id});
    console.log("Removed csr product");
    res.json({
        success:1,
        title:req.body.title
    });
})




///////////////// GALLERY  //////////////////////////

//Schema for creating GALLERY products

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
 
//creating API for adding gallery products

app.post('/galaddproducts',async (req,res)=>{

    let galproducts = await GalleryProduct.find({});
    let id;
    if(galproducts.length > 0){
        let last_gal_array = galproducts.slice(-1);
        let last_gal = last_gal_array[0];
        id = last_gal.id + 1;
    }else{
        id = 1;
    }
    let galproduct = await GalleryProduct({
        id:id, 
        title:req.body.title,
        image:req.body.image,
        date:req.body.date,
        album:req.body.album
    });
    console.log(galproduct);
    await galproduct.save();
    console.log("gal  save");
    res.json({
        success:true,
        title:req.body.title
    })
})


//Creating API for deleting gallery products

app.post('/removegalproduct',async (req,res)=>{
    await GalleryProduct.findOneAndDelete({id:req.body.id});
    console.log("Removed gal product");
    res.json({
        success:1,
        title:req.body.title
    });
})




//creating API for getting csr products

app.get('/csrallproducts',async (req,res)=>{
    let csrproducts = await CsrProduct.find({});
    console.log("All products Fetched.")
    res.send(csrproducts);
})


//creating API for getting gallery products

app.get('/galallproducts',async (req,res)=>{
    let galproducts = await GalleryProduct.find({});
    console.log("All products Fetched.")
    res.send(galproducts);
})


app.listen(port,(err)=>{
    if(!err){
        console.log(`Server is running at port ${port}`);
    }else{
        console.log("Error: "+ err)
    }
})