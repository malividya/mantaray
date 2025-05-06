import React from 'react';

const ProductSection = () => {
  const products = [
    { name: 'Performance Marketing' },
    { name: 'Website Designing' },
    { name: 'Search Engine Optimization' },
    { name: 'PAID ADS' },
    { name: 'B2B Lead Generation' },
    { name: 'Performance Marketing' },
    { name: 'Website Designing' },
    { name: 'Content Marketing' },
  ];

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>PRODUCT SECTION</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '20px' }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '150px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <div style={{ textAlign: 'center' }}>
             
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#ddd',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.5em',
                  color: '#666',
                }}
              >
                {/* Placeholder for an image/icon */}
                +
              </div>
              <h3>{product.name}</h3>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;