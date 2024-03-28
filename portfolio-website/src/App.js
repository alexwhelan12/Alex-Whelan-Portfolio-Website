// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomeMainSection';
import ContactPage from './components/ContactPage';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <HomePage /> */}
        <ContactPage />
        {/* <About />
        <Projects />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
