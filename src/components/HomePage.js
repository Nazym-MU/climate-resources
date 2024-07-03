import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedWaves from './AnimatedWaves';

const HomePage = () => {
  const navigate = useNavigate();

  const pathData = "M0,160 Q360,240 720,160 T1440,160 V320 H0 Z";
  const navigateToAssessRisks = () => {
    navigate('/assess-risks');
  };

  return (
    <div>
      <div className="container">
        <h1>Assess your climate risks</h1>
        <button onClick={navigateToAssessRisks} className="button start-button">Get Started</button>
      </div>
      <div className="wave-container">
        <AnimatedWaves
          className="wave1"
          fillOpacity={0.6}
          pathData={pathData}
          animation="moveWaves 5s linear infinite"
        />
        <AnimatedWaves
          className="wave2"
          fillOpacity={0.4}
          pathData={pathData}
          animation="moveWaveReverse 10s linear infinite"
        />
        <AnimatedWaves
          className="wave3"
          fillOpacity={0.2}
          pathData={pathData}
          animation="moveWaves 3s linear infinite"
        />
      </div>
    </div>
  );
};

export default HomePage;
