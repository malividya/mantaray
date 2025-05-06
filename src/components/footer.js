import React, { useState } from 'react';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleJoinUsSubmit = (e) => {
    e.preventDefault();
    
    console.log('Join Us submitted:', { name, email });
    
    setName('');
    setEmail('');
  };

  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%', marginBottom: '30px', textAlign: 'center' }}>
        <div>
          <h3>Contact Us</h3>
          <p>TEXT</p> 
        </div>
        <div>
          <h3>Follow Us</h3>
          <p>TEXT</p> 
          <div>
            <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Instagram</a>
            <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Facebook</a>
            <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Linked In</a>
          </div>
        </div>
        <div>
          <h3>Support</h3>
          <p>TEXT</p> 
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3>Join us</h3>
        <form onSubmit={handleJoinUsSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '10px', margin: '5px 0', width: '300px', borderRadius: '5px', border: 'none' }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', margin: '5px 0', width: '300px', borderRadius: '5px', border: 'none' }}
            required
          />
          <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
            Join
          </button>
        </form>
      </div>

      <p style={{ fontSize: '0.9em', marginTop: '20px' }}>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p> {/* Replace with your copyright information */}
    </footer>
  );
};

export default Footer;