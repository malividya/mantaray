import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import HomePage from './components/homepage';
import Footer from './components/footer';
import Product from './components/product'; 
import Contact from './components/contact'; 
import CombinedSection from './components/workpage'; 
import ServicePage from './components/servicepage'; 
import AboutUsPage  from './components/about'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicepage" element={<ServicePage />} />
        <Route path="/about" element={<AboutUsPage/>}/>
        <Route path="/product" element={<Product />} />
        <Route path="/workpage" element={<CombinedSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
