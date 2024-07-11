import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResourcesPage from './components/ResourcesPage';
import AssessRisks from './components/AssessRisks';
import AboutUs from './components/AboutUs';
import News from './components/News';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight);

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/assess-risks" element={<AssessRisks />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
        </Routes>
    </Router>
  );
}

export default App;

