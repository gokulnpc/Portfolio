import React, { useState } from 'react';
import Modal from 'react-modal';
import './Projects.css';
// Import project images and other assets here
import projectImage from '../assets/img/portfolioss.png'; // Replace with your actual paths

// Define your projects data
const projects = [
  {
    name: 'Project One',
    description: 'A brief description of Project One...',
    githubLink: 'https://github.com/yourusername/projectone', // Replace with actual links
    websiteLink: 'https://projectone.com', // Replace with actual links
    image: projectImage, // Replace with actual imported image
  },
  {
    name: 'Project One',
    description: 'A brief description of Project One...',
    githubLink: 'https://github.com/yourusername/projectone', // Replace with actual links
    websiteLink: 'https://projectone.com', // Replace with actual links
    image: projectImage, // Replace with actual imported image
  },
  {
    name: 'Project One',
    description: 'A brief description of Project One...',
    githubLink: 'https://github.com/yourusername/projectone', // Replace with actual links
    websiteLink: 'https://projectone.com', // Replace with actual links
    image: projectImage, // Replace with actual imported image
  },
  // ... Add more projects here
];

const ProjectsComponent = () => {


  return (
    <div className="projects-container">
      <h1 className="about-heading title"><span>My Projects💎</span></h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-footer">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">Website</a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProjectsComponent;
