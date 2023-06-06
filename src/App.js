import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NextThing from './components/NextThing';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<Newsletter />} />
        </Routes>
        <NextThing />
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
