import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import '../styles/beach-safety.css';
import Sidebar from '../components/sidebar';

function BeachSafety() {
    useEffect(() => {
        document.title = `Beach Safety`;
    }, []);

    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <div className="main-content">
                    <h1>Enjoy the Beach, Stay Safe!</h1>
                    <p>
                        Beach safety is crucial for ensuring a fun and secure experience by the seaside. Here are some important beach safety rules you can learn in below modules 
                        and test your skills with an interactive quiz!
                    </p>
                    <h2>Learning Modules</h2>
                    <ul className="beach-safety-list">
                        <li>
                            <Link to="/swimsafety">Learn Beach Safety & Regulation Signs</Link>
                        </li>

                        <li>
                            <Link to="/warning">Learn Beach Warning Signs</Link>
                        </li>

                        <li>
                            <Link to="/beach-quiz">Check your learnings - Quiz </Link>
                        </li>
                        
                        <li>
                            <Link to="/scenario-component">Scenario Based Learning Module </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BeachSafety;
