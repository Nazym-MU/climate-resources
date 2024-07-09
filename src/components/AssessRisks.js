import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RiskButtons from './RiskButtons';

const AssessRisks = () => {
  const navigate = useNavigate();
  const [selectedRisks, setSelectedRisks] = useState([]);

  const navigateToResources = () => {
    if (selectedRisks.length > 0) {
      navigate('/resources', { state: { selectedRisks } });
    }
  };

  return (
    <div className="container-risks">
      <button
        onClick={navigateToResources}
        className="button resources-button"
        disabled={selectedRisks.length === 0}
      >
        <i class='arrow right'></i>
      </button>
      <h1>Select the risks for your business from the list below:</h1>
      <RiskButtons selectedRisks={selectedRisks} setSelectedRisks={setSelectedRisks} />
      <p>Need help assessing your risks?</p>
      <div className="iframe-container">
        <iframe
          src="https://riskfactor.com/"
          title="Riskfactor"
          className="iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default AssessRisks;
