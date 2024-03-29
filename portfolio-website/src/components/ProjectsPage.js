import React from 'react';
import './ProjectCard';
import ProjectCard from './ProjectCard'; // Assuming you have a ProjectCard component for each project

function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <div className="content">
          <div className="left-section">
            {/* <img src="your_photo.jpg" alt="Your Photo" className="photo" /> */}
          </div>
          <div className="TextBox">
            <div className="project-container">
              {/* Assuming projects is an array of project objects */}
              <h2>Helio Telemetry Site</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
