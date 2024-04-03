// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sidebar">
      <h2>Beach Safety</h2>
      <ul className="sidebar-nav">
        <li>
          <a href="#" onClick={() => scrollToSection('swim')}>Learn Beach safety & regulations</a>
        </li>
        <li>
          <a href="#" onClick={() => scrollToSection('warning')}>Learn Beach Warning Signs</a>
        </li>
        <li>
          <a href="#" onClick={() => scrollToSection('rip-currents')}>Rip Currents</a>
        </li>
        <li>
          <a href="#" onClick={() => scrollToSection('quiz')}>Quiz</a>
        </li>
      </ul>

      {/* Sections with ids for scrolling */}
      <div id="swim">
      </div>
      <div id="warning">
        {/* Content related to currents signs goes here */}
      </div>
      
      <div id="rip-currents">
        {/* Content related to rip currents goes here */}
      </div>

      <div id="quiz">
        {/* Content related to quiz goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
