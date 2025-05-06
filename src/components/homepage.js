import React, { useState } from 'react';

const HomePage = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault();
    
    console.log('Form submitted:', { name, number, email, service });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>


      <main style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <video
            src="URL_TO_YOUR_VIDEO.mp4" // Replace with your video URL
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              color: 'white',
              textAlign: 'center',
            }}
          >
            <h2 style={{ color: 'black' }}>GET IN TOUCH</h2>
            <p style={{ color: 'black' }}>Text placeholder for additional information.</p>
          </div>
        </div>

        <div style={{
          width: '400px',
          backgroundColor: '#eee',
          padding: '20px',
          borderRadius: '8px', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px auto', 
        }}>
          <h3>ENQUIRY FORM</h3>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}> 
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }} 
                required
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="number" style={{ display: 'block', marginBottom: '5px' }}>Number:</label>
              <input
                type="tel"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                style={{ padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }} 
                required
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Mail Id:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }} // Added width
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="service" style={{ display: 'block', marginBottom: '5px' }}>Service:</label>
              <input
                type="text"
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                style={{ padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }} 
                required
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%', 
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
