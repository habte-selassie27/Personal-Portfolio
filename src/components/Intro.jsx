import { useEffect } from 'react';
import Typed from 'typed.js';

export default function Intro() {
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ['Full Stack Developer', 'Back End Developer', 'React Developer', 'Front End Developer'],
      loop: true,
      typeSpeed: 80,
      backSpeed: 40,
    });
    return () => typed.destroy();
  }, []);
  return (
    <>
<section className="section scrollspy full-height" id="intro" style={{backgroundColor: '#6eaca1', marginLeft: '200px'}}>
<div className="overlay"></div>
<div className="container" style={{width: '90%'}}>
<div className="col-md-9" style={{width: '100%', height: '826px'}}>
<div className="content section-padding valign" style={{marginLeft: '10%', marginTop: '150px'}}>
<div className="caption">
<h2 style={{marginTop: '-50px', marginLeft: '90px'}}>Hi, I'm <span className="teal">Habte Selassie Fitsum.</span></h2>
<button id="theme-toggle" style={{backgroundColor: '#004d40', color: 'aqua'}}></button>
<h5 style={{color: '#fff', marginLeft: '85px'}}>A <span className="typing" style={{fontWeight: '300', color: '#ffffff'}}></span></h5>
<h5 style={{lineHeight: '2', color: 'rgb(230, 224, 224)', fontSize: '26px', fontWeight: '300', marginLeft: '90px'}}>
                Experienced dynamic software engineer with 2-3 years' expertise in designing and implementing scalable systems.
                Thrive on solving complex problems and contributing to innovative projects within cross-functional teams.
                Passionate about software development, committed to continuous learning and problem-solving.
                Notable achievements include a 40% user engagement boost with a Tour Application and a 50% system performance improvement through legacy system migration. 
                Skilled in bridging technical and non-technical teams, fostering seamless collaboration.
                Led initiatives resulting in a 60% reduction in application bugs and an 80% increase in software delivery speed.
                Eager to leverage skills and experience to drive impactful solutions in the digital space. 
                Always open to new challenges and opportunities for growth.
              </h5>
<div className="social" style={{marginLeft: '80px'}}>
<a href="https://www.linkedin.com/in/habte-selassie-fitsum/" target="_blank">
<button className="icon-btn linkedin" style={{width: '60px', height: '60px', borderRadius: '100%', objectFit: 'cover'}} type="button">
<i className="fa fa-linkedin" style={{fontSize: '35px'}}></i>
</button>
</a>
<a href="https://github.com/habte-selassie" target="_blank">
<button className="icon-btn github" style={{width: '60px', height: '60px', borderRadius: '100%', objectFit: 'cover'}} type="button">
<i className="fa fa-github" style={{fontSize: '35px'}}></i>
</button>
</a>
<a href="https://wellfound.com/u/habte-selassie-fitsum" target="_blank">
<button className="icon-btn angellist" style={{width: '60px', height: '60px', borderRadius: '100%', objectFit: 'cover'}}>
<i className="fab fa-angellist" style={{fontSize: '35px'}}></i>
</button>
</a>

</div>
<div className="buttons">
<a className="readme" href="#about" style={{marginLeft: '80px', marginTop: '10px'}}>Read More</a>
<a className="contactme" href="#contact" style={{marginLeft: '30px', marginTop: '10px'}}>Contact Me</a>
</div>
</div>
</div>
</div>
</div></section>
    </>
  );
}
