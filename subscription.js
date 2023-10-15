import React, { useState } from 'react';
import axios from 'axios';
import './subscription.css'; // Import the subscription.css file

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/subscribe', { email });
      console.log('Email sent:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="subscription-container"> {/* Apply styles from subscription.css */}
      <div className="horizontal-content">
        <h1 className="subscription-title">SIGN UP FOR OUR DAILY INSIDER</h1>
        <form id="subscriber" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="email-input"
          />
          <button type="submit" className="subscribe-button">Subscribe</button> {/* Apply styles from subscription.css */}
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
