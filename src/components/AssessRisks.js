import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RiskButtons from './RiskButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AssessRisks = () => {
  const navigate = useNavigate();
  const [selectedRisks, setSelectedRisks] = useState([]);
  const [showIframe, setShowIframe] = useState(false);

  const navigateToResources = () => {
    if (selectedRisks.length > 0) {
      navigate('/resources', { state: { selectedRisks } });
    }
  };

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  return (
    <div className="container-risks">
      <button
        onClick={navigateToResources}
        className="resources-button"
        disabled={selectedRisks.length === 0}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <div className="content">
        <h1>Select the risks that your business faces:</h1>
        <RiskButtons selectedRisks={selectedRisks} setSelectedRisks={setSelectedRisks} />
        {!showIframe && (
          <button className="help-button" onClick={toggleIframe}>
            Need help assessing your risks?
          </button>
        )}
      </div>
      <div className={`iframe-container ${showIframe ? 'show' : ''}`}>
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
