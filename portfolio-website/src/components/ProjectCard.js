// ProjectCard.js
import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {/* Add more details about the project if needed */}
    </div>
  );
}

export default ProjectCard;
