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
        <div className="experience-content">
          <div className="experience-item">
            <div className="experience-header">
              <img src="/retech.jpg" alt="Retech Solutions" className="company-icon" />
              <div className="experience-title">
                <h3>Retech Solutions</h3>
                <p className="experience-role">AI & ML Developer Intern</p>
                <p className="experience-duration">2024</p>
              </div>
            </div>
            <div className="experience-description">
              <p>
                During my time at Retech Solutions, I have been deeply immersed in the world of Artificial Intelligence and Machine Learning. 
                I've gained hands-on experience with various AI tools and technologies, including:
              </p>
              <ul className="experience-highlights">
                <li>Working with AI APIs like DeepAI and SightEngine for content moderation and generation</li>
                <li>Developing smart solutions for real-world applications such as ship routing optimization</li>
                <li>Learning advanced machine learning algorithms and their practical implementations</li>
                <li>Collaborating with experienced AI developers on cutting-edge projects</li>
                <li>Understanding the integration of AI tools into existing business workflows</li>
              </ul>
              <p>
                This experience has significantly enhanced my understanding of AI/ML development and has provided me with 
                valuable insights into how artificial intelligence can be leveraged to solve complex business problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projectsData = [
    {
      title: 'Tic Tac Toe',
      description: 'A classic Tic Tac Toe game with single player and two player modes, built with HTML, CSS, and JavaScript.',
      image: 'https://via.placeholder.com/400x250/38bdf8/ffffff?text=Tic+Tac+Toe',
      liveLink: 'https://tictactoe0011.netlify.app/',
      githubLink: 'https://github.com/RagulBalajee/TicTacToe',
      status: 'Completed'
    },
    {
      title: 'Client Portfolio',
      description: 'A professional portfolio website for a branch manager, showcasing achievements and experience with modern design.',
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=Client+Portfolio',
      liveLink: 'https://ragulbalajee.github.io/Kumar-Portfolio/',
      githubLink: 'https://github.com/RagulBalajee/Kumar-Portfolio',
      status: 'Completed'
    },
    {
      title: 'AI-Driven Ship Fuel & Route Optimization',
      description: 'An advanced AI system for optimizing ship routes and fuel consumption using machine learning algorithms.',
      image: 'https://via.placeholder.com/400x250/f97316/ffffff?text=AI+Ship+Optimization',
      liveLink: 'https://leafy-pavlova-e9f24d.netlify.app/',
      githubLink: 'https://github.com/RagulBalajee/Ship-Fuel-Optimization',
      status: 'Completed'
    },
    {
      title: 'AI-Powered Content Moderation System',
      description: 'An intelligent content moderation system using AI APIs to automatically filter and moderate user-generated content.',
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=AI+Content+Moderation',
      liveLink: '#',
      githubLink: '#',
      status: 'In Progress'
    },
    {
      title: 'Random Quote Generator',
      description: 'A dynamic quote generator with multiple genres including motivation, humor, wisdom, love, and more.',
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Quote+Generator',
      liveLink: 'https://inquisitive-seahorse-2db8d3.netlify.app/',
      githubLink: 'https://github.com/RagulBalajee/Quotes-Generator',
      status: 'Completed'
    },
    {
      title: 'AI Article Generator',
      description: 'An AI-powered tool that generates high-quality articles using advanced natural language processing.',
      image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=AI+Article+Generator',
      liveLink: '#',
      githubLink: 'https://github.com/RagulBalajee/AI-Article-Generator',
      status: 'Completed'
    },
    {
      title: 'FLAMES Code - Ultimate Relationship Calculator',
      description: 'A stunning, interactive FLAMES relationship calculator with 5 beautiful themes, particle effects, confetti celebrations, and advanced animations built with React.',
      image: 'https://via.placeholder.com/400x250/ff6b6b/ffffff?text=FLAMES+Code',
      liveLink: 'https://flames-code.netlify.app/',
      githubLink: 'https://github.com/RagulBalajee/Flames-code',
      status: 'Completed'
    },
    {
      title: 'Smart Marriage Hall Booking System',
      description: 'A comprehensive booking system for marriage halls with smart features and user-friendly interface.',
      image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Marriage+Hall+Booking',
      liveLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7337368367760125952/?originTrackingId=dXq1Kq0SRoSCi0%2Bhsi%2BD%2Bw%3D%3D',
      githubLink: '#',
      status: 'Completed'
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
  const skillsData = [
    // All Skills Combined
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
    { name: 'GitHub', icon: '/github.jpg' },
    { name: 'DSA', icon: '/dsa.jpg' },
    { name: 'VS Code', icon: '/vscode.jpg' },
    { name: 'Figma', icon: '/figma.jpg' },
    { name: 'API Keys', icon: '/api.jpg' },
    { name: 'MS Word', icon: '/ms-word.jpg' },
    { name: 'MS Excel', icon: '/ms-excel.jpg' },
    { name: 'MS PowerPoint', icon: '/ms-powerpoint.jpg' },
  ];

  return (
    <section id="skills" className="page skills-page">
      <div className="page-content-wrapper">
        <h2 className="page-title">My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillBadge key={index} skill={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="page achievements-page">
      <div className="page-content-wrapper">
        <h2 className="page-title">My Achievements</h2>
        <div className="achievements-content">
          <div className="achievement-item">
            <div className="achievement-header">
              <h3 className="achievement-title">Built 6+ Full Projects Independently</h3>
              <span className="achievement-badge">Projects</span>
            </div>
            <div className="achievement-description">
              <p>
                Successfully developed and deployed multiple full-stack projects including web applications, 
                AI-powered tools, and client portfolios.
              </p>
              <ul className="achievement-highlights">
                <li>Web applications using React.js, HTML, CSS, JavaScript</li>
                <li>AI-powered tools for content generation</li>
                <li>Client portfolio websites with modern design</li>
              </ul>
            </div>
          </div>

          <div className="achievement-item">
            <div className="achievement-header">
              <h3 className="achievement-title">Completed 60+ Problems in LeetCode</h3>
              <span className="achievement-badge">Coding</span>
            </div>
            <div className="achievement-description">
              <p>
                Solved over 60 programming challenges covering various difficulty levels and problem types.
              </p>
              <ul className="achievement-highlights">
                <li>Array manipulation and string processing</li>
                <li>Dynamic programming problems</li>
                <li>Time and space complexity optimization</li>
              </ul>
            </div>
          </div>

          <div className="achievement-item">
            <div className="achievement-header">
              <h3 className="achievement-title">Completed 30+ Problems in GeeksForGeeks</h3>
              <span className="achievement-badge">Practice</span>
            </div>
            <div className="achievement-description">
              <p>
                Solved 30+ programming problems focusing on data structures and algorithms.
              </p>
              <ul className="achievement-highlights">
                <li>Core data structures implementation</li>
                <li>Advanced algorithm practice</li>
                <li>Technical interview preparation</li>
              </ul>
            </div>
          </div>

          <div className="achievement-item">
            <div className="achievement-header">
              <h3 className="achievement-title">Team Lead in SIH Hackathon</h3>
              <span className="achievement-badge">Leadership</span>
            </div>
            <div className="achievement-description">
              <p>
                Led a team in Smart India Hackathon, demonstrating leadership and coordination skills.
              </p>
              <ul className="achievement-highlights">
                <li>Coordinated team of 4-6 members</li>
                <li>Managed project timeline</li>
                <li>Presented solutions to judges</li>
              </ul>
            </div>
          </div>

          <div className="achievement-item">
            <div className="achievement-header">
              <h3 className="achievement-title">Team Member in Manipal Hackathon</h3>
              <span className="achievement-badge">Collaboration</span>
            </div>
            <div className="achievement-description">
              <p>
                Participated as team member, contributing technical expertise and collaborating effectively.
              </p>
              <ul className="achievement-highlights">
                <li>Full-stack development tasks</li>
                <li>Team collaboration</li>
                <li>Rapid prototyping experience</li>
              </ul>
            </div>
          </div>
        </div>
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
        <h2 className="page-title">Blog Post</h2>
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
