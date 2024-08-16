import React, { useState } from 'react';
import axios from 'axios';

const ProductService = () => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');

    // Function to create a new product
    const createProduct = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_CENTOS}:4026/api/products`, { productName, price });
            setProducts(response.data);
            setMessage('Product created successfully');
            setProductName('');
            setPrice('');
        } catch (error) {
            setMessage(`Error creating product: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    // Function to fetch all products
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_CENTOS}/api/products`);
            setProducts(response.data);
            setMessage('Products retrieved successfully');
        } catch (error) {
            setMessage(`Error fetching products: ${error.response ? error.response.data.message : error.message}`);
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
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <button onClick={createProduct}>Create Product</button>
            <button onClick={fetchProducts}>Fetch Products</button>
            {message && <p>{message}</p>}
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.productName}</h3>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductService;
