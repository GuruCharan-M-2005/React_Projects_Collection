import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './QuoteGenerator.css';

export default function QuoteGenerator() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    try {
      const res = await axios.get('https://api.adviceslip.com/advice');
      // Access the advice property of the slip object in the response data
      setAdvice(res.data.slip.advice);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}
