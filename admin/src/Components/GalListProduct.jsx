import { useContext, useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md'; 
import { AdminContext } from "../Context/AdminContext";

const GalListProduct = () => {
    const {DIR} = useContext(AdminContext);


    const [galAllProducts, setGalAllProducts] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);
    const [editingProductData, setEditingProductData] = useState({});

    const fetchInfo = async () => {
        await fetch(`${DIR}/galallproducts`)
            .then((res) => res.json())
            .then((data) => setGalAllProducts(data));
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const removeProduct = async (id) => {
        await fetch(`${DIR}/removegalproduct`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
        await fetchInfo();
    };

    const editProductHandler = (product) => {
        setEditingProductId(product.id);
        setEditingProductData(product);
    };

    const cancelEditHandler = () => {
        setEditingProductId(null);
        setEditingProductData({});
    };

    const saveProductHandler = async () => {
        await fetch(`${DIR}/galupdateproduct`, { // Note the endpoint
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editingProductData),
        }).then((res) => res.json()).then((data) => {
            if (data.success) {
                setEditingProductId(null);
                setEditingProductData({});
                fetchInfo();
            } else {
                alert('Failed to update product');
            }
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditingProductData({ ...editingProductData, [name]: value });
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        const imageData = new FormData();
        imageData.append('image', file);

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
    };

    return (
        <div className="flex flex-col items-center mx-auto">
            <h1 className="text-3xl font-bold p-5">All Gallery Album List</h1>
            <div className="font-semibold items-center grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-1 justify-around w-[1000px]">
                <p className='flex justify-center'>Image</p>
                <p className='flex justify-center'>Title</p>
                <p className='flex justify-center'>Date</p>
                <p className='flex justify-center col-span-2'>Actions</p>
            </div>

            <div className="my-5 py-5 bg-gray-50 overflow-y-scroll h-2/3">
                {galAllProducts.map((product, i) => (
                    <div key={i} className="w-[1000px] items-center border-b-2 grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-2 border-gray-400">
                        {editingProductId === product.id ? (
                            <>
                                <input type="file" onChange={handleImageChange} />
                                <input type="text" name="title" value={editingProductData.title} onChange={handleInputChange} />
                                <input type="date" name="date" value={editingProductData.date} onChange={handleInputChange} />
                                <div className='flex justify-around space-x-2 col-span-2'>
                                    <button  className='text-green-700 font-bold' onClick={saveProductHandler}>Save</button>
                                    <button  className=' font-bold' onClick={cancelEditHandler}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <img src={product.image} width={80} height={80} alt={product.title} className="mx-auto" />
                                <p className='flex justify-center'>{product.title}</p>
                                <p className='flex justify-center'>{product.date}</p>
                                <div className='flex justify-around space-x-2 col-span-2'>
                                    <button className='text-red-700 font-bold' onClick={() => editProductHandler(product)}>Edit</button>
                                    <button onClick={() => { removeProduct(product.id) }} ><MdDelete className="text-2xl" /></button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalListProduct;
