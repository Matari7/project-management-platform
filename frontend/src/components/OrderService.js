import React, { useState } from 'react';
import axios from 'axios';

/**
 * Component to manage orders by creating and retrieving them.
 */
const OrderService = () => {
    // State to store the order name and total amount
    const [orderName, setOrderName] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    // State to store the list of orders
    const [orders, setOrders] = useState([]);
    // State to store and display messages to the user
    const [message, setMessage] = useState('');

    /**
     * Handles the creation of a new order.
     * Sends a POST request to the server with order details and fetches the updated list of orders.
     */
    const handleCreateOrder = async () => {
        try {
            // Sends a POST request to create a new order
            await axios.post(`${process.env.REACT_APP_API_URL}:4027/api/orders`, {
                orderName,
                totalAmount: parseFloat(totalAmount)
            });
            setMessage('Order created successfully!');
            fetchOrders(); // Fetch the updated list of orders
        } catch (error) {
            // Updates the message state with an error message
            setMessage(`Error creating order: ${error.message}`);
        }
    };

    /**
     * Fetches the list of orders from the server.
     * Sends a GET request and updates the orders state with the response data.
     */
    const fetchOrders = async () => {
        try {
            // Sends a GET request to fetch the list of orders
            const response = await axios.get(`${process.env.REACT_APP_API_URL}:4027/api/orders`);
            setOrders(response.data);
        } catch (error) {
            // Updates the message state with an error message
            setMessage(`Error fetching orders: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Order Service</h2>
            {/* Input for order name */}
            <div>
                <label>Order Name:</label>
                <input
                    type="text"
                    value={orderName}
                    onChange={(e) => setOrderName(e.target.value)}
                />
            </div>
            {/* Input for total amount */}
            <div>
                <label>Total Amount:</label>
                <input
                    type="number"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                />
            </div>
            {/* Buttons to create an order and fetch orders */}
            <button onClick={handleCreateOrder}>Create Order</button>
            <button onClick={fetchOrders}>Fetch Orders</button>
            {/* Display message if there is any */}
            {message && <p>{message}</p>}
            {/* List of orders */}
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.orderName} - ${order.totalAmount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderService;
