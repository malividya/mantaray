import React from 'react';

const BrandLogosSection = () => {
  const numberOfLogos = 6; 

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>BRAND LOGO'S</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
        {Array.from({ length: numberOfLogos }).map((_, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '2em',
              color: '#666',
              backgroundColor: '#f9f9f9',
            }}
          >
            
            +
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogosSection;