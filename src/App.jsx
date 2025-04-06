import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AllSections from './Components/Allsections';

const App = () => {
  return (
    <Router>
      <div className='relative bg-black '>
      
        <div className='relative z-10'>
          <Navbar />
          <Routes>
            <Route path="/" element={<AllSections />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
