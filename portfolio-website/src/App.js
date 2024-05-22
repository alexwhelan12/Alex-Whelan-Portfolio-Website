// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/HomePage';
import Contact from './components/ContactPage';
import Header from './components/Header';
import ProjectsPage from './components/ProjectsPage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Check sessionStorage for initial loading state
    const loaded = sessionStorage.getItem('appLoaded');
    return loaded ? false : true;
  });

  useEffect(() => {
    if (isLoading) {
      // Simulate a loading delay (e.g., fetching data, etc.)
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('appLoaded', 'true');
      }, 2000); // Adjust the time as needed

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    isLoading ? <LoadingScreen /> : (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    )
  );
}

export default App;
