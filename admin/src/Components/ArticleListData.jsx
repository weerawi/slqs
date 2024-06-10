import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AdminContext } from "../Context/AdminContext";

const ArticleListData = () => {

    const {DIR} = useContext(AdminContext)


    const [articleAllData, setArticleAllData] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);
    const [editingProductData, setEditingProductData] = useState({});

    const fetchInfo = async () => {
        try {
            const response = await fetch(`${DIR}/articlealldata`);
            const data = await response.json();
            setArticleAllData(data);
        } catch (error) {
            console.error('Error fetching article data:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const removeProduct = async (id) => {
        try {
            await fetch(`${DIR}/removearticledata`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            await fetchInfo();
        } catch (error) {
            console.error('Error removing article product:', error);
        }
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
        try {
            const response = await fetch(`${DIR}/articleupdateproducts`, {
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
            console.error('Error updating article product:', error);
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
            <h1 className="text-3xl font-bold p-5">All Article List</h1>
            <div className="font-semibold items-center grid grid-cols-6 gap-1 md:gap-2 lg:gap-10 py-1 w-[1000px] ">
                <p className='flex justify-center '>Image</p> 
                <p className='flex justify-center' >Title</p> 
                <p className='flex justify-center col-span-2'>Description</p>
                <p className='flex justify-center col-span-2'>Action</p>
            </div>
            <div className="my-5 py-5 bg-gray-50 overflow-y-scroll h-2/3">
                {articleAllData.map((product, i) => (
                    <div key={i} className="w-[1000px] items-center border-b-2 grid grid-cols-6 gap-1 md:gap-2 lg:gap-10 py-2 border-gray-400 ">
                        {editingProductId === product.id ? (
                            <>
                                <input type="file" onChange={handleImageChange} />
                                <input type="text" name="title" value={editingProductData.title} onChange={handleInputChange} />
                                <textarea style={{ height: "300px", width:"full" }}className="col-span-2" type="text" name="description" value={editingProductData.description} onChange={handleInputChange} />
                                <div className="flex justify-around col-span-2 ">
                                    <button className='text-green-700 font-bold' onClick={saveProductHandler}>Save</button>
                                    <button  className='  font-bold'onClick={cancelEditHandler}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <img src={product.image} width={80} height={80} alt={product.title} className="mx-auto" />
                                <p className='flex justify-center'>{product.title}</p>  
                                <p className='flex justify-center col-span-2'>{product.description}</p>  
                                <div className="flex justify-around col-span-2">
                                    <button onClick={() => editProductHandler(product)}>Edit</button>
                                    <MdDelete className="text-2xl cursor-pointer text-red-600" onClick={() => removeProduct(product.id)} />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArticleListData;

