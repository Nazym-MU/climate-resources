import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToAssessRisks = () => {
    navigate('/assess-risks');
  };

  return (
    <div className="container">
      <h1>Welcome to the Small Business Climate Change Resources</h1>
      <button onClick={navigateToAssessRisks} className="button">Get Started</button>
    </div>
  );
};

export default HomePage;
