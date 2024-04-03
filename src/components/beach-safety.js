// BeachSafety.js
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
                    <h1>Beach Safety</h1>
                    <Link to="/swimsafety">Learn Swim Safety Signs</Link>
                    {/* Add other main content here */}
                </div>
            </div>
        </div>
    );
}

export default BeachSafety;
