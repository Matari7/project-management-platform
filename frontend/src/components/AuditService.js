import React, { useState } from 'react';
import axios from 'axios';

function ShippingService() {
  const [shippings, setShippings] = useState([]);

  const fetchShippings = async () => {
    try {
      const response = await axios.get('http://localhost:3004/notifications');
      setShippings(response.data);
    } catch (error) {
      console.error('Error fetching Shippings:', error);
    }
  };

  return (
    <div>
      <h2>Shipping Service</h2>
      <button onClick={fetchShippings}>Fetch Shippings</button>
      <ul>
        {shippings.map(shipping => (
          <li key={shipping.id}>{shipping.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShippingService;
