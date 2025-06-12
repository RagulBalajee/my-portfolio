import React from 'react';
import { motion } from 'framer-motion';
import './BlogCard.css';

const BlogCard = ({ blog, onClick }) => {
  const { title, thumbnail } = blog;

  return (
    <motion.div 
      className="blog-card"
      onClick={onClick}
      whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.2 }}
    >
      {thumbnail && <img src={thumbnail} alt={title} className="blog-thumbnail" />}
      <h3 className="blog-title">{title}</h3>
    </motion.div>
  );
};

export default BlogCard; 