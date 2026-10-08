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
      window.$('.scrollspy').scrollSpy();
      window.$('.button-collapse').sideNav({
        menuWidth: 690,
        edge: 'left',
        closeOnClick: true,
      });
      window.$('.theme-switch').on('click', function () {
        window.$('body').toggleClass('light-theme');
      });
    }
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
