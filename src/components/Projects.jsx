const PROJECTS = [
  {
    title: 'Coindom Application',
    img: '/images/projects/Coindom.png',
    alt: 'Trade Application',
    desc: 'A Track and Trade Application Build Based on React.',
    tools: 'HTML, CSS, React, Bootstrap, Font Awesome',
    bullets: [
      'Register/login to the web app(with OAuth-based Google Sign-In).',
      'Choose The Type of Coin you want to sell',
      'Create multiple coins and add/remove coin to/from the coins table.',
      'Using Third Party APIs Calculate The Change In The Market Value.',
    ],
    live: 'https://gleeful-praline-e8de1d.netlify.app/',
    source: 'https://github.com/habte-selassie/coindom-crypto-react/tree/master',
  },
  {
    title: 'Pig Game(Dice Game)',
    img: './/images/projects/dice(pig).png',
    alt: 'Dice (Pig) Game',
    desc: 'A Pig Game App based on HTML,CSS and JavaScript',
    tools: 'HTML, CSS, JavaScript',
    bullets: [
      'I used HTML, CSS, and JavaScript to create a simple dice game where two players take turns rolling a dice, and the goal is to reach a score of 100 first.',
      'Then, it defines the starting conditions of the game, which sets the scores to 0, the current score to 0, and the active player to 0. It also hides the dice image and removes any winners or active classes from the players.',
      'when the player clicks the "Roll Dice" button If the game is still playing, it generates a random number between 1 and 6, displays the corresponding dice image, and updates the current score accordingly.',
      'when the player clicks the "Hold" button If the game is still playing, it adds the current score to the active player\'s total score and updates the score display.',
      'If the active player\'s total score is greater than or equal to 100, the game ends, and the active player is declared the winner.',
      'When the player clicks the "New Game" button, It resets the game to its initial state.',
    ],
    live: 'https://storied-tiramisu-2cb433.netlify.app/',
    source: 'https://github.com/habte-selassie/Dice-Game',
  },
  {
    title: 'Mapty App',
    img: './/images/projects/location-finder.png',
    alt: 'Screenshot of web app',
    desc: 'A simple Activity Tracker web-app based on JavaScript.',
    tools: 'HTML, CSS, JavaScript,Leaflet,Geo Location API',
    bullets: [
      'This is a JavaScript workout tracker application built using HTML, CSS, Vanilla JavaScript, the Geolocation API, and the Leaflet Library.',
      'It allows the user to add running or cycling workouts, with distance, duration, and other metrics.',
      "The application uses the browser's geolocation API to get the user's current location and displays a map with markers for each workout.",
      'The user can click on a workout marker to see the workout details, and the application allows the user to toggle between displaying the elevation gain and cadence for cycling and running workouts, respectively.',
      'The application uses event listeners to handle form submissions, type changes, and clicks on workout markers.',
      'It also uses local storage to store the workout data, allowing the user to reload the page without losing their data.',
      'Users can view the location and direction of where the user starts run where is now.',
    ],
    live: 'https://bejewelled-frangollo-83bce1.netlify.app/',
    source: 'https://github.com/habte-selassie/Location-FInder',
  },
  {
    title: 'Simple Bankist Application',
    img: './/images/projects/bankist.png',
    alt: 'Screenshot of web app',
    desc: 'Simple Bankist Application Made Using HTML, CSS, and Vanilla JavaScript',
    tools: 'HTML, CSS, JavaScript',
    bullets: [
      'Account Overview: Users can view their account details, including the account owner\'s name, account balance, and interest rate.',
      'Transaction History: Users can see a list of their transactions, including the transaction date, type (deposit or withdrawal), and amount.',
      'Sorting Transactions: Users can sort their transactions in ascending order based on date or amount.',
      'Login and Logout: Users can log in to their account using a username and password, and log out when they are finished.',
      'Account Management: Users can update their account information, such as their name, PIN number, or currency.',
      'Internationalization: The application supports localization by allowing users to select their preferred locale for displaying dates, currency formats, and other language-specific settings.',
    ],
    live: 'https://tiny-khapse-c25ab9.netlify.app/',
    source: 'https://github.com/habte-selassie/Bankist-Application',
  },
  {
    title: 'Natours Tour Application',
    img: './/images/projects/Natours.png',
    alt: 'Screenshot of web app',
    desc: 'Tour Application Made Using HTML,Pug, CSS, Nodejs, Expressjs, Mongodb and other JavaScript Libraries',
    tools: 'HTML, Pug, CSS, Node.js, Express, MongoDB',
    bullets: [
      'A highly intuitive and aesthetically pleasing home page with a visually appealing animation.',
      'Users can view detailed information about tours, such as their ratings and reviews.',
      'A streamlined payment process that allows users to pay for their tours quickly and easily.',
      'Users can view a list of all the tours they have booked.',
      'Users can update their profiles, including their names, profile pictures, email addresses, and passwords.',
      'In addition to tour details, users can access information about tour guides, including their profiles, experience, and reviews.',
      'They can also rate and provide feedback on their tour guide\'s performance, enabling other users to make informed decisions when selecting tours.',
      'Administrators can manage the website and view detailed information about the tours and users.',
    ],
    live: 'https://natours-pw5m.onrender.com/',
    source: 'https://github.com/habte-selassie/Natours',
  },
  {
    title: 'Human Resource Management App',
    img: './/images/projects/Hr.png',
    alt: 'Screenshot of web app',
    desc: 'Human Resource Management Application Made Using Angular,Angular Material,Nodejs,Expressjs,MongoDB and Other Javascript Libraries',
    tools: 'Angular, Angular Material, Node.js, Express, MongoDB',
    bullets: [
      'User Authentication: Allow users to register, log in, and manage their accounts securely.',
      'Employee Management: Provide a centralized database to manage employee information such as personal details, contact information, employment history, and documents.',
      'Candidate Management: Provide a platform for HR personnel to manage candidate information during the recruitment process. This includes storing candidate resumes, tracking interview stages, adding interview feedback, and updating candidate statuses.',
      'CRUD Operations on Employee and Candidate: Implement Create, Read, Update, and Delete operations on employee and candidate records.',
      'Profile Management: Enable employees to manage their profiles by allowing them to update personal details, contact information, emergency contacts, and other relevant information.',
      'Login and Logout: Implement secure login and logout functionality to ensure that only authorized users can access the HR app.',
    ],
    live: '/images/projects/under (1).png',
    source: 'https://github.com/habte-selassie/angular-project-master',
  },
];

export default function Projects() {
  return (
    <>
      <section className="section scrollspy" id="projects" style={{marginLeft: '200px', backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px)', backgroundSize: '20px 20px'}}>
        <h3 className="page-title white-text teal">
          <span>Projects</span>
        </h3>
        <div className="container">
          <div className="card-grid">
            {PROJECTS.map((p) => (
              <div className="card medium" key={p.title}>
                <div className="card-image waves-effect waves-block waves-light">
                  <img alt={p.alt} className="activator" src={p.img}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator teal-text hoverline">{p.title}<i className="mdi-navigation-more-vert right"></i></span>
                  <p>{p.desc}</p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text"><small>Accomplishments</small><i className="mdi-navigation-close right"></i></span>
                  <ul>
                    <li><b>Tools:</b> {p.tools}</li>
                    {p.bullets.map((b) => (
                      <li key={b.slice(0, 40)}>{b}</li>
                    ))}
                  </ul>
                  <div className="card-action">
                    <a aria-label={`Visit ${p.title}`} className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Online" href={p.live} target="_blank" rel="noreferrer"><i className="fa fa-external-link"></i></a>
                    <a aria-label={`View the GitHub repo for ${p.title}`} className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Source" href={p.source} target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
