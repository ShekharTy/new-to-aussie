import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/home';
import RoadSafety from './components/road-safety';
import BeachSafety from './components/beach-safety';
import SwimSafety from './components/swimsafety';
import Warning from './components/warning';
import Quiz from './components/beach-quiz';
import ScenarioComponent from './components/scenario-component';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/road-safety" element={<RoadSafety />} />
        <Route path="/beach-safety" element={<BeachSafety />} />
        <Route path="/swimsafety" element={<SwimSafety />} />
        <Route path="/warning" element={<Warning />} />
        <Route path="/beach-quiz" element={<Quiz />} />
        <Route path="/scenario-component" element={<ScenarioComponent />} />
      </Routes>
    </Router>
  );
}

export default App;