import React, { useState } from 'react';
import axios from 'axios';

export default function TwilioMessenger() {
  const [message, setMessage] = useState('');

  const sendMessage = async() => {
    await axios.post('http://localhost:3001/receive', { message })
      .then(() => {
        console.log("Message sent successfully");
        setMessage('');
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
  

  return (
    <div>
      <h1 className="text-center">Twilio Messenger</h1>
      <input type='text' placeholder='Enter your Message'  onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}
