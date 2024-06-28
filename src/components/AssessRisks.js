import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RiskButtons from './RiskButtons';

const AssessRisks = () => {
  const navigate = useNavigate();
  const [selectedRisks, setSelectedRisks] = useState([]);

  const navigateBack = () => {
    navigate('/');
  };

  const navigateToResources = () => {
    navigate('/resources', { state: { selectedRisks } });
  };

  return (
    <div className="container-risks">
      <button onClick={navigateBack} className="button back-button">Back</button>
      <button onClick={navigateToResources} className="button resources-button">See Resources</button>
      <p>Use the tool below to assess your climate risks by typing your address. Then select the most significant risks from the list on the right.</p>
      <div className="iframe-container">
        <iframe
          src="https://riskfactor.com/"
          title="Risk Factor"
          className="iframe"
        ></iframe>
      </div>
      <RiskButtons selectedRisks={selectedRisks} setSelectedRisks={setSelectedRisks} />
    </div>
  );
};

export default AssessRisks;
