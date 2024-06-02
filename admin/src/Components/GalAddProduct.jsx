import { useState } from "react"; 
import upload_area from '../assets/upload_area.svg';
 

const GalAddProduct = () => {
    const [image, setImage] = useState(null);
    const [albumImages, setAlbumImages] = useState([]);
    const [albumFileNames, setAlbumFileNames] = useState([]);
    const [galProductDetails, setGalProductDetails] = useState({
      title: "", 
      date: "",
    });
  
    const imageHandler = (e) => {
      setImage(e.target.files[0]);
    };
  
    const albumHandler = (e) => {
      setAlbumImages(e.target.files);
      setAlbumFileNames(Array.from(e.target.files).map(file => file.name));
    };
  
    const changeHandler = (e) => {
      setGalProductDetails({ ...galProductDetails, [e.target.name]: e.target.value });
    };
  
    const Add_Product = async () => {
      // Upload cover image
      let responseData;
      let formData = new FormData();
      formData.append('image', image);
  
      await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      }).then(res => res.json()).then((data) => {
        responseData = data;
      });
  
      // Upload album images
      let albumResponseData;
      let albumFormData = new FormData();
      for (let i = 0; i < albumImages.length; i++) {
        albumFormData.append('album', albumImages[i]);
      }
  
      await fetch('http://localhost:4000/galupload', {
        method: 'POST',
        body: albumFormData,
      }).then(res => res.json()).then((data) => {
        albumResponseData = data;
      });
  
      // Save product details in the database
      if (responseData.success && albumResponseData.success) {
        let product = {
          ...galProductDetails,
          image: responseData.image_url,
          album: albumResponseData.image_urls,
        };
  
        await fetch('http://localhost:4000/galaddproducts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        }).then(res => res.json()).then((data) => {
          if(data.success) {
            alert('CSR Album Added');
            setGalProductDetails({
              title: "",
              stitle: "",
              date: "",
            });  
            setImage(null);
            setAlbumImages([]);
            setAlbumFileNames([]);
          } else {
              alert('Album not added');
          }  
        });
      }
    };
  
    return (
      <div>
        <div className='text-4xl flex items-center justify-center py-10'> Gallery Album Upload</div>
        <div className="flex flex-col gap-7 p-16 bg-gray-200 ml-5 my-5 w-auto sm:w-[500px] lg:w-[750px] xl:w-[1280px] font-custom-robot">
          <div className="space-y-2">
            <p>Title</p>
            <input
              value={galProductDetails.title}
              onChange={changeHandler}
              className="text-sm p-2 w-[100%]"
              type="text"
              name="title"
              placeholder="Type here"
            />
          </div>
   
          <div className="space-y-2">
            <p>Date</p>
            <input
              value={galProductDetails.date}
              onChange={changeHandler}
              className="text-sm p-2 w-[100%]"
              type="date"
              name="date"
              placeholder="Type here"
            />
          </div>
  
          <div className="space-y-2">
            <p>Cover Image</p>
            <div className="w-[80px] md:w-[150px]">
              <label htmlFor="file-input">
                <img
                  className="cursor-pointer"
                  src={image ? URL.createObjectURL(image) : upload_area}
                  alt=""
                />
                <input
                  onChange={imageHandler}
                  type="file"
                  name="image"
                  id="file-input"
                  hidden
                />
              </label>
            </div>
          </div>
  
          <div className="space-y-2">
            <p>Album Images</p>
            <input
              type="file"
              onChange={albumHandler}
              name="album"
              multiple
            />
            <div>
              {albumFileNames.length > 0 && albumFileNames.map((fileName, index) => (
                <p key={index}>{fileName}</p>
              ))}
            </div>
          </div>
  
          <button
            onClick={Add_Product}
            className="w-60 bg-red-400 p-4 rounded-3xl border-2 border-gray-800 my-5 font-semibold hover:text-gray-300 hover:bg-red-500 transition-colors duration-100"
          >
            Add
          </button>
        </div>
      </div>
    );
  };
  

export default GalAddProduct