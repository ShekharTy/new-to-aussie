
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <motion.div 
      className="sidebar"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      
      <ul>
        <li><Link to="/swimsafety"> Beach Safety Signs & Regulations</Link></li>
        <li><Link to="/warning"> Beach Warning Signs</Link></li>
        <li><Link to="/beach-quiz">Check Your Beach Safety Knowledge</Link></li>
        <li><Link to="/scenario-component">Scenario Based Learning Module</Link></li>
      </ul>
      </motion.div>
  );
};
export default Sidebar; 
