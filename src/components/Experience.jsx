const EXPERIENCES = [
  {
    role: 'Back End Engineer  (Virtual Job Simulation)',
    company: 'Lyft',
    url: 'https://www.lyft.com/',
    logo: '/images/logos/Lyft.jpeg',
    bullets: [
      'Completed the Back-End Engineering job simulation, taking over the development of an unfinished project for the Lyft Rentals team.',
      'Drafted a UML class diagram representing a new reorganized architecture.',
      'Refactored a messy codebase inherited from another team to accurately reflect my new design.',
      'Implemented unit tests and added new functionality using test-driven development.',
    ],
    tools: 'Java,Junit,Test Driven Development, UML Class Diagram,Refactoring',
    date: 'October 2023 - December 2023, Remote |San Francisco, United States',
  },
  {
    role: 'Software Engineer (Virtual job simulation)',
    company: 'Hewlett Packard Enterprise',
    url: 'https://www.hpe.com/',
    logo: '/images/logos/HPE.png',
    bullets: [
      'Wrote a proposal for a RESTful web service to manage a list of employees.',
      'Built a web server application in Java Spring Boot that can accept and respond to HTTP requests and support uploading JSON data.',
      'Developed and ran a set of unit tests to assess my Java Spring Boot application’s performance.',
      'Demonstrated a deep understanding of system design and requirements.',
      'Executed end-to-end functionalities, demonstrating expertise in back-end development.',
      'Implemented CRUD operations utilizing the MVC model with Java Spring and Spring Boot.',
    ],
    tools: 'Java Spring,Spring Boot,DAO,JPA,JDBC, Web Services',
    date: 'November 2023 - January 2024 | Remote| Spring, Texas , United States',
  },
  {
    role: 'Software Engineer (Virtual Job Simulation)',
    company: 'Citi ICG Technology',
    url: 'https://www.citigroup.com/citi/',
    logo: '/images/logos/Citi.jpeg',
    bullets: [
      'Created a state diagram of the loan management process using the Unified Modeling Language (UML).',
      'Researched potential machine learning systems to assess credit risk and provided recommendations for the next steps.',
      'Integrated Yahoo Stock Market API to fetch current market prices and pertinent information for multiple stock companies, providing up-to-date insights.',
      'Used Java to build an internal tool visualizing stock market risk in real-time.',
      "Employed JavaFX to display imported stock data on an interactive stock chart, enhancing the tool's visual representation.",
      'Implemented rigorous testing for the stock market risk tool, ensuring reliable and accurate results.',
    ],
    tools: 'Java, JavaFX, Yahoo Stock Market API,Junit,UML Diagram and Machine Learning',
    date: 'December 2023 - February 2024 |Remote| New York, New York, United States',
  },
  {
    role: 'Software Engineer',
    company: 'Therapi',
    url: 'https://www.linkedin.com/company/therapime/',
    logo: '/images/logos/Therapi.png',
    bullets: [
      'integrated a secure crypto payment gateway in Therapy, leading to a 25% rise in premium plan subscriptions and expanding payment choices.',
      'Implemented robust KYC verification measures, reinforcing financial security and ensuring regulatory compliance. Strengthened user trust in the Therapy platform.',
      'Performed a dynamic Job Posting feature, resulting in a notable 30% increase in therapist visibility.',
      'Efficiently integrated a flexible Bidding System, contributing to a substantial 20% rise in session bookings.',
      'Developed an intuitive Search Feature, significantly reducing session discovery time by an impressive 25%.',
      'Played a pivotal role in discussions to solidify backend architecture, ensuring scalability and optimal efficiency.',
      'Executed thorough database seeding for each model, expediting development cycles and enhancing platform stability.',
    ],
    tools: 'Python, JavaScript , Django, PostgreSQL, MySQL , React.js, Angular, Django Rest Framework, Express.js , Elasticsearch, Solr , WebSocket , JWT, OAuth , Kubernetes, Docker , Django ORM, SQLAlchemy , Socket.io .',
    date: 'November 2023 - April 2024,| Remote| Yerevan, Armenia',
  },
  {
    role: 'Software Engineer (Remote)',
    company: 'AppDiv Systems',
    url: 'https://appdiv.com/',
    logo: '/images/logos/AppDiv.png',
    bullets: [
      'Implemented Azure DevOps and Azure Storage cloud solutions, enhancing infrastructure efficiency by 13%.',
      'Automated 8 routine IT tasks with Selenium, saving an average of 11 hours of staff time per week.',
      'Played a key role in designing software improvements using algorithms, resulting in a 16% increase in sales through enhanced user-product matching.',
      'Participated in code reviews with the product team, gaining valuable feedback and experience in writing custom, scalable code.',
      'Collaborated with 2 interns to understand user stories, reporting findings and progress to senior engineers.',
      'Tested software for bugs and operating speed, fixing bugs and documenting processes to increase efficiency by 18%.',
    ],
    tools: 'Git, Azure, Selenium, Python, JavaScript, Django, Node.js, Express.js, MongoDB, MySQL, React.js, Angular, GitHub Pull Requests, Bitbucket, Microsoft Teams, Slack, Jira, Trello, Jest, PyTest,Confluence, Microsoft Word',
    date: 'October 2023 - December 2023, | Remote| Addis Ababa,Ethiopia',
  },
  {
    role: 'Web3 / DeFi Intern',
    company: 'Moralis Academy',
    url: 'https://academy.moralis.io/',
    logo: '/images/logos/Moralis.png',
    bullets: [
      'Developed Multi-Sig Wallet, boosting security with multi-signature authorization.',
      'Executed Flash Loan smart contract, demonstrating expertise in decentralized finance tools.',
      'Crafted, tested, and deployed smart contracts for dApps on Ethereum and Polygon networks.',
      'Integrated smart contracts with front-end interfaces using Web3 libraries such as web3.js or ethers.js.',
      'Optimized gas usage and transaction costs for smart contracts to enhance scalability and cost-effectiveness.',
      'Implemented and maintained blockchain node infrastructure, possibly using services like Infura or Alchemy.',
      'Ensured application security via rigorous code audits and industry-standard best practices implementation.',
    ],
    tools: 'JavaScript, Solidity, web3.js, ethers.js, React.js, Next.js, Express.js, Infura, Alchemy, Docker, JWT, OAuth.',
    date: 'May 2023 - October 2023 | Remote | Kristiansand, Agder, Norway',
  },
  {
    role: 'Back End Developer',
    company: 'Institute of Code Culture Ethiopia',
    url: '',
    logo: '/images/logos/icce (1).png',
    bullets: [
      'Implemented RESTful API architecture for seamless data exchange between frontend and backend.',
      'Crafted and refined database architecture, encompassing schema development and fine-tuning SQL query performance.',
      'Engineered and upheld API for seamless frontend-backend interaction, encompassing endpoint design and exhaustive testing.',
      'Pioneered web services connecting to third-party APIs like payment processors.',
      'Deployed security measures such as encryption and authentication using OAuth and OpenID Connect.',
      'Established automated testing procedures for backend code reliability and security.',
      'Tailored backend architecture for scalability, poised to accommodate increased usage and traffic.',
    ],
    tools: 'Node.js, Express.js, MySQL, MongoDB, Mongoose, SQL Server Management, Passport.js, Stripe, Joi, JWT, Jest, Postman, Selenium, Git, Docker, NGINX',
    date: 'Dec 2022 - April 2023 | Addis Ababa, Ethiopia',
  },
  {
    role: 'Frontend Web Developer Internship',
    company: '',
    url: 'https://sidehustle.ng/internship/',
    logo: '/images/logos/side-hustle.png',
    bullets: [
      'Utilized HTML, CSS, and JavaScript for content structuring, styling, layout, interactivity, and user experience enhancement.',
      'Created responsive designs adaptable to diverse screen sizes and devices.',
      'Optimized web performance through best practices in HTML, CSS, and JavaScript, including file size reduction and faster page loads.',
      'Collaborated with the team for idea generation, feedback exchange, and design refinement.',
      'Ensured code functionality and promptly resolved issues, improving problem-solving skills and attention to detail.',
    ],
    tools: 'HTML, CSS, Bootstrap, JavaScript, Responsive Web Design, Wire Frames',
    date: 'Oct 2021 - Feb 2021 | Remote |Nigeria, Lagos',
  },
];

export default function Experience() {
  return (
    <>
      <section className="section scrollspy square-lines-bg" id="experience" style={{marginLeft: '200px', backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px)', backgroundSize: '20px 20px'}}>
        <h3 className="page-title white-text teal">
          <span>Experience</span>
        </h3>
        <div className="container">
          {EXPERIENCES.map((e) => (
            <div className="card exp-card" key={e.role + e.company}>
              <div className="card-content">
                <div className="exp-header">
                  <a className="exp-logo-link" href={e.url || undefined} target={e.url ? '_blank' : undefined} rel="noreferrer">
                    <img alt={`${e.company || e.role} logo`} className="exp-logo" src={e.logo}/>
                  </a>
                  <div className="exp-heading">
                    <span className="card-title">
                      {e.url ? (
                        <a className="teal-text hoverline" href={e.url} target="_blank" rel="noreferrer">{e.role}</a>
                      ) : (
                        e.role
                      )}
                    </span>
                    {e.company && <h5 className="exp-company">{e.company}</h5>}
                  </div>
                </div>
                <hr/>
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b.slice(0, 40)}>{b}</li>
                  ))}
                  <li><b>Tools:</b> {e.tools}</li>
                </ul>
              </div>
              <div className="card-action">
                <span>{e.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
