import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { cn } from './components/lib/utils';
import './App.css';
import logo1 from './components/images/1.jpg';
import logo2 from './components/images/2.jpg';
import logo3 from './components/images/1.jpg';
import logo4 from './components/images/two.jpg';
import logo5 from './components/images/three.jpg';


// --- Inquiry Form Component ---
const InquiryForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
    // Basic email validation
    setIsValidEmail(event.target.value.includes('@') && event.target.value.includes('.'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail) {
      // In a real application, you would handle form submission here (e.g., API call)
      console.log('Form submitted with email:', email);
      alert('Thank you for your inquiry!');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md border border-white/10">
      <h2 className="text-2xl font-semibold text-white mb-4" style={{ textAlign: 'center' }}>Get a Free Consultation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-2 rounded-md border',
              isValidEmail
                ? 'border-gray-300 bg-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                : 'border-red-500 bg-red-500/10 text-red-400 placeholder:text-red-400 focus:ring-2 focus:ring-red-500 focus:border-red-500',
              'transition-colors duration-200',
            )}
            placeholder="Enter your email"
          />
          {!isValidEmail && <p className="text-red-400 text-sm mt-1">Please enter a valid email.</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors duration-200"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

// --- Services List Component ---
const ServicesList = ({ services }) => (
  <div className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md border border-white/10">
    <h2 className="text-2xl font-semibold text-white mb-4" style={{ textAlign: 'center' }}>Our Services</h2>
    <ul className="list-disc pl-5 space-y-2">
      {services.map((service, index) => (
        <li key={index} className="text-gray-200">
          {service}
        </li>
      ))}
    </ul>
  </div>
);

// --- About Mantaray Component ---
const AboutMantaray = () => (
  <div className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md border border-white/10">
    <h2 className="text-2xl font-semibold text-white mb-4" style={{ textAlign: 'center' }}>About Mantaray</h2>
    <p className="text-gray-300">
      Mantaray is a leading marketing agency dedicated to providing innovative and
      results-driven solutions to help businesses thrive in today's competitive
      landscape. We pride ourselves on our expertise and commitment to client success.
    </p>
  </div>
);

// --- Client Logos Component ---
const ClientLogos = ({ logos }) => (
  <div className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md border border-white/10">
    <h2 className="text-2xl font-semibold text-white mb-4" style={{ textAlign: 'center' }}>Our Esteemed Clients</h2>
    <div className="flex flex-wrap justify-center align-items-center gap-6">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Client Logo ${index + 1}`}
          className="opacity-70 hover:opacity-100 transition-opacity duration-200"
          style={{ maxWidth: '160px', maxHeight: '100px' }}
        />
      ))}
    </div>
  </div>
);

// --- Video Showcase Component ---
const VideoShowcase = ({ videos }) => (
  <div className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md border border-white/10">
    <h2 className="text-2xl font-semibold text-white mb-4" style={{ textAlign: 'center' }}>Our Previous Work</h2>
    <div className="flex flex-col gap-4">
      {videos.map((videoUrl, index) => (
        <iframe
          key={index}
          className="w-full aspect-video rounded-lg"
          src={videoUrl}
          title={`Video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  </div>
);

// --- Success Stories Component ---
const SuccessStories = ({ stories }) => (
  <div className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md border border-white/10">
    <h2 className="text-2xl font-semibold text-white mb-4" style={{ textAlign: 'center' }}>Success Stories</h2>
    <div className="space-y-6">
      {stories.map((story, index) => (
        <div key={index} className="bg-white/10 p-4 rounded-lg border border-white/10">
          <h3 className="text-lg font-semibold text-white">{story.title}</h3>
          <p className="text-gray-300">{story.description}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Contact Us Form Component ---
const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setEmailError(''); // Clear error when empty
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;

    if (!email) {
      setEmailError('Email is required');
      hasErrors = true;
    }

    if (!name) {
      alert('Name is required'); // Basic alert for name
      hasErrors = true;
    }
    if (!message) {
      alert('Message is required'); // Basic alert for message
      hasErrors = true;
    }

    if (!hasErrors && !emailError) {
      console.log('Form Data:', { name, email, message });
      alert('Thank you for your message!'); // basic alert.
      // Reset the form
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md border border-white/10">
      <h2 className="text-2xl font-semibold text-white mb-4" style={{ textAlign: 'center' }}>Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder:text-gray-400 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={cn(
              'w-full px-4 py-2 rounded-md border',
              emailError
                ? 'border-red-500 bg-red-500/10 text-red-400 placeholder:text-red-400 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 bg-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
              'transition-colors duration-200',
            )}
            placeholder="Your Email"
          />
          {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder:text-gray-400 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            rows={4}
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

// --- Digital Marketing Landing Page Component ---
const DigitalMarketingPage = () => {
  const digitalMarketingServices = [
    'Search Engine Optimization (SEO)',
    'Pay-Per-Click (PPC) Advertising',
    'Social Media Marketing',
    'Content Marketing',
    'Email Marketing',
    'Marketing Analytics',
  ];

  const clientLogos = [
    logo3,
    logo4,
    logo5,
  ];

  const videoUrls = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/y60p_6t2eXw',
  ];

  const successStories = [
    {
      title: 'Increased Organic Traffic by 150%',
      description:
        'Through our strategic SEO efforts, we helped an e-commerce client increase their organic traffic by 150% within six months, leading to a significant boost in sales.',
    },
    {
      title: 'Improved Lead Generation with PPC',
      description:
        'Our targeted PPC campaigns resulted in a 40% increase in qualified leads for a B2B software company, significantly improving their sales pipeline.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <InquiryForm />
        <ServicesList services={digitalMarketingServices} />
        <AboutMantaray />
        <ClientLogos logos={clientLogos} />
        <VideoShowcase videos={videoUrls} />
        <SuccessStories stories={successStories} />
        <ContactUsForm />
      </div>
    </div>
  );
};

// --- OOH Landing Page Component ---
const OOHMarketingPage = () => {
  const oohServices = [
    'Billboard Advertising',
    'Transit Advertising (Buses, Trains)',
    'Street Furniture Advertising (Bus Shelters, Kiosks)',
    'Digital Out-of-Home (DOOH)',
    'Ambient Advertising',
    'Mall Advertising',
  ];

  const clientLogos = [
    logo1,
    logo2,
  ];

  const videoUrls = [
    'https://www.youtube.com/embed/4KfXSEz9now',
    'https://www.youtube.com/embed/fKJDl9M9jNw',
  ];

  const successStories = [
    {
      title: 'Successful Billboard Campaign for Brand Awareness',
      description:
        'Our strategic billboard placements across key urban areas resulted in a 60% increase in brand awareness for a leading consumer goods company.',
    },
    {
      title: 'High-Impact Transit Advertising',
      description:
        "A transit advertising campaign on buses led to a significant increase in foot traffic to a retail store, exceeding the client's expectations.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <InquiryForm />
        <ServicesList services={oohServices} />
        <AboutMantaray />
        <ClientLogos logos={clientLogos} />
        <VideoShowcase videos={videoUrls} />
        <SuccessStories stories={successStories} />
        <ContactUsForm />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-white font-bold text-xl">Mantaray</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/digital-marketing"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    to="/ooh-services"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    OOH Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/ooh-services" element={<OOHMarketingPage />} />
        <Route path="/" element={<DigitalMarketingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
