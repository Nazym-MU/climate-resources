import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [resourceTypeFilter, setResourceTypeFilter] = useState('');
  const location = useLocation();

  const selectedRisks = useMemo(() => location.state?.selectedRisks || [], [location.state]);

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleResourceTypeFilter = (event) => {
    setResourceTypeFilter(event.target.value);
  };

  const filteredResources = resources.filter(resource =>
    (resource.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
     resource.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (resourceTypeFilter === '' || resource.resourceType === resourceTypeFilter)
  );

  return (
    <div className="page-container">
      <Header />
      <div className="container-resources">
        <h1>Resources for Small Businesses to Combat Climate Change</h1>
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="filters">
          <select value={resourceTypeFilter} onChange={handleResourceTypeFilter} className="dropdown">
            <option value="">All Resource Types</option>
            <option value="California Grant/Fund/Loan">California Grant/Fund/Loan</option>
            <option value="Federal Grant/Fund">Federal Grant/Fund</option>
            <option value="Federal Organization ">Federal Organization</option>
            <option value="General Information">General Information</option>
            <option value="How-To-Guide">How-To-Guide</option>
            <option value="Local Organization">Local Organization</option>
            <option value="Risk Assessment">Risk Assessment</option>
            <option value="SF Grant/Fund">San Francisco Grant/Fund</option>
            <option value="SF Organization">San Francisco Organization</option>
          </select>
        </div>
        <div className="grid-container">
          {filteredResources.map((resource, index) => (
            <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer" className="card">
              <img src={resource.image} alt={resource.label} className="resource-image" />
              <div className="resource-details">
                <h2>{resource.label}</h2>
                <p className="resource-description">{resource.description}</p>
                <p className="resource-eligibility"><strong>Eligibility:</strong> {resource.eligibility}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
