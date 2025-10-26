import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import Beginner from './pages/Beginner';
import Tips from './pages/Tips';
import QP from './pages/QP';
import Strategy from './pages/Strategy';
import Characters from "./pages/Characters";     
import CharacterDetail from "./pages/CharacterDetail" ;
import Activities from './pages/Activities';
import Weekrequest from './pages/Weekrequest';
import QPCalculator from "./pages/QPCalculator";
import Expert from "./pages/Expert";
import Tierlist from './pages/Tierlist';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-container">
        <Routes>
          {/* เวอร์ชันแรก */}
          <Route path="/" element={<Home />} />
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/qp" element={<QP />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/" element={<Home />} />
          <Route path="/qp-calculator" element={<QPCalculator />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/Tierlist" element={<Tierlist />} />
          {/* เวอร์ชันสอง */}
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/weekrequest" element={<Weekrequest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
