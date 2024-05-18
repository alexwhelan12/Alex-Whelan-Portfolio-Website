// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import Contact from './components/ContactPage';
import Header from './components/Header';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>xw
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
