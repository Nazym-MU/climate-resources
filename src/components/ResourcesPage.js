import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const resources = [
  { title: 'Resource 1', description: 'Description of Resource 1', link: '#', risks: ['Flood', 'Heat'] },
  { title: 'Resource 2', description: 'Description of Resource 2', link: '#', risks: ['Fire', 'Drought'] },
  // Add more resources with associated risks as needed
];

const ResourcesPage = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate('/assess-risks');
  };

  const location = useLocation();
  const selectedRisks = location.state?.selectedRisks || [];

  const filteredResources = resources.filter(resource =>
    resource.risks.some(risk => selectedRisks.includes(risk))
  );

  return (
    <div className="container-resources">
      <button onClick={navigateBack} className="button back-button">Back</button>
      <h1>Resources for businesses to prepare for climate risks</h1>
      <div className="grid-container">
        {filteredResources.map((resource, index) => (
          <div key={index} className="card">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
