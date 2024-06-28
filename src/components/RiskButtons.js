import React from 'react';

const riskNames = [
  'Flood',
  'Fire',
  'Heat',
  'Drought',
  'Wind'
];

const RiskButtons = ({ selectedRisks, setSelectedRisks }) => {
  const toggleRisk = (risk) => {
    setSelectedRisks((prevSelectedRisks) => {
      if (prevSelectedRisks.includes(risk)) {
        return prevSelectedRisks.filter((r) => r !== risk);
      } else {
        return [...prevSelectedRisks, risk];
      }
    });
  };

  return (
    <div className="risk-buttons-container">
      {riskNames.map((risk) => (
        <button
          key={risk}
          onClick={() => toggleRisk(risk)}
          className={`risk-button ${selectedRisks.includes(risk) ? 'selected' : ''}`}
        >
          {risk}
        </button>
      ))}
    </div>
  );
};

export default RiskButtons;
