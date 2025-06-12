import React from 'react';
import { motion } from 'framer-motion';
import './SkillBadge.css';

const SkillBadge = ({ skill, icon }) => {
  const isImageIcon = icon && (icon.startsWith('/') || icon.includes('.jpg') || icon.includes('.png') || icon.includes('.svg'));

  return (
    <motion.div 
      className="skill-badge"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {icon && (
        isImageIcon ? (
          <img src={icon} alt={skill} className="skill-icon-image" />
        ) : (
          <span className="skill-icon">{icon}</span>
        )
      )}
      <span className="skill-name">{skill}</span>
    </motion.div>
  );
};

export default SkillBadge; 