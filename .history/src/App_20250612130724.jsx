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
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled
    const darkModeEnabled = document.body.classList.contains('dark-mode');
    setIsDarkMode(darkModeEnabled);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const darkModeEnabled = document.body.classList.contains('dark-mode');
          setIsDarkMode(darkModeEnabled);
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="page about-page">
      <div className="page-content-wrapper">
        <h2 className="page-title">About Me</h2>
        <div className="about-content-wrapper">
          <div className="about-text-content">
            <div className="about-roles">
              <div className="roles-row">
                <div className="role-item">
                  <h3 className="role-title">AI & ML Developer</h3>
                  <p className="role-description">
                    I specialize in building smart solutions using AI tools and APIs like DeepAI and SightEngine to moderate content, generate articles, and optimize real-world systems like ship routing.
                  </p>
                </div>
                
                <div className="role-item">
                  <h3 className="role-title">Web Developer</h3>
                  <p className="role-description">
                    I'm experienced in creating dynamic and responsive websites using ReactJS, Vite, HTML, CSS, and JavaScript, with seamless API integrations and clean UI/UX.
                  </p>
                </div>
              </div>
              
              <div className="roles-row">
                <div className="role-item">
                  <h3 className="role-title">Data Analyst</h3>
                  <p className="role-description">
                    Proficient in using Power BI and Python for visualizing data and deriving meaningful insights to support informed decisions and project goals.
                  </p>
                </div>
                
                <div className="role-item">
                  <h3 className="role-title">Programmer</h3>
                  <p className="role-description">
                    Well-versed in multiple languages including C, C++, Java, Python, and SQL — with strong problem-solving skills and experience in building algorithmic solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image-container">
            <img 
              src={isDarkMode ? "/cartoon.jpg" : "/cartoon2.jpg"} 
              alt="About Me" 
              className="about-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="page">
      <div className="page-content-wrapper">
        <h2 className="page-title">Experience</h2>
        <p>Details about your work experience.</p>
      </div>
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
    <section id="projects" className="page projects-page">
      <div className="page-content-wrapper">
        <h2 className="page-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const programmingSkills = [
    // Programming Languages & Frameworks
    { name: 'C', icon: '/C.jpg' },
    { name: 'C++', icon: '/c++.jpg' },
    { name: 'Java', icon: '/java.jpg' },
    { name: 'Python', icon: '/python.jpg' },
    { name: 'HTML', icon: '/html.jpg' },
    { name: 'CSS', icon: '/css.jpg' },
    { name: 'JavaScript', icon: '/javascript.jpg' },
    { name: 'React.js', icon: '/reactjs.jpg' },
    { name: 'Node.js', icon: '/nodejs.jpg' },
    { name: 'MongoDB', icon: '/mongodb.jpg' },
    { name: 'SQL', icon: '/sql.jpg' },
    { name: 'MySQL', icon: '/mysql.jpg' },
    { name: 'Flutter', icon: '/flutter.jpg' },
  ];

  const developmentTools = [
    // Development Tools & Platforms
    { name: 'GitHub', icon: '/github.jpg' },
    { name: 'DSA', icon: '/dsa.jpg' },
    { name: 'Figma', icon: '/figma.jpg' },
    { name: 'API Keys', icon: '/api.jpg' },
  ];

  return (
    <section id="skills" className="page skills-page">
      <div className="page-content-wrapper">
        <h2 className="page-title">My Skills</h2>
        
        <div className="skills-section">
          <h3 className="section-subtitle">Programming Languages & Frameworks</h3>
          <div className="skills-grid">
            {programmingSkills.map((skill, index) => (
              <SkillBadge key={index} skill={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className="section-subtitle">Development Tools & Platforms</h3>
          <div className="skills-grid">
            {developmentTools.map((skill, index) => (
              <SkillBadge key={index} skill={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  // This section is kept empty for future achievements
  return (
    <section id="achievements" className="page achievements-page">
      <div className="page-content-wrapper">
        <h2 className="page-title">My Achievements</h2>
        <p className="empty-message">No achievements added yet. Check back soon!</p>
      </div>
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
      <div className="page-content-wrapper">
        <h2 className="page-title">My Blog Posts & Certifications</h2>
        <div className="blogs-grid">
          {blogPosts.map((blog, index) => (
            <BlogCard key={index} blog={blog} onClick={() => openModal(blog)} />
          ))}
        </div>
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
      <div className="page-content-wrapper">
        <ContactForm />
      </div>
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
