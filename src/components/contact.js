import React, { useState } from 'react';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Enquiry Form submitted:', { name, number, email, service });
    
    setName('');
    setNumber('');
    setEmail('');
    setService('');
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', width: '300px', margin: '20px auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>ENQUIRY FORM</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }}
          required
        />

        <label htmlFor="number" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Number</label>
        <input
          type="tel"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }}
          required
        />

        <label htmlFor="email" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Mail Id</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }}
          required
        />

        <label htmlFor="service" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Service</label>
        <input
          type="text"
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={{ padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px' }}
          required
        />

        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;