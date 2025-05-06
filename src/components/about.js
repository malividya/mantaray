import React from 'react';

const IntroductionSection = () => {
  return (
    <div style={{
      backgroundColor: '#2C7A7B',
      color: 'white',
      padding: '80px',
      textAlign: 'center',
      borderRadius: '15px',
      margin: '40px',
    }}>
      <h2 style={{
        fontSize: '2.5em',
        marginBottom: '30px',
        fontWeight: 'bold',
      }}>
        Introduction
      </h2>
      <p style={{
        fontSize: '1.2em',
        lineHeight: '1.8',
        marginBottom: '20px',
      }}>
        Welcome to the House of Mantaray (HOM),
        where cutting-edge technology meets storytelling.
        Modern-day advertising solutions are leveraged here to create and deliver
        immersive media experiences.
      </p>
      <p style={{
        fontSize: '1.2em',
        lineHeight: '1.8',
      }}>
        Our outcome-led, data-driven approach
        ensures tailored content that contextually
        captivates the audiences. It differentiates us in the
        world of sameness.
      </p>
      <div style={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
        
        <img
          src="/images/mantaray-logo-white.png"
          alt="House of Mantaray Logo"
          style={{
            height: '40px',
          }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const imageStyle = { 
    width: '80px',
    height: '80px',
    backgroundColor: '#ddd',
    borderRadius: '5px',
    marginBottom: '5px'
  };

  const textStyle = {
    fontSize: '1.1em',
    lineHeight: '1.6',
    marginBottom: '15px',
  };

  return (
    <div style={{
      padding: '40px',
      textAlign: 'left',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      margin: '20px',
    }}>
      <h2 style={{
        fontSize: '2em',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}>
        WHAT WE DO?
      </h2>
      <p style={textStyle}>
        Our experienced team is committed to transforming
        the advertising ecosystem by leveraging advanced data intelligence.
        We are moving away from traditional recall-based methods.
      </p>
      <p style={{ ...textStyle, marginBottom: '30px' }}>
        We embrace a smarter,
        ROI-driven approach that generates
        lasting impressions and measurable results
        through innovative advertising strategies.
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={imageStyle}></div>
          <p>PAID<br />Media</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={imageStyle}></div>
          <p>OOH<br />Advertising</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={imageStyle}></div>
          <p>DOOH<br />Assets</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={imageStyle}></div>
          <p>Events &<br />Activation</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={imageStyle}></div>
          <p>Digital<br />Marketing</p>
        </div>
      </div>
    </div>
  );
};

export {IntroductionSection, About};
