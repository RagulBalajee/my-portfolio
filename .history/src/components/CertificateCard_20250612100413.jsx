import React from 'react';
import { motion } from 'framer-motion';
import './CertificateCard.css';

const CertificateCard = ({ certificate, onClick }) => {
  const { title, image } = certificate;

  return (
    <motion.div 
      className="certificate-card"
      onClick={onClick}
      whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.2 }}
    >
      {image && <img src={image} alt={title} className="certificate-image" />}
      <h3 className="certificate-title">{title}</h3>
    </motion.div>
  );
};

export default CertificateCard; 