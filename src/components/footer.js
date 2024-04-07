import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  let navigate = useNavigate();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='footer'>
      <div className="footer-upper">
        <div className="project-description">
          New To Aussie project is being developed in the hopes that overseas visitors coming to Australia for the first time will have a go-to guide for safety rules and regulations including social etiquettes in one place. This website helps visitors learn through the help of gamified learning making their experience more engaging.
        </div>
        <div className="useful-links">
          <div className="footer-link" onClick={() => navigate('/')}>Home</div>
          <div className="footer-link" onClick={() => navigate('/road-safety')}>Road Safety</div>
          <div className="footer-link" onClick={() => navigate('/beach-safety')}>Beach Safety</div>
          <div className="footer-link" onClick={() => navigate('/attribution')}>Attributions</div>
        </div>
      </div>
      <div className="footer-lower">
        <button onClick={goToTop} className="back-to-top">Back to Top</button>
        <div className="copyright">
          Copyright © 2024 Dumb Legends
        </div>
      </div>
    </footer>
  );
}

export default Footer;
