import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RiskButtons from './RiskButtons';

const AssessRisks = () => {
  const navigate = useNavigate();
  const [selectedRisks, setSelectedRisks] = useState([]);
  const [showWarning, setShowWarning] = useState(false);

  const navigateBack = () => {
    navigate('/');
  };

  const navigateToResources = () => {
    if (selectedRisks.length > 0) {
      navigate('/resources', { state: { selectedRisks } });
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="container-risks">
      <button onClick={navigateBack} className="button back-button">Back</button>
      <button onClick={navigateToResources} className="button resources-button">
        Next
      </button>
      <div className="iframe-container">
        <iframe
          src="https://riskfactor.com/"
          title="Risk Factor"
          className="iframe"
        ></iframe>
      </div>
      <RiskButtons selectedRisks={selectedRisks} setSelectedRisks={setSelectedRisks} />
      {showWarning && selectedRisks.length === 0 && (
        <p className="warning-text">Select at least 1 risk type to proceed</p>
      )}
    </div>
  );
};

export default AssessRisks;
