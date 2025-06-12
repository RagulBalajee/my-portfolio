import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return <section className="page"><h1>Hi, I'm Ragul Balajee</h1><p>Welcome to my portfolio!</p></section>;
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
    </div>
  );
}
