export default function Education() {
  return (
    <>
      <section className="section scrollspy" id="education" style={{marginLeft: '200px', backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px)', backgroundSize: '20px 20px'}}>
        <h3 className="page-title white-text teal">
          <span>Education</span>
        </h3>
        <div className="container">
          <div className="card-grid edu-grid">
            <div className="card">
              <div className="card-content">
                <p>
                  <span className="card-title"><a className="teal-text hoverline" href="https://www.asu.edu/" target="_blank" rel="noreferrer">Holberton University</a></span>
                </p>
                <p>
                  <b>Degree: </b>Bachelors of Software Engineering
                </p>
                <div>
                  <p><b>Relevant Courseworks:</b></p>
                  <ul>
                    <li>Distributed Database Systems</li>
                    <li>Cloud Computing</li>
                    <li>Foundations of Algorithms</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <p>
                  <span className="card-title"><a className="teal-text hoverline" href="https://ahduni.edu.in/academics/schools-centres/school-of-engineering-and-applied-science/" target="_blank" rel="noreferrer">Addis Ababa University</a></span>
                </p>
                <p className="brown-text">Addis Ababa, Ethiopia</p>
                <p>
                  <b>Degree: </b>Bachelor of Computer Science
                </p>
                <div>
                  <p><b>Relevant Courseworks:</b></p>
                  <ul>
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Operating Systems</li>
                    <li>System Adminstration</li>
                    <li>Object Oriented Programming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
