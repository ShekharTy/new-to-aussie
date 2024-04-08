import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';
import homepage from '../data/logo.png'; 

function Header() {
  let navigate = useNavigate();

  return (
    <div className='header'>
        <img src={homepage} alt='Logo' onClick={() => navigate('/home')}></img>
      <div className='header-buttons'>
      <button onClick={() => navigate('/home')}>Home</button>
      <button onClick={() => navigate('/road-safety')}>Road Safety</button>
      <button onClick={() => navigate('/beach-safety')}>Beach Safety</button>
      <button onClick={() => navigate('/attribution')}>Attributions</button>
      </div>
    </div>
  );
}

export default Header;