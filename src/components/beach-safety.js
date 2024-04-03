import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import '../styles/beach-safety.css';
<<<<<<< HEAD

=======
import Sidebar from '../components/sidebar';
import Quiz from './quiz';
>>>>>>> 5aced8a (Implement beach safety quiz feature)

function BeachSafety() {
    useEffect(() => {
        document.title = `Beach Safety`;
    }, []);

    const [showQuiz, setShowQuiz] = useState(false);

    const toggleQuiz = () => setShowQuiz(!showQuiz);

    return (
        <div>
            <Header />
            <div className="body">
                
                <div className="main-content">
                    <h1>Enjoy the Beach, Stay Safe!</h1>
                    <p>
                        Beach safety is crucial for ensuring a fun and secure experience by the seaside. Here are some important beach safety rules to follow:
                    </p>
                    <h2>Learning Modules</h2>
                    <ul className="beach-safety-list">
                        <li>
                            <Link to="/swimsafety">Learn Beach Safety & Regulation Signs</Link>
                        </li>
                        <li>
                            <Link to="/warning">Learn Beach Warning Signs</Link>
                        </li>
<<<<<<< HEAD
                        <li>
                            <Link to="/beachquiz">Check your learnings - Quiz </Link>
=======
                        {/* Toggle quiz visibility from the BeachSafety page */}
                        <li>
                            <button onClick={toggleQuiz}>Take the Quiz</button>
>>>>>>> 5aced8a (Implement beach safety quiz feature)
                        </li>
                    </ul>
                    
                    {/* Add other main content here */}
                    {/* Conditionally render the Quiz component */}
                    {showQuiz && <Quiz />}
                </div>
            </div>
        </div>
    );
}

  

export default BeachSafety;
