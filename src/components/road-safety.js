import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/road-safety.css';

function RoadSafety() {
    const [selectedModule, setSelectedModule] = useState('');

    useEffect(() => {
        document.title = `Road Safety`;
    });

    // Function to update the selected module
    const handleModuleClick = (module) => {
        setSelectedModule(module);
    };

    return (
        <div>
            <Header />
            <div className="road-safety-container">
                <aside className="sidebar">
                    <h2>Road Safety and Regulations</h2>
                    <ul>
                        <li className={selectedModule === 'Traffic signs' ? 'active' : ''} onClick={() => handleModuleClick('Traffic signs')}>Traffic signs</li>
                        <li className={selectedModule === 'RoadWorks' ? 'active' : ''} onClick={() => handleModuleClick('RoadWorks')}>RoadWorks</li>
                        <li className={selectedModule === 'Myth Buster' ? 'active' : ''} onClick={() => handleModuleClick('Myth Buster')}>Myth Buster</li>
                    </ul>
                    <h2>Check your learning</h2>
                    <ul>
                        <li className={selectedModule === 'Quiz' ? 'active' : ''} onClick={() => handleModuleClick('Quiz')}>Quiz</li>
                    </ul>
                </aside>
                <div className="content">
                    {selectedModule === 'Traffic signs' && <h1>Traffic Signs Content</h1>}
                    {selectedModule === 'RoadWorks' && <h1>Roadworks Content</h1>}
                    {selectedModule === 'Myth Buster' && <h1>Myth Buster</h1>}
                    {selectedModule === 'Quiz' && <h1>Quiz</h1>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RoadSafety;
