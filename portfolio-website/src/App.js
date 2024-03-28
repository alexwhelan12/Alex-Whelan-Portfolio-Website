// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
