import React from 'react';
import { Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ragul-balajee-g-k-08b079209/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/RagulBalajee" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="https://www.instagram.com/worldof_ragul/profilecard/?igsh=dm54dHh4ZTdlMTU=" target="_blank" rel="noopener noreferrer" className="social-link">
            <Instagram size={20} />
            <span>Instagram</span>
          </a>
          <a href="https://wa.me/918807081117" target="_blank" rel="noopener noreferrer" className="social-link">
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 