import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/home';
import RoadSafety from './components/road-safety';
import BeachSafety from './components/beach-safety';
import SwimSafety from './components/swimsafety';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/road-safety" element={<RoadSafety />} />
        <Route path="/beach-safety" element={<BeachSafety />} />
        <Route path="/swimsafety" element={<SwimSafety />} />
      </Routes>
    </Router>
  );
}

export default App;