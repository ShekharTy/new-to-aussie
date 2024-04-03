import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import '../styles/beach-safety.css';
import Sidebar from '../components/sidebar';

const Quiz = () => {
  const questions = [
    {
      questionText: 'What do red and yellow flags at the beach signify?',
      answerOptions: [
        { answerText: 'Water skiing area', isCorrect: false },
        { answerText: 'Safe swimming area', isCorrect: true },
        { answerText: 'Fishing zone', isCorrect: false },
        { answerText: 'Camping area', isCorrect: false },
      ],
    },
    {
      questionText: 'What does a red flag on the beach indicate?',
      answerOptions: [
        { answerText: 'Safe to swim', isCorrect: false },
        { answerText: 'Strong winds', isCorrect: false },
        { answerText: 'Dangerous conditions, no swimming', isCorrect: true },
        { answerText: 'Water skiing permitted', isCorrect: false },
      ],
    },
    {
      questionText: 'If you see a yellow flag at the beach, what does it mean?',
      answerOptions: [
        { answerText: 'Sharks have been spotted', isCorrect: false },
        { answerText: 'Safe for water skiing', isCorrect: false },
        { answerText: 'Caution - moderate surf and/or currents', isCorrect: true },
        { answerText: 'Perfect conditions for swimming', isCorrect: false },
      ],
    },
    {
      questionText: 'What does a "No Swimming" sign at the beach signify?',
      answerOptions: [
        { answerText: 'Swimming is advised', isCorrect: false },
        { answerText: 'The presence of dangerous marine life', isCorrect: false },
        { answerText: 'Water is too shallow for swimming', isCorrect: false },
        { answerText: 'Swimming is prohibited due to dangerous conditions', isCorrect: true },
      ],
    },
    {
      questionText: 'You notice a sign that reads "Camping Prohibited." What does this mean?',
      answerOptions: [
        { answerText: 'Camping is allowed during the day', isCorrect: false },
        { answerText: 'Camping is permitted with a permit', isCorrect: false },
        { answerText: 'No camping is allowed on the beach', isCorrect: true },
        { answerText: 'Camping is allowed outside of swimming areas', isCorrect: false },
      ],
    },
    {
      questionText: 'Which sign indicates that there are dangerous currents that could carry swimmers away from the shore?',
      answerOptions: [
        { answerText: 'Long Beach', isCorrect: false },
        { answerText: 'Rip', isCorrect: true },
        { answerText: 'Shallow Water', isCorrect: false },
        { answerText: 'Large Waves', isCorrect: false },
      ],
    },
    {
      questionText: 'What does a sign warning of "Marine Stingers" imply?',
      answerOptions: [
        { answerText: 'The water is safe for swimming', isCorrect: false },
        { answerText: 'There are dangerous jellyfish in the water', isCorrect: true },
        { answerText: 'The beach is closed for swimming', isCorrect: false },
        { answerText: 'Fishing is prohibited', isCorrect: false },
      ],
    },
    {
      questionText: 'What should you be cautious of if there\'s a sign indicating "Sudden Drop Off"?',
      answerOptions: [
        { answerText: 'Sharks in the vicinity', isCorrect: false },
        { answerText: 'A rapid increase in water depth', isCorrect: true },
        { answerText: 'High winds affecting the beach', isCorrect: false },
        { answerText: 'Prohibition of water skiing', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
          setScore(score + 1);
      }
  };

  const nextQuestion = () => {
      const nextQ = currentQuestion + 1;
      if (nextQ < questions.length) {
          setCurrentQuestion(nextQ);
      } else {
          setShowScore(true);
      }
  };

  const prevQuestion = () => {
      const prevQ = currentQuestion - 1;
      if (prevQ >= 0) {
          setCurrentQuestion(prevQ);
      }
  };

  const quizProgress = ((currentQuestion + 1) / questions.length) * 100;

  return (
      <div className='quiz'>
          {showScore ? (
              <div className='score-section'>
                  You scored {score} out of {questions.length}
              </div>
          ) : (
              <>
                  <div className="progress-bar" style={{ width: `${quizProgress}%` }}></div>
                  <div className='question-section'>
                      <div className='question-count'>
                          <span>Question {currentQuestion + 1}</span>/{questions.length}
                      </div>
                      <div className='question-text'>{questions[currentQuestion].questionText}</div>
                  </div>
                  <div className='answer-section'>
                      {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                          <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} key={index}>
                              {answerOption.answerText}
                          </button>
                      ))}
                  </div>
                  <div className="navigation-buttons">
                      {currentQuestion > 0 && <button onClick={prevQuestion}>← Previous</button>}
                      {currentQuestion < questions.length - 1 ? (
                          <button onClick={nextQuestion}>Next →</button>
                      ) : (
                          <button onClick={nextQuestion}>Finish</button>
                      )}
                  </div>
              </>
          )}
      </div>
  );
};

export default Quiz;