export default function Sidebar() {
  return (
    <>
<div className="container fluid">
<div className="row">
<div className="col-md-3">
<a className="card-link" href="#">
<div className="card list-group" id="sidebar" style={{position: 'fixed', top: '-8px', left: '0', bottom: '0', height: '800px'}}>
<div className="card-body">
<li className="nav-item logo">
<a aria-label="Navigate to the beginning of the page" className="nav-link brand-logo grey-blue-text" href="#intro" id="logo-container">
<img alt="avatar" className="circle img-responsive profile-pic" src="/images/profile.png" style={{height: '140px', width: '140px', marginTop: '-60px', marginLeft: '0px'}}/>
</a>
</li>
<div className="card" style={{minWidth: '6px'}}>
</div>
<ul className="nav flex-column nav menu">
<li className="nav-item" style={{marginTop: '-20px'}}>
<a aria-label="Navigate to the About section" className="nav-link nav-link waves-effect waves-dark teal-text" href="#about">
<i className="mdi-social-person small"></i>
<span>About</span>
</a>
</li>
<li className="nav-item">
<a aria-label="Navigate to the Experience section" className="nav-link nav-link waves-effect waves-dark teal-text" href="#experience">
<i className="mdi-action-trending-up small"></i>
<span>Experience</span>
</a>
</li>
<li className="nav-item">
<a aria-label="Navigate to the Projects section" className="nav-link nav-link waves-effect waves-dark teal-text" href="#projects">
<i className="mdi-av-my-library-books small"></i>
<span>Projects</span>
</a>
</li>
<li className="nav-item">
<a aria-label="Navigate to the Skills section" className="nav-link nav-link waves-effect waves-dark teal-text" href="#skills">
<i className="mdi-action-assessment small"></i>
<span>Skills</span>
</a>
</li>
<li className="nav-item">
<a aria-label="Navigate to the Education section" className="nav-link nav-link waves-effect waves-dark teal-text" href="#education">
<i className="mdi-social-school small"></i>
<span>Education</span>
</a>
</li>
<li className="nav-item">
<a aria-label="Navigate to the Certificates section" className="nav-link nav-link waves-effect waves-dark teal-text" href="#certificates">
<i className="mdi-social-school small"></i>
<span>Certificates</span>
</a>
</li>
<li className="nav-item">
<a aria-label="Navigate to the Contact section" className="nav-link nav-link waves-effect waves-dark teal-text" href="#contact">
<i className="mdi-content-mail small"></i>
<span>Contact</span>
</a>
</li>
<li className="nav-item">
<a aria-label="Open Habte Selassie's resume in a new tab" className="nav-link" href="https://1drv.ms/b/s!AnRyPPgnSpsyaw2SXVdQJgJ3t8k?e=XC40Rc">
<i className="mdi-file-folder-open small"></i>
<span>Resume</span>
</a>
</li>
<li>
</li>
</ul>
</div>
</div>
</a></div>
</div>

</div>
<div className="col-md-9 offset-md-3" style={{paddingLeft: '15px'}}>
</div>



    </>
  );
}
