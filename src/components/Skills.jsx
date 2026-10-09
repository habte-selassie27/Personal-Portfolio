const SKILL_GROUPS = [
  {
    heading: 'Languages and Databases',
    items: [
      { name: 'C', icon: '/images/technology-images/C.png' },
      { name: 'C++', icon: '/images/technology-images/Cplusplus.png' },
      { name: 'Java', icon: '/images/technology-images/java.png' },
      { name: 'Python', icon: '/images/technology-images/python-logo-1-300x300.jpg' },
      { name: 'JavaScript', icon: '/images/technology-images/JavaScript.png' },
      { name: 'PHP', icon: '/images/technology-images/php.png' },
      { name: 'TypeScript', icon: '/images/technology-images/TypeScript.png' },
      { name: 'Shell Scripting', icon: '/images/technology-images/shell-logo-1-300x300.jpg' },
    ],
  },
  {
    heading: 'Libraries',
    items: [
      { name: 'React', icon: '/images/technology-images/react.png' },
      { name: 'Redux', icon: '/images/technology-images/Redux.png' },
      { name: 'React-Bootstrap', icon: '/images/technology-images/React-Bootstrap.png' },
      { name: 'Material UI', icon: '/images/technology-images/Material-UI.png' },
      { name: 'Socket.IO', icon: '/images/technology-images/Socket-io.png' },
      { name: 'Mongoose', icon: '/images/technology-images/mongoose.png' },
      { name: 'JWT', icon: '/images/technology-images/jwt.png' },
    ],
  },
  {
    heading: 'Frameworks',
    items: [
      { name: 'Next.js', icon: '/images/technology-images/next-js.png' },
      { name: 'Angular', icon: '/images/technology-images/angular.png' },
      { name: 'Bootstrap', icon: '/images/technology-images/bootstrap.png' },
      { name: 'Tailwind', icon: '/images/technology-images/Tailwind-CSS-images.png' },
      { name: 'Nodejs', icon: '/images/technology-images/nodejs.png' },
      { name: 'Express.js', icon: '/images/technology-images/Express-js.png' },
      { name: 'Django', icon: '/images/technology-images/django-logo-negative.png' },
      { name: 'Nest.js', icon: '/images/technology-images/NestJS.svg' },
    ],
  },
  {
    heading: 'Databases',
    items: [
      { name: 'SQL', icon: '/images/technology-images/sql.svg' },
      { name: 'MySQL', icon: '/images/technology-images/mysql-logo.jpg' },
      { name: 'MongoDB', icon: '/images/technology-images/Mongodb.png' },
      { name: 'Firebase', icon: '/images/technology-images/firebase.png' },
      { name: 'PostgreSQL', icon: '/images/technology-images/Postgresql.png' },
      { name: 'Redis', icon: '/images/technology-images/Redis.png' },
    ],
  },
  {
    heading: 'Devops and Cloud Technologies',
    items: [
      { name: 'Git', icon: '/images/technology-images/git.png' },
      { name: 'AWS', icon: '/images/technology-images/aws.png' },
      { name: 'Docker', icon: '/images/technology-images/Docker.png' },
      { name: 'Kubernetes', icon: '/images/technology-images/Kubernetes.png' },
      { name: 'Netlify', icon: '/images/technology-images/Netlify.png' },
      { name: 'Vercel', icon: '/images/technology-images/Vercel.png' },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <section className="section scrollspy" id="skills" style={{marginLeft: '200px', backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px)', backgroundSize: '20px 20px'}}>
        <h3 className="page-title white-text teal">
          <span>Skills</span>
        </h3>
        <div className="container">
          {SKILL_GROUPS.map((group) => (
            <div className="card" key={group.heading}>
              <div className="card-content">
                <h4 className="brown-text light">{group.heading}</h4>
                <div className="skill-grid">
                  {group.items.map((item) => (
                    <div className="skill-item" key={item.name}>
                      <img alt={`${item.name} logo`} src={item.icon}/>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
