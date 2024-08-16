import React, { useState } from 'react';
import axios from 'axios';

const OrderService = () => {
    const [orderName, setOrderName] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [orders, setOrders] = useState([]);
    const [message, setMessage] = useState('');

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}:4026/api/orders`);
            setOrders(response.data);
            setMessage('Orders retrieved successfully');
        } catch (error) {
            setMessage(`Error fetching orders: ${error.message}`);
        }
    };

    const createOrder = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_CENTOS}:4027/api/orders`, { orderName, totalAmount });
            fetchOrders(); // Fetch orders again after creating a new one
            setMessage('Order created successfully');
        } catch (error) {
            setMessage(`Error creating order: ${error.message}`);
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
                    type="text" 
                    value={totalAmount} 
                    onChange={(e) => setTotalAmount(e.target.value)} 
                />
            </div>
            <button onClick={createOrder}>Create Order</button>
            <button onClick={fetchOrders}>Fetch Orders</button>
            {message && <p>{message}</p>}
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <h3>{order.orderName}</h3>
                        <p>Total Amount: {order.totalAmount}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderService;
