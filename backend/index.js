const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const multer  = require('multer');
const path  = require("path");
const cors  = require("cors"); 

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

app.post("/csrupload", csrupload.array('album', 30), (req, res) => {
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


// Define the endpoint for updating CSR products
app.put('/csrupdateproduct', async (req, res) => {
    try {
        const { id, title, stitle, image, date} = req.body;
        const updatedProduct = await CsrProduct.findOneAndUpdate(
            { id },
            { title, stitle, image, date},
            { new: true }
        );
        if (updatedProduct) {
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false, error: 'Product not found' });
        }
    } catch (error) {
        console.error('Error updating CSR product:', error);
        res.status(500).json({ success: false, error: 'Failed to update CSR product' });
    }
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

app.post("/galupload", galleryupload.array('album',30), (req, res) => { 
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

// Creating API for updating gallery products
app.put('/galupdateproduct', async (req, res) => {
    try {
        const { id, title, image, date, album } = req.body;
        const updatedProduct = await GalleryProduct.findOneAndUpdate(
            { id },
            { title, image, date, album },
            { new: true }
        );
        if (updatedProduct) {
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false, error: 'Product not found' });
        }
    } catch (error) {
        console.error('Error updating Gallery product:', error);
        res.status(500).json({ success: false, error: 'Failed to update Gallery product' });
    }
});



////////////////////// ARTICLE ///////////////////////////


// Article image storage engine
const articleStorage = multer.diskStorage({
    destination: './article/artcleimages',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const articleupload = multer({ storage: articleStorage });



app.use('/articleimages',express.static('/article/articleimages'));

//when articleupload testing this below 'image' is the file name for thunderclient 
app.post("/articleupload", articleupload.single('image'), (req, res) => {
    res.json({
        success: 1,
        image_urls: `http://localhost:${port}/articleimages/${req.file.filename}`
    });
});



// Define the article data model
const ArticleData = mongoose.model("articledata", {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true } 
});


// Define the endpoint for adding article data

app.post('/articleaddproducts', async (req, res) => {
    try {
      let products = await ArticleData.find({});
      let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
  
      const articledata = new ArticleData({
        id: id,
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
      });
  
      await articledata.save();
      res.json({ success: true, title: req.body.title });
    } catch (error) {
      console.error('Error adding article data:', error);
      res.status(500).json({ success: false, error: 'Failed to save article data' });
    }
  }
);


// Creating API for deleting article data
app.post('/removearticledata', async (req, res) => {
    await ArticleData.findOneAndDelete({id:req.body.id});
    console.log("Removed article data");
    res.json({
        success:1,
        title:req.body.title
    });
});


// Creating API for getting article data
app.get('/articlealldata', async (req, res) => {
    let articledata = await ArticleData.find({});
    console.log("All article data Fetched.");
    res.send(articledata);
});


// Define the endpoint for updating Article products
app.put('/articleupdateproducts', async (req, res) => {
    try {
        const { id, title, description, image } = req.body;
        const updatedProduct = await ArticleData.findOneAndUpdate(
            { id },
            { title,description, image},
            { new: true }
        );
        if (updatedProduct) {
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false, error: 'Article not found' });
        }
    } catch (error) {
        console.error('Error updating Article product:', error);
        res.status(500).json({ success: false, error: 'Failed to update Article' });
    }
});




////////////////////// USERS /////////////////////////

 

const User = mongoose.model("user", {
    id: { type: Number, required: true },
    name: { type: String, required: true }, 
    email: { type: String, required: true },
    password: { type: String, required: true }  
})



//creating API for user registration
app.post("/addusers", async (req, res) => { 
    try {
        let users  = await User.find({});
        let id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    
        const user = new User({
          id: id,
          name: req.body.name, 
          email: req.body.email,
          password: req.body.password 
        });
    
        await user.save();
        res.json({ success: true, title: req.body.title });
      } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ success: false, error: 'Failed to save User' });
      }
});


// Creating API for getting user data
app.get('/allusers', async (req, res) => {
    let userdata = await User.find({});
    console.log("All user data Fetched.");
    res.send(userdata);
});


// Creating API for deleting user
app.post('/removeuser', async (req, res) => {
    await User.findOneAndDelete({id:req.body.id});
    console.log("Removed user");
    res.json({
        success:1,
        title:req.body.title
    });
});


//creating endpoint for User Login
app.post('/login', async (req, res) => {
    const defaultUser = {
        email: "slqs-eng@kuwait.com",
        password: "Slqs-Eng1234",
        id: "0"
    };

    if (req.body.email === defaultUser.email && req.body.password === defaultUser.password) {
        // Generate token for default user
        const data = {
            user: {
                id: defaultUser.id
            }
        };
        const token = jwt.sign(data, "secrete_ecom");
        res.json({
            success: true,
            token
        });
        return;
    }

    // If not default user, proceed with normal login process
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id,
                }
            }
            const token = jwt.sign(data, "secrete_ecom");
            res.json({
                success: true,
                token
            });
        } else {
            res.json({
                success: false,
                errors: "Wrong Password"
            })
        }
    } else {
        res.json({
            success: false,
            errors: "Wrong Email"
        })
    }
});


// Middleware to verify JWT token
// const authenticateToken = (req, res, next) => {
//     const token = req.headers['authorization'];
//     if (!token) return res.sendStatus(401);
  
//     jwt.verify(token, 'secrete_ecom', (err, user) => {
//       if (err) return res.sendStatus(403);
//       req.user = user;
//       next();
//     });
//   };

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) {
      return res.status(401).send({ errors: "Authentication failed! Please authenticate using a valid TOKEN" });
    }
    try {
      const data = jwt.verify(token, 'secrete_ecom');
      req.user = data.user;
      next();
    } catch (errors) {
      return res.status(401).send({ errors: "Authentication failed! Please authenticate using a valid PROFILE" });
    }
  };
  
  // Protected endpoint to fetch user data
  app.get('/loggeduser', authenticateToken, async (req, res) => {
    const userId = req.user.id;
    try {
      const userData = await User.findOne({ id: userId }).select('-password');
      if (!userData) {
        return res.status(404).send({ errors: 'User not found' });
      }
      res.json(userData);
    } catch (error) {
      res.status(500).send({ errors: 'Server error' });
    }
  });


//   app.put('/userupdate', async (req, res) => {
//     try {
//         const { id, name,email,password} = req.body;
//         const updatedProduct = await CsrProduct.findOneAndUpdate(
//             { id },
//             { name,email,password},
//             { new: true }
//         );
//         if (updatedProduct) {
//             res.json({ success: true });
//         } else {
//             res.status(404).json({ success: false, error: 'User not found' });
//         }
//     } catch (error) {
//         console.error('Error updating User:', error);
//         res.status(500).json({ success: false, error: 'Failed to update User details' });
//     }
// });


/////////////////////// CONTACT //////////////////////////

const Contact = mongoose.model('contact',{
    id: { type: Number, required: true },
    name: { type: String, required: true }, 
    email: { type: String, required: true }, 
    subject: { type: String, required: true }, 
    message: { type: String, required: true }, 
})



//creating API for contact us
app.post("/contactus", async (req, res) => { 
    try {
        let contactus  = await Contact.find({});
        let id = contactus.length > 0 ? contactus[contactus.length - 1].id + 1 : 1;
    
        const contact = new Contact({
          id: id,
          name: req.body.name, 
          email: req.body.email,
          subject: req.body.subject ,    
          message: req.body.message ,    
        });
    
        await contact.save();
        res.json({ success: true, title: req.body.title });
      } catch (error) {
        console.error('Error adding contact:', error);
        res.status(500).json({ success: false, error: 'Failed to save contact' });
      }
});


// Creating API for getting user data
app.get('/allcontacts', async (req, res) => {
    let contact = await Contact.find({});
    console.log("All user data Fetched.");
    res.send(contact);
});


//creating API for delete contact response
app.post('/removecontact', async(req,res)=> {
    await Contact.findOneAndDelete({id:req.body.id});
    console.log("Remove contact response");
    res.json({
        success:1,
        
    })
})


////////////////// SLIDER IMAGES /////////////////////////
const Slider = mongoose.model('Slide',{
    title: { type: String, required: true },
    image: { type: String, required: true }, 
    date: { type: String, required: true },
});


//creating API for adding slider images
app.post('/sliderimageadd',async (req,res)=>{

    try{
        let slider = await Slider.find({});
        let id = slider.length > 0 ? slider[slider.length - 1].id + 1 : 1;

        const slide = new Slider({
            id: id,
            title: req.body.title, 
            image: req.body.image ,
            date: req.body.date,
        })

        await slide.save();
        res.json({success:true,title:req.body.title});

    }catch(error){
        console.error('Error adding Slider image:', error);
        res.status(500).json({ success: false, error: 'Failed to save Slider image' });
    }
})


app.get('/allsliderimages',async(req,res)=> {
    let sliders = await Slider.find({});
    console.log("All slider images fetched");
    res.send(sliders);
})

app.post('/removesliderimage',async(req,res)=> {
    await Slider.findOneAndDelete({id:req.body.id});
    console.log("Remove slider image");
    res.json({
        success:1,
        title:req.body.title
    });
})

//define endpoints for updatinf slider images
app.put('/updatesliderimage',async(req,res)=>{
    try{
        const {id,title,image,date} = req.body;
        const updatedSlider = await Slider.findOneAndUpdate(
            {id},
            {title,image,date},
            {new:true}
        );
        if(updatedSlider){
            res.json({success:true});
        }else{
            res.status(404).json({success:false,error:'Slider not found'});
        }
    }catch(error){
        console.error('Error updating Slider image:', error);
        res.status(500).json({ success: false, error: 'Failed to update Slider image' });
    }
})

/////////////////////////////////////////////////



app.listen(port,(err)=>{
    if(!err){
        console.log(`Server is running at port ${port}`);
    }else{
        console.log("Error: "+ err)
    }
})