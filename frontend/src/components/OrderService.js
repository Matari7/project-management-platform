import React, { useState } from 'react';
import axios from 'axios';

const OrderService = () => {
    const [orderName, setOrderName] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [orders, setOrders] = useState([]);
    const [message, setMessage] = useState('');

    const handleCreateOrder = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}:4027/api/orders`, {
                orderName,
                totalAmount: parseFloat(totalAmount)
            });
            setMessage('Order created successfully!'+ response);
            fetchOrders(); // Fetch the updated list of orders
        } catch (error) {
            setMessage(`Error creating order: ${error.message}`);
        }
    };

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}:4027/api/orders`);
            setOrders(response.data);
        } catch (error) {
            setMessage(`Error fetching orders: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Order Service</h2>
            <div>
                <label>Order Name:</label>
                <input
                    type="text"
                    value={orderName}
                    onChange={(e) => setOrderName(e.target.value)}
                />
            </div>
            <div>
                <label>Total Amount:</label>
                <input
                    type="number"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                />
            </div>
            <button onClick={handleCreateOrder}>Create Order</button>
            <button onClick={fetchOrders}>Fetch Orders</button>
            {message && <p>{message}</p>}
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
