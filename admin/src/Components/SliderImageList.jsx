
import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AdminContext } from "../Context/AdminContext";

const SliderImageList = () => {
    const {DIR} = useContext(AdminContext);

    const [sliderImageData, setSliderImageData] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);
    const [editingProductData, setEditingProductData] = useState({});

    const fetchInfo = async () => {
        try {
            const response = await fetch(`${DIR}/allsliderimages`);
            const data = await response.json();
            setSliderImageData(data);
        } catch (error) {
            console.error('Error fetching slider image data:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const removeProduct = async (id) => {
        try {
            await fetch(`${DIR}/removesliderimage`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            await fetchInfo();
        } catch (error) {
            console.error('Error removing slider image:', error);
        }
    };

    const editProductHandler = (product) => {
        setEditingProductId(product._id); // Ensure you use the correct ID
        setEditingProductData(product);
    };

    const cancelEditHandler = () => {
        setEditingProductId(null);
        setEditingProductData({});
    };

    const saveProductHandler = async () => {
        try {
            const response = await fetch(`${DIR}/updatesliderimage`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editingProductData),
            });
            const data = await response.json();
            if (data.success) {
                setEditingProductId(null);
                setEditingProductData({});
                await fetchInfo();
            } else {
                alert('Failed to update product');
            }
        } catch (error) {
            console.error('Error updating slider image:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditingProductData({ ...editingProductData, [name]: value });
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        const imageData = new FormData();
        imageData.append('image', file);

        try {
            const response = await fetch(`${DIR}/upload`, {
                method: 'POST',
                body: imageData,
            });
            const data = await response.json();
            if (data.success) {
                setEditingProductData({ ...editingProductData, image: data.image_url });
            } else {
                alert('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="flex flex-col items-center w-[80%] mx-auto"> 
            <h1 className="text-3xl font-bold p-5">All Slider Images</h1>
            <div className="font-semibold items-center grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-1 justify-around w-[1000px]">
                <p className='flex justify-center'>Image</p> 
                <p className='flex justify-center'>Title</p> 
                <p className='flex justify-center'>Date</p> 
                <p className='flex justify-center col-span-2'>Actions</p>
            </div>
            <div className="my-5 py-5 bg-gray-50 overflow-y-scroll h-2/3">
                {sliderImageData.map((product, i) => (
                    <div key={i} className="w-[1000px] items-center border-b-2 grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-1 border-gray-400">
                        {editingProductId === product._id ? (
                            <>
                                <input type="file" onChange={handleImageChange} />
                                <input type="text" name="title" value={editingProductData.title} onChange={handleInputChange} />
                                <input type="date" name="date" value={editingProductData.date} onChange={handleInputChange} />
                                <div className="flex justify-around col-span-2">
                                    <button className='text-green-700 font-bold' onClick={saveProductHandler}>Save</button>
                                    <button className='font-bold' onClick={cancelEditHandler}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <img src={product.image} width={80} height={80} alt={product.title} className="mx-auto" />
                                <p className='flex justify-center'>{product.title}</p> 
                                <p className='flex justify-center'>{product.date}</p> 
                                <div className="flex justify-around col-span-2">
                                    <button onClick={() => editProductHandler(product)}>Edit</button>
                                    <button onClick={() => { removeProduct(product.id) }} ><MdDelete className="text-2xl  "/></button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderImageList;


