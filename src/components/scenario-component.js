// ScenarioComponent.js

import React, { useState } from 'react';
import './ScenarioComponent.css';


const ScenarioComponent = () => {
  const [scenario, setScenario] = useState({
    description: 'You are at the beach and notice a swimmer in distress. What do you do?',
    choices: [
      { id: 1, text: 'Call for help and notify a lifeguard.', feedback: 'Great choice! Lifeguards are trained to handle emergencies.' },
      { id: 2, text: 'Attempt to rescue the swimmer yourself.', feedback: 'Attempting to rescue without proper training can be dangerous. It’s best to call for help.' }
    ],
    selectedChoice: null,
    feedback: ''
  });

  const handleChoiceSelection = (choiceId) => {
    const selectedChoice = scenario.choices.find(choice => choice.id === choiceId);
    setScenario({ ...scenario, selectedChoice });
    

  return (
    <div className="scenario-container">
      <h2>Scenario</h2>
      <p>{scenario.description}</p>
      <div className="choices">
        {scenario.choices.map(choice => (
          <button key={choice.id} onClick={() => handleChoiceSelection(choice.id)}>
            {choice.text}
          </button>
        ))}
      </div>
      {scenario.selectedChoice && (
        <div className="feedback">
          <p>{scenario.selectedChoice.feedback}</p>
        </div>
      )}
    </div>
  );
};
}
export default ScenarioComponent;
