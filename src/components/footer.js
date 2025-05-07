import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={logoAndDescriptionStyle}>
        <div style={logoStyle}>HOM</div>
        <p style={descriptionStyle}>Brand's Ultimate Home for All Things Marketing</p>
      </div>
      <div style={sitemapStyle}>
        <h3 style={footerHeadingStyle}>Sitemap</h3>
        <ul style={footerListStyle}>
          <li style={footerListItemStyle}><a href="/home" style={footerLinkStyle}>Home</a></li>
          <li style={footerListItemStyle}><a href="/about" style={footerLinkStyle}>About</a></li>
          <li style={footerListItemStyle}><a href="/contact" style={footerLinkStyle}>Contact</a></li>
          <li style={footerListItemStyle}><a href="/workpage" style={footerLinkStyle}>Our Works</a></li>
        </ul>
      </div>
      <div style={officeStyle}>
        <h3 style={footerHeadingStyle}>Office</h3>
        <p style={officeAddressStyle}>
          201, Link Plaza, New Link Rd, near Infinity Mall, Veera Desai
          Industrial Estate, Andheri West, Mumbai, Maharashtra 400053
        </p>
        <p style={officeContactStyle}>P: 022 4600 3627</p>
        <p style={officeContactStyle}>E: info@mantaray.in</p>
      </div>
      <div style={newsletterStyle}>
        <h3 style={footerHeadingStyle}>Subscribe to our newsletter</h3>
        <input type="email" placeholder="Enter your email..." style={emailInputStyle} />
        <button style={subscribeButtonStyle}>Subscribe</button>
      </div>
    </footer>
  );
};


const footerStyle = {
  backgroundColor: '#181818',
  color: '#f0f0f0',
  padding: '60px 40px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '30px',
};

const logoAndDescriptionStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const logoStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const descriptionStyle = {
  fontSize: '0.9em',
  color: '#888',
};

const footerHeadingStyle = {
  fontSize: '1.1em',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const footerListStyle = {
  listStyle: 'none',
  padding: 0,
};

const footerListItemStyle = {
  marginBottom: '10px',
};

const footerLinkStyle = {
  color: '#f0f0f0',
  textDecoration: 'none',
  fontSize: '0.9em',
};

const sitemapStyle = {};

const officeStyle = {};

const officeAddressStyle = {
  fontSize: '0.9em',
  lineHeight: '1.6',
  color: '#888',
  marginBottom: '10px',
};

const officeContactStyle = {
  fontSize: '0.9em',
  color: '#888',
  marginBottom: '5px',
};

const newsletterStyle = {};

const emailInputStyle = {
  backgroundColor: '#222',
  color: '#f0f0f0',
  border: '1px solid #333',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '10px',
  width: '100%',
  boxSizing: 'border-box',
};

const subscribeButtonStyle = {
  backgroundColor: '#555',
  color: '#f0f0f0',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '0.9em',
};

export default Footer;