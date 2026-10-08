export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light flex-column">
<a aria-label="Navigate to the beginning of the page" className="navbar-brand" href="#intro" id="logo-container">
<img alt="avatar" className="circle img-responsive profile-pic" src="/images/profile.png" style={{width: '120px', height: '0px', marginTop: '60px'}}/>
</a>
<button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarNav" data-toggle="collapse" type="button">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<li className="nav-item">
<a aria-label="Open Habte Selassie's resume in a new tab" className="nav-link" href="https://1drv.ms/b/s!AnRyPPgnSpsyaw2SXVdQJgJ3t8k?e=XC40Rc" target="_blank">Resume</a>
</li>

</div>
</nav>

    </>
  );
}
