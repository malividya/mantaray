import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import HomePage from './components/homepage';
import Footer from './components/footer';
import Product from './components/product'; 
import Contact from './components/contact'; 
import WorkPage from './components/workpage'; 
import ServicePage from './components/servicepage'; 
import {About,IntroductionSection}  from './components/about'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicepage" element={<ServicePage />} />
        <Route path="/about" element={<><IntroductionSection /><About /></>}/>
        <Route path="/product" element={<Product />} />
        <Route path="/workpage" element={<WorkPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
