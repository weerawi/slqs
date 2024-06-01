const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const multer  = require('multer');
const path  = require("path");
const cors  = require("cors");
const { error } = require("console");
const { title } = require("process");

app.use(express.json());
app.use(cors());


//make db connection (asynchoronoulsy)
mongoose.connect('mongodb+srv://slqseng:Password@cluster0.gfcqong.mongodb.net/slqseng',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.send("Express App is Running")
})
  

// Common image storage engine & Creating upload endpoint for images  
const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
  });
  
  const upload = multer({ storage: Storage });
  
  app.use('/images', express.static('upload/images'));
  
  app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
  });


///////////////////// CSR /////////////////////

// CSR image storage engine
const csrStorage = multer.diskStorage({
    destination: './csr/csrimages',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const csrupload = multer({ storage: csrStorage });

// Creating upload endpoint for csrimages
app.use('/csrimages', express.static('csr/csrimages'));

app.post("/csrupload", csrupload.array('album', 10), (req, res) => {
    const image_urls = req.files.map(file => `http://localhost:${port}/csrimages/${file.filename}`);
    res.json({
        success: 1,
        image_urls: image_urls
    });
});

// Define the CsrProduct model
const CsrProduct = mongoose.model("csrproduct", {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    stitle: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: String, required: true },
    album: { type: Array, required: true }
});



// Define the endpoint for adding CSR products
app.post('/csraddproducts', async (req, res) => {
    try {
      let products = await CsrProduct.find({});
      let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
  
      const csrproduct = new CsrProduct({
        id: id,
        title: req.body.title,
        stitle: req.body.stitle,
        image: req.body.image,
        date: req.body.date,
        album: req.body.album,
      });
  
      await csrproduct.save();
      res.json({ success: true, title: req.body.title });
    } catch (error) {
      console.error('Error adding CSR product:', error);
      res.status(500).json({ success: false, error: 'Failed to save CSR product' });
    }
  });


 

// Creating API for deleting csr products
app.post('/removecsrproduct', async (req, res) => {
    await CsrProduct.findOneAndDelete({ id: req.body.id });
    console.log("Removed csr product");
    res.json({
        success: 1,
        title: req.body.title
    });
});

// Creating API for getting csr products
app.get('/csrallproducts', async (req, res) => {
    let csrproducts = await CsrProduct.find({});
    console.log("All products Fetched.");
    res.send(csrproducts);
});

 


///////////////// GALLERY  //////////////////////////


// Gallery image storage engine
const galleryStorage = multer.diskStorage({
    destination: './gallery/galimages',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const galleryupload = multer({ storage: galleryStorage });



// creating upload endpoint for galleryimages

app.use('/galimages',express.static('gallery/galimages'))

app.post("/galupload", galleryupload.array('album',10), (req, res) => { 
    const image_urls = req.files.map(file => `http://localhost:${port}/galimages/${file.filename}`);
    res.json({
        success: 1,
        image_urls: image_urls
    });
});


//Schema for creating GALLERY products

const GalleryProduct = mongoose.model("galleryproduct", {
    id: { type: Number, required: true },
    title: { type: String, required: true }, 
    image: { type: String, required: true },
    date: { type: String, required: true },
    album: { type: Array, required: true }
      
})
 
//creating API for adding gallery products

app.post('/galaddproducts',async (req,res)=>{

    try{
        let products = await GalleryProduct.find({});
        let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

        const galproduct = new GalleryProduct({
            id: id,
            title: req.body.title, 
            image: req.body.image,
            date: req.body.date,
            album: req.body.album,
        })

        await galproduct.save();
        res.json({success:true,title:req.body.title});

    }catch(error){
        console.error('Error adding Gallery product:', error);
        res.status(500).json({ success: false, error: 'Failed to save Gallery product' });
    }
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

//creating API for getting gallery products

app.get('/galallproducts',async (req,res)=>{
    let galproducts = await GalleryProduct.find({});
    console.log("All products Fetched.")
    res.send(galproducts);
})


/////////////////////////////////////////////////






app.listen(port,(err)=>{
    if(!err){
        console.log(`Server is running at port ${port}`);
    }else{
        console.log("Error: "+ err)
    }
})