import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, image, liveLink, githubLink } = project;

  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -5, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.2 }}
    >
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">Live Demo</a>}
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">GitHub</a>}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 