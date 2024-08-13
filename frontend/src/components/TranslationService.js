import React, { useState } from 'react';
import axios from 'axios';

function TranslationService() {
  const [translations, setTranslations] = useState([]);

  const fetchTranslations = async () => {
    try {
      const response = await axios.get('http://localhost:3004/notifications');
      setTranslations(response.data);
    } catch (error) {
      console.error('Error fetching Translations:', error);
    }
  };

  return (
    <div>
      <h2>Translation Service</h2>
      <button onClick={fetchTranslations}>Fetch Translations</button>
      <ul>
        {translations.map(translation => (
          <li key={translation.id}>{translation.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default TranslationService;
