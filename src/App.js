import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResourcesPage from './components/ResourcesPage';
import AssessRisks from './components/AssessRisks';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/assess-risks" element={<AssessRisks />} />
        </Routes>
    </Router>
  );
}

export default App;

