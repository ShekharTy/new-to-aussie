import React, { useState } from 'react';
import '../styles/scenario-component.css';
// Beach Safety V2
function ScenarioComponent() {
  const scenarios = [
    {
      description: 'You are at the beach and notice a swimmer in distress. What do you do?',
      choices: [
        { id: 1, text: 'Call for help and notify a lifeguard.', feedback: 'Great choice! Lifeguards are trained to handle emergencies.' },
        { id: 2, text: 'Attempt to rescue the swimmer yourself.', feedback: 'Attempting to rescue without proper training can be dangerous. It’s best to call for help.' }
      ]
    },
    {
      description: 'You see Strong Winds Warning Sign. What do you do?',
      choices: [
        { id: 1, text: 'Understand the symbol and stay away from beach.', feedback: 'Excellent decision! Warnings should be adhered strictly to have a safe and enjoable experience.' },
        { id: 2, text: 'Ignore the signs and do parasailing', feedback: 'Do not ignore the warnings, It should be followed.' }
      ]
    },
    {
      description: 'You notice someone using inflatable toys or rafts in a non-designated swimming area. What do you do?',
      choices: [
        { id: 1, text: 'Inform them about the designated swimming areas and advise them to move there.', feedback: 'Good choice! It’s important to educate beachgoers about safety rules and designated swimming areas.' },
        { id: 2, text: 'Ignore it and continue with your activities.', feedback: 'Ignoring safety violations can lead to accidents. It’s important to address potential hazards to prevent accidents.' }
      ]
    }
  ];

  const [selectedScenario, setSelectedScenario] = useState(null);

  const handleChoiceSelection = (scenarioIndex, choiceId) => {
    const selectedChoice = scenarios[scenarioIndex].choices.find(choice => choice.id === choiceId);
    setSelectedScenario({ scenarioIndex, selectedChoice });
  };

  return (
    <div className="scenario-container">
      <h1>Scenario Based Learning</h1>
      {scenarios.map((scenario, index) => (
        <div key={index}>
          <h2>Scenario {index + 1}</h2>
          <p>{scenario.description}</p>
          <div className="choices">
            {scenario.choices.map(choice => (
              <button key={choice.id} onClick={() => handleChoiceSelection(index, choice.id)}>
                {choice.text}
              </button>
            ))}
          </div>
          {selectedScenario && selectedScenario.scenarioIndex === index && (
            <div className="feedback">
              <p>{selectedScenario.selectedChoice.feedback}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default ScenarioComponent;
