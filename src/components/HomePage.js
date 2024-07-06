import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedWaves from './AnimatedWaves';

const HomePage = () => {
  const navigate = useNavigate();
  
  const navigateToAssessRisks = () => {
    navigate('/assess-risks');
  };

  return (
    <div>
      <div className="container">
        <h1>Assess your climate risks</h1>
        <button onClick={navigateToAssessRisks} className="button start-button">Get Started</button>
      </div>
      <AnimatedWaves />
    </div>
  );
};

export default HomePage;
