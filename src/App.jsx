import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Certificates from './components/Certificates.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import './styles.css';

export default function App() {
  useEffect(() => {
    if (window.$) {
      window.$('.theme-switch').on('click', function () {
        window.$('body').toggleClass('light-theme');
      });
    }

    const sectionIds = ['intro', 'about', 'experience', 'projects', 'skills', 'education', 'certificates', 'contact'];
    const onScroll = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      document.querySelectorAll('.nav-link').forEach((link) => {
        const active = link.getAttribute('href') === `#${current}`;
        link.classList.toggle('active', active);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <main style={{ width: '100%' }}>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Education />
        <Contact />
      </main>
    </>
  );
}
