import React, { useState } from 'react';
import axios from 'axios';

/**
 * Component to manage products by creating and fetching them.
 */
const ProductService = () => {
    // State to store the product name and price
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    // State to store the list of products
    const [products, setProducts] = useState([]);
    // State to store and display messages to the user
    const [message, setMessage] = useState('');

    /**
     * Handles the creation of a new product.
     * Sends a POST request to the server with product details and fetches the updated list of products.
     */
    const handleCreateProduct = async () => {
        try {
            // Sends a POST request to create a new product
            await axios.post(`${process.env.REACT_APP_API_URL}:4026/api/products`, {
                productName,
                price: parseFloat(price)
            });
            setMessage('Product created successfully!');
            fetchProducts(); // Fetch the updated list of products
        } catch (error) {
            // Updates the message state with an error message
            setMessage(`Error creating product: ${error.message}`);
        }
    };

    /**
     * Fetches the list of products from the server.
     * Sends a GET request and updates the products state with the response data.
     */
    const fetchProducts = async () => {
        try {
            // Sends a GET request to fetch the list of products
            const response = await axios.get(`${process.env.REACT_APP_API_URL}:4026/api/products`);
            setProducts(response.data);
            setMessage('Products retrieved successfully');
        } catch (error) {
            // Updates the message state with an error message
            setMessage(`Error fetching products: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Product Service</h2>
            {/* Input for product name */}
            <div>
                <label>Product Name:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            {/* Input for product price */}
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            {/* Buttons to create a product and fetch products */}
            <button onClick={handleCreateProduct}>Create Product</button>
            <button onClick={fetchProducts}>Fetch Products</button>
            {/* Display message if there is any */}
            {message && <p>{message}</p>}
            {/* List of products */}
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
