import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    { review: 'Client Review 1' },
    { review: 'Client Review 2' },
    { review: 'Client Review 3' },
    { review: 'Client Review 4' },
    { review: 'Client Review 5' },
    { review: 'Client Review 6' },
  ];

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>PAST EXPERIENCE</h2>
      <div style={{ marginBottom: '20px' }}>
        &lt; CONTENT &gt; {/* Placeholder for past experience content */}
      </div>
      <h2>TESTIMONIAL</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '150px', // Adjust as needed
              textAlign: 'center',
            }}
          >
            <div>
              <h3>Clients</h3>
              <p>{testimonial.review}</p>
              {/* You can add more details like client name, rating, etc. */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;