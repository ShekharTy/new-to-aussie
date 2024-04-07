import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import '../styles/beach-safety.css';
import Sidebar from '../components/sidebar';
import Quiz from './beach-quiz';

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
                    <h1>Beach Safety Module</h1>
                    <p>
                        Welcome to the Beach Safety Module, your comprehensive guide to staying safe and informed while enjoying the coastal beauty.
                    </p>
                    <p>
                        In this module, you'll dive deep into the essential aspects of beach safety, covering everything from flag signs to scenario-based learning. Our goal is to empower you with the knowledge and skills needed to navigate the beach environment confidently.
                    </p>
                    <p>
                        Throughout this module, you'll explore:
                    </p>
                    <ol>
                        <li>Beach Flag Signs: Learn to understand the meaning behind various flag colours.</li>
                        <li>Warning Signs: Familiarise yourself with common warning signs found at beaches.</li>
                        <li>Scenario-Based Learning: Engage in interactive scenarios that simulate real-life beach situations, allowing you to make informed decisions.</li>
                        <li>Knowledge Check: Test your understanding of beach safety concepts with quizzes designed to reinforce key information and ensure you're well-prepared to tackle any beach-related challenges.</li>
                    </ol>
                    <p>
                        By the end of this module, you'll emerge as a savvy beachgoer equipped with the skills and awareness needed to enjoy the coastal wonders responsibly. So grab your sunscreen, pack your beach gear, and let's embark on a journey to discover the beauty of the beach while prioritising safety every step of the way.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BeachSafety;
