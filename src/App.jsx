import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import History from './components/history/History';
import Admission from './components/admissions/Admission';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
