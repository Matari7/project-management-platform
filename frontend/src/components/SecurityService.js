import React, { useState } from 'react';
import axios from 'axios';

function SecurityService() {
  const [securitys, setSecuritys] = useState([]);

  const fetchSecuritys = async () => {
    try {
      const response = await axios.get('http://localhost:8000/graphql');
      setSecuritys(response.data);
    } catch (error) {
      console.error('Error fetching security:', error);
    }
  };

  return (
    <div>
      <h2>Security Service</h2>
      <button onClick={fetchSecuritys}>Fetch Securitys</button>
      <ul>
        {securitys.map(security => (
          <li key={security.id}>{security.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SecurityService;
