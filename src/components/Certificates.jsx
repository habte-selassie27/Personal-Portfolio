const CERTIFICATES = [
  { img: '/images/certifications/Accenture UK_completion_certificate-1.png', title: 'Accenture' },
  { img: '/images/certifications/Citi_ICG_Technology_completion_certificate-1.png', title: 'Citi ICG Technology' },
  { img: '/images/certifications/Hewlett Packard Enterprise__completion_certificate-1.png', title: 'Hewlett Packard Enterprise' },
  { img: '/images/certifications/Lyft_Job_Simulation_completion_certificate-1.png', title: 'Lyft' },
  { img: '/images/certifications/glcss.png', title: 'Front End Development(CSS)' },
  { img: '/images/certifications/html-css.png', title: 'The Complete HTML and CSS Course' },
  { img: '/images/certifications/Bootstrap.png', title: 'Bootstrap 5 Essentials' },
  { img: '/images/certifications/JavaScript.png', title: 'The Complete JavaScript Course' },
  { img: '/images/certifications/nodejs.png', title: 'Build a Back End RESTful API' },
  { img: '/images/certifications/blog-1.png', title: 'MERN Stack with Blog Project' },
  { img: '/images/certifications/glcss.png', title: 'Front End Development(HTML)' },
  { img: '/images/certifications/Ecommerce-1.png', title: 'Build A Best E-Commerce App' },
  { img: '/images/certifications/jobermann.png', title: 'Jobberman Soft-Skills Training' },
  { img: '/images/certifications/youth.png', title: 'YLC LEADERSHIP & ENTREPRENEURSHIP SUMMIT 2021' },
];

export default function Certificates() {
  return (
    <>
      <section className="section scrollspy" id="certificates" style={{marginLeft: '200px', backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px)', backgroundSize: '20px 20px'}}>
        <h3 className="page-title white-text teal">
          <span>Certifications</span>
        </h3>
        <div className="container">
          <div className="card-grid cert-grid">
            {CERTIFICATES.map((c, i) => (
              <div className="card" key={`${c.title}-${i}`}>
                <div className="card-image">
                  <img alt={`${c.title} completion certificate`} src={c.img}/>
                </div>
                <div className="card-content">
                  <span className="card-title teal-text">{c.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
