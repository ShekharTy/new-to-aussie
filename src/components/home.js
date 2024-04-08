import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import '../styles/home.css';
import bgimg from '../data/bg2.jpg';

function Homepage() {
    let navigate = useNavigate();

    useEffect(() => {
        document.title = `Home`;
    });
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="page-container-home">
            <Header />
            <div className="image-message-container-home">
                <img className='bg-img' src={bgimg} alt="Background"></img>
                <div className="welcome-message-home">
                    <h1>Prepare with New To Aussie</h1>
                    <h4>Stay Safe on Your Australian Journey</h4>
                </div>
            </div>
            <div className="safety-sections">
                <div className="safety-container road-safety" onClick={() => handleNavigate('/road-safety')}>
                    <div className="safety-text">Driving Somewhere?</div>
                </div>
                <div className="safety-container beach-safety" onClick={() => handleNavigate('/beach-safety')}>
                    <div className="safety-text">Heading out to the beach?</div>
                </div>
            </div>
            <div className="content-wrap">
                <h2>Exploring Victoria</h2>
                <p>
                    The unmatched beauty of autumn in Victoria offers an ideal backdrop for overseas visitors. However, it's crucial to navigate this vibrant state safely, whether you're hitting the road or exploring its stunning coastlines.
                </p>

                <div className="safety-guides">
                    <section className="safety-guide">
                        <h3>Road Safety for Overseas Visitors</h3>
                        <p>
                            Victoria’s diverse landscapes from untamed coastlines to rolling hills are best explored at a safe pace. Remember to keep left, watch for wildlife, and be mindful of local driving laws to enjoy Victoria's scenic routes securely.
                        </p>
                    </section>

                    <section className="safety-guide">
                        <h3>Beach Safety for Overseas Visitors</h3>
                        <p>
                            Victoria's beaches offer serenity and adventure. Always swim at patrolled beaches, understand rip currents, and follow lifeguard advice for a safe beach experience.
                        </p>
                    </section>
                </div>

            </div>

            
            <Footer />
        </div>
    );
}


export default Homepage;
