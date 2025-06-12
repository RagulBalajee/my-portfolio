import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './App.css';

function Home() {
  return <Hero />;
}
function Projects() {
  return <section className="page"><h1>Projects</h1><p>Some of my work.</p></section>;
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
