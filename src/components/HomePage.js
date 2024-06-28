import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToAssessRisks = () => {
    navigate('/assess-risks');
  };

  return (
    <div className="container">
      <h1>Assess your climate risks</h1>
      <button onClick={navigateToAssessRisks} className="button start-button">Get Started</button>
    </div>
  );
};

export default HomePage;
