import React, { useState } from 'react';
import axios from 'axios';

const ProductService = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');

    const handleCreateProduct = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}:4026/api/products`, {
                productName,
                price: parseFloat(price)
            });
            setMessage('Product created successfully!');
            fetchProducts(); // Fetch the updated list of products
        } catch (error) {
            setMessage(`Error creating product: ${error.message}`);
        }
    };
    

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}:4026/api/products`);
            setProducts(response.data);
            setMessage('Products retrieved successfully');
        } catch (error) {
            setMessage(`Error fetching products: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Product Service</h2>
            <div>
                <label>Product Name:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button onClick={handleCreateProduct}>Create Product</button>
            <button onClick={fetchProducts}>Fetch Products</button>
            {message && <p>{message}</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.productName} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductService;
