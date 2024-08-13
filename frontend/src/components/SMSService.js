import React, { useState } from 'react';
import axios from 'axios';

function SMSService() {
  const [sMSs, setSMSs] = useState([]);

  const fetchSMSs = async () => {
    try {
      const response = await axios.get('http://localhost:3004/notifications');
      setSMSs(response.data);
    } catch (error) {
      console.error('Error fetching SMSs:', error);
    }
  };

  return (
    <div>
      <h2>SMS Service</h2>
      <button onClick={fetchSMSs}>Fetch SMSs</button>
      <ul>
        {sMSs.map(sMS => (
          <li key={sMS.id}>{sMS.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default SMSService;
