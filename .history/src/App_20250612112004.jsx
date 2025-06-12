import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import ContactForm from './components/ContactForm';
import DarkModeToggle from './components/DarkModeToggle';
import Modal from './components/Modal';
import BlogCard from './components/BlogCard';
import './App.css';

// Placeholder components for sections - will be expanded later
function About() {
  return (
    <section id="about" className="page about-page">
      <h2 className="page-title">About Me</h2>
      <div className="about-content">
        <ul>
          <li>Currently pursuing B.Tech in Computer Science at St. Joseph's Institute of Technology with a CGPA of 8.35, demonstrating my dedication and consistent performance.</li>
          <li>I have a solid foundation in programming (C, C++, Python, Java) and web development (HTML, CSS, JavaScript, React), allowing me to build real-world applications.</li>
          <li>I enjoy collaborating with others, sharing ideas, and working together to achieve common goals, making me a strong team player.</li>
        </ul>
      </div>
    </section>
  );
}

function Experience() {
  return <section id="experience" className="page"><h1>Experience</h1><p>Details about your work experience.</p></section>;
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
    <section id="projects" className="page projects-page">
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
    <section id="skills" className="page skills-page">
      <h2 className="page-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <SkillBadge key={index} skill={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  // This section is kept empty for future achievements
  return (
    <section id="achievements" className="page achievements-page">
      <h2 className="page-title">My Achievements</h2>
      <p className="empty-message">No achievements added yet. Check back soon!</p>
    </section>
  );
}

function Blogs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogPosts = [
    { title: 'CSE Course Certificate', pdf: '/cse1.pdf', thumbnail: '/cse1.jpeg' },
    { title: 'Python for Data Science', pdf: '/python for data science.pdf', thumbnail: '/python for data science.jpg' },
    { title: 'Data Structures & Algorithms in Java', pdf: '/data structure and algorithm using java.pdf', thumbnail: '/data structure and algorithm using java.jpg' },
    { title: 'Software Testing Certificate', pdf: '/Software Testing.pdf', thumbnail: '/Software Testing.jpg' },
    { title: 'Problem Solving Through Programming in C', pdf: '/Problem Solving Through Programming In C.pdf', thumbnail: '/Problem Solving Through Programming In C.jpg' },
    { title: 'MongoDB Certification', pdf: '/Mongo DB.pdf', thumbnail: '/Mongo DB.jpg' },
    { title: 'Forage Certificate', pdf: '/forage certificate.pdf', thumbnail: '/forage certificate.jpg' },
    { title: 'University Course Certificate', pdf: '/uni.pdf', thumbnail: '/uni.jpg' },
    { title: 'Android Development Fundamentals', pdf: '/andi.pdf', thumbnail: '/andi.jpg' },
    { title: 'Google Analytics Certification', pdf: '/google.pdf', thumbnail: '/google.jpg' },
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
    <section id="blogs" className="page blogs-page">
      <h2 className="page-title">My Blog Posts & Certifications</h2>
      <div className="blogs-grid">
        {blogPosts.map((blog, index) => (
          <BlogCard key={index} blog={blog} onClick={() => openModal(blog)} />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedBlog && (
          <img src={selectedBlog.thumbnail} alt={selectedBlog.title} className="blog-modal-image" />
        )}
      </Modal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="page contact-page">
      <ContactForm />
    </section>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Create a dummy Home section to handle the initial state
    const homeSection = document.createElement('section');
    homeSection.id = 'home';
    // Append it temporarily to the body or a hidden div if it doesn't already exist
    // For simplicity, we assume 'Hero' acts as the home section

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when 50% of the section is visible
      threshold: 0, // No threshold needed with rootMargin
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections with the 'page' class, and the Hero section for 'home'
    document.querySelectorAll('.page, .hero').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.page, .hero').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
        <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        <a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''}>Achievements</a>
        <a href="#blogs" className={activeSection === 'blogs' ? 'active' : ''}>Blogs</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        <div style={{ marginLeft: 'auto' }}>
          <DarkModeToggle />
        </div>
      </nav>
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
