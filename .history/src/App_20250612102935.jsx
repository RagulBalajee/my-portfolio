import { Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import ContactForm from './components/ContactForm';
import DarkModeToggle from './components/DarkModeToggle';
import Modal from './components/Modal';
import CertificateCard from './components/CertificateCard';
import BlogCard from './components/BlogCard';
import './App.css';

function Home() {
  return <Hero />;
}

function About() {
  return <section className="page"><h1>About Me</h1><p>This is where you can write about yourself.</p></section>;
}

function Experience() {
  return <section className="page"><h1>Experience</h1><p>Details about your work experience.</p></section>;
}

function Achievements() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificatesData = [];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section className="page achievements-page">
      <h2 className="page-title">My Achievements</h2>
      {certificatesData.length === 0 ? (
        <p className="empty-message">No achievements added yet. Check back soon!</p>
      ) : (
        <div className="achievements-grid">
          {certificatesData.map((certificate, index) => (
            <CertificateCard 
              key={index} 
              certificate={certificate} 
              onClick={() => openModal(certificate)}
            />
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedCertificate && (
          <img 
            src={selectedCertificate.image} 
            alt={selectedCertificate.title} 
            style={{ maxWidth: '100%', maxHeight: '80vh' }}
          />
        )}
      </Modal>
    </section>
  );
}

function Blogs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogPosts = [
    { title: 'Google Analytics Certification', pdf: '/google.pdf' },
    { title: 'Android Development Fundamentals', pdf: '/andi.pdf' },
    { title: 'University Course Certificate', pdf: '/uni.pdf' },
    { title: 'Forage Certificate', pdf: '/forage certificate.pdf' },
    { title: 'MongoDB Certification', pdf: '/Mongo DB.pdf' },
    { title: 'CSE Course Certificate', pdf: '/cse1.pdf' },
    { title: 'Data Structures & Algorithms in Java', pdf: '/data structure and algorithm using java.pdf' },
    { title: 'Python for Data Science', pdf: '/python for data science.pdf' },
    { title: 'Problem Solving Through Programming in C', pdf: '/Problem Solving Through Programming In C.pdf' },
    { title: 'Software Testing Certificate', pdf: '/Software Testing.pdf' },
  ];

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <section className="page blogs-page">
      <h2 className="page-title">My Blog Posts & Certifications</h2>
      <div className="blogs-grid">
        {blogPosts.map((blog, index) => (
          <BlogCard key={index} blog={blog} onClick={() => openModal(blog)} />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedBlog && (
          <iframe src={selectedBlog.pdf} title={selectedBlog.title} className="pdf-viewer" />
        )}
      </Modal>
    </section>
  );
}

function Projects() {
  const projectsData = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built with React and Vite.',
      image: 'https://via.placeholder.com/400x250/38bdf8/ffffff?text=Portfolio',
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'E-commerce Store',
      description: 'A full-stack e-commerce application with user authentication and payment integration.',
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=E-commerce',
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Management App',
      description: 'A simple task management application with drag-and-drop functionality.',
      image: 'https://via.placeholder.com/400x250/f97316/ffffff?text=Task+App',
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section className="page projects-page">
      <h2 className="page-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const skillsData = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Node.js', icon: '🌳' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git', icon: '🐙' },
    { name: 'Figma', icon: 'F' },
    { name: 'Python', icon: '🐍' },
  ];

  return (
    <section className="page skills-page">
      <h2 className="page-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <SkillBadge key={index} skill={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page contact-page">
      <ContactForm />
    </section>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelectorAll('.navbar a').forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [location]);

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
        <div style={{ marginLeft: 'auto' }}>
          <DarkModeToggle />
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
