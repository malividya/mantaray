import React, { useState } from 'react';
import fqaImage from './images/FQA.jpg';

const FaqHeroSection = () => {
  return (
    <div style={faqHeroContainerStyle}>
      <p style={houseOfMantarayStyle}>House of Mantaray —</p>
      <h1 style={faqPageStyle}>FAQ Page</h1>
      <p style={connectTextStyle}>Connect with audiences that matter</p>
    </div>
  );
};

const FaqSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqData = [
    {
      question: 'Why mantaray? Why do you resonate with it?',
      answer: 'This is a placeholder answer. You can provide the detailed answer here.',
    },
    {
      question: 'What is your brand purpose ?',
      answer: 'This is a placeholder answer. You can provide the detailed answer here.',
    },
    {
      question: 'Is there a brand promise that you would like to provide for your clients ?',
      answer: 'This is a placeholder answer. You can provide the detailed answer here.',
    },
    {
      question: 'List of services you provide ?',
      answer: 'This is a placeholder answer. You can provide a list of your services here.',
    },
    {
      question: 'What Makes Mantaray Different?',
      answer: 'This is a placeholder answer. Explain your unique differentiators here.',
    },
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div style={faqSectionContainerStyle}>
      <div style={faqLeftColumnStyle}>
        {faqData.map((item, index) => (
          <div key={index} style={faqQuestionContainerStyle}>
            <div
              style={faqQuestionStyle}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span style={faqPlusIconStyle}>+</span>
            </div>
            {expandedIndex === index && (
              <div style={faqAnswerStyle}>{item.answer}</div>
            )}
            <hr style={faqDividerStyle} />
          </div>
        ))}
      </div>
      <div style={faqRightColumnStyle}>
        <h2 style={faqQaHeadingStyle}>Q&A</h2>
        <p style={faqTaglineStyle}>Build imagery that lasts a lifetime</p>
        <div style={faqImagePlaceholderStyle}>
          <img
            src={fqaImage}
            alt="FAQ Image"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

const GetInTouchHero = () => {
  return (
    <div style={getInTouchContainerStyle}>
      <p style={getInTouchSubHeadingStyle}>HAVE CONVERSATIONS THAT ARE RELEVANT</p>
      <h1 style={getInTouchMainHeadingStyle}>GET IN TOUCH</h1>
    </div>
  );
};

const CombinedSection = () => {
  return (
    <div>
      <FaqHeroSection /> 
      <FaqSection />
      <GetInTouchHero />
    </div>
  );
};


const faqHeroContainerStyle = {
  backgroundColor: '#181818', 
  color: '#f0f0f0', 
  padding: '150px 40px', 
  textAlign: 'left', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 60px)',
};

const houseOfMantarayStyle = {
  fontSize: '1.1em',
  color: '#888',
  marginBottom: '10px',
};

const faqPageStyle = {
  fontSize: '6em', // Large heading
  fontWeight: 'bold',
  lineHeight: '1',
  marginBottom: '15px',
};

const connectTextStyle = {
  fontSize: '1.2em',
  color: '#ccc',
};

// Styles for FaqSection
const faqSectionContainerStyle = {
  backgroundColor: '#181818',
  color: '#f0f0f0',
  padding: '80px 40px',
  display: 'flex',
  gap: '40px',
  alignItems: 'flex-start',
};

const faqLeftColumnStyle = {
  flex: 1,
};

const faqRightColumnStyle = {
  flex: 0.8, // Adjust width as needed
};

const faqQuestionContainerStyle = {
  marginBottom: '10px',
};

const faqQuestionStyle = {
  fontSize: '1.2em',
  fontWeight: 'bold',
  padding: '15px 0',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const faqPlusIconStyle = {
  fontSize: '1.5em',
  color: '#888',
};

const faqAnswerStyle = {
  padding: '15px 0',
  lineHeight: '1.6',
  color: '#ccc',
};

const faqDividerStyle = {
  borderColor: '#333',
  margin: '10px 0',
};

const faqQaHeadingStyle = {
  fontSize: '2.5em',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const faqTaglineStyle = {
  fontSize: '1em',
  color: '#888',
  marginBottom: '20px',
};

const faqImagePlaceholderStyle = {
  width: '100%',
  height: 'auto', 
  aspectRatio: '1 / 1', 
  backgroundColor: '#333', 
  borderRadius: '8px',
  marginTop: '20px',
  overflow: 'hidden', 
};


const getInTouchContainerStyle = {
  backgroundColor: '#181818',
  color: '#f0f0f0',
  padding: '150px 40px', 
  textAlign: 'left', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 60px)', 
};

const getInTouchSubHeadingStyle = {
  fontSize: '1.1em',
  color: '#888',
  marginBottom: '10px',
  letterSpacing: '1px',
};

const getInTouchMainHeadingStyle = {
  fontSize: '6em', 
  fontWeight: 'bold',
  lineHeight: '1',
  marginBottom: '20px',
};

export default CombinedSection;