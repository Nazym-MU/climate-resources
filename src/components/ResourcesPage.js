import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedRisks = location.state?.selectedRisks || [];

  useEffect(() => {
    axios.get('http://localhost:5001/climate-risk')
      .then(response => {
        const filteredResources = response.data.filter(resource =>
          resource.riskType.some(risk => selectedRisks.includes(risk))
        );
        setResources(filteredResources);
      })
      .catch(error => {
        console.error('There was an error fetching the resources!', error);
      });
  }, [selectedRisks]);

  const navigateBack = () => {
    navigate('/assess-risks');
  };

  return (
    <div className="container-resources">
      <button className="button back-button" onClick={navigateBack}>Back</button>
      <h1>Resources for Small Businesses to Combat Climate Change</h1>
      <div className="grid-container">
        {resources.map((resource, index) => (
          <div key={index} className="card">
            <h2>{resource.label}</h2>
            <p><strong>Resource Type:</strong> {resource.resourceType}</p>
            <p><strong>Risk Type:</strong> {resource.riskType.join(', ')}</p>
            <p><strong>Description:</strong> {resource.description}</p>
            <p><strong>Eligibility:</strong> {resource.eligibility}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
