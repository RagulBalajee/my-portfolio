import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import './App.css';

function Home() {
  return <Hero />;
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
  return <section className="page"><h1>Skills</h1><p>Technologies I use.</p></section>;
}
function Contact() {
  return <section className="page"><h1>Contact</h1><p>Get in touch with me.</p></section>;
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
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
