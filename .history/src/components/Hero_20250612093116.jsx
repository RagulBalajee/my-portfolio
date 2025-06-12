import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1 
      }
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    },
  };

  return (
    <motion.section 
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex-center hero-content">
        <motion.h1 variants={itemVariants} className="hero-title">
          Hi, I'm <span className="highlight">Ragul Balajee</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-subtitle">
          A passionate web developer building modern and responsive applications.
        </motion.p>
        <motion.div variants={itemVariants} className="hero-buttons">
          <a href="/projects" className="btn btn-primary">View My Work</a>
          <a href="/contact" className="btn btn-secondary">Get In Touch</a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
