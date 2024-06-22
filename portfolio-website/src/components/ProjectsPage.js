import React, { useState, useEffect } from 'react';
import './ProjectsPage.css';
import HelioTelemetry from './HeliosTelemetry.gif'; 
import SelfSustainingGarden from './SelfSustainingGarden.png';
import HandheldGameConsole from './HandheldVideoGameConsole.png';

const ProjectsPage = () => {
  const projectsData = [
    {
      id: 1,
      name: 'Helios Telemetry Site',
      description: 'Telemetry Dashboard for Shulich Helios, the 6th generation car for the University of Calgary Solar Car Team.',
      image: HelioTelemetry,
    },
    {
      id: 2,
      name: 'Self-Sustaining Garden System',
      description: 'Simple self-sustaining garden system that waters plants based on soil moisture levels and provides light based off of a light sensor.',
      image: SelfSustainingGarden,
    },
    {
      id: 3,
      name: 'Handheld Game Console',
      description: 'Handheld maze video game console. Built using an Arduino and a 1.8" TFT display.',
      image: HandheldGameConsole,
    },
    {
      id: 4,
      name: 'Coming soon!',
      description: 'Description for Project 4...',
      image: 'https://via.placeholder.com/1300x700',
    }
    
  ];

  // State to keep track of the selected project
  const [selectedProject, setSelectedProject] = useState(projectsData[0].id); // Initialize with the ID of the first project

  // Function to handle project selection
  const handleProjectSelection = (projectId) => {
    setSelectedProject(projectId);
  };

  useEffect(() => {
    const homeContainer = document.querySelector('.projects-page');
    const maxBubbles = 20; 
    const activeBubbles = []; 
  
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      homeContainer.appendChild(bubble);
  
      
      const size = Math.random() * 20 + 5;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      const duration = Math.random() * 6 + 2;
      bubble.style.animationDuration = `${duration}s`;
  
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
  
     
      activeBubbles.push(bubble);
  
      
      if (activeBubbles.length > maxBubbles) {
        const oldestBubble = activeBubbles.shift();
        oldestBubble.remove();
      }
  
      
      bubble.addEventListener('animationend', () => {
        const index = activeBubbles.indexOf(bubble);
        if (index !== -1) {
          activeBubbles.splice(index, 1);
        }
        bubble.remove();
      });
    };
  
    for (let i = 0; i < 15; i++) {
      createBubble();
    }
  
    const bubbleInterval = setInterval(createBubble, 3000);
  
    return () => {
      clearInterval(bubbleInterval);
    };
  }, []);

  return (
    <div className="projects-page-body">
    <div className="projects-page">
      <div className="project-details">
        <div>
          <img src={projectsData[selectedProject - 1].image} alt={projectsData[selectedProject - 1].name} />
          <h2>{projectsData[selectedProject - 1].name}</h2>
          <p className='projectDescription'>{projectsData[selectedProject - 1].description}</p>
        </div>
      </div>
      <div className="projects-bar">
        <h1 style={{marginRight: '50px', marginBottom:'0px'}}>Projects</h1>
        <hr style={{border: '2px solid #ff7f7f', width: '100%'}} />
        {projectsData.map((project) => (
          <>
            <p className="project-title">{project.name}</p>
            <img
                key={project.id}
                src={project.image}
                alt={project.name}
                className={`project-image ${selectedProject === project.id ? 'selected' : ''}`}
                onClick={() => handleProjectSelection(project.id)}
              />
          </>
            
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectsPage;
