export default function Projects() {
  return (
    <>
<section className="section scrollspy" id="projects" style={{marginLeft: '103px', backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, rgba(128, 128, 128, 0.05) 1px)', backgroundSize: '20px 20px'}}>
<h3 className="page-title white-text teal" style={{marginLeft: '108px', height: '90px', position: 'relative'}}>
<span style={{marginLeft: '30px', position: 'absolute', top: '50%', left: '10%', transform: 'translate(-50%, -50%)'}}>Projects</span>
</h3>
<div className="container">
<div className="row">
<div className="col s12 m6 l4">
<div className="card medium" style={{width: '460px', marginLeft: '-21px'}}>
<div className="card-image waves-effect waves-block waves-light">
<img alt="Trade Application" className="activator" src="/images/projects/Coindom.png" style={{height: '100%', width: '100%'}}/>
</div>
<div className="card-content">
<span className="card-title activator teal-text hoverline">Coindom Application<i className="mdi-navigation-more-vert right"></i></span>
<p>
                  A Track and Trade Application Build Based on React.
                </p>
</div>
<div className="card-reveal">
<span className="card-title grey-text"><small>Accomplishments</small><i className="mdi-navigation-close right"></i></span>
<ul>
<li><b>Tools:</b> HTML, CSS, React, Bootstrap, Font Awesome</li>
<li>Register/login to the web app(with OAuth-based Google Sign-In).</li>
<li>Choose The Type of Coin you want to sell</li>
<li>Create multiple coins and add/remove coin to/from the coins table.</li>
<li>Using Third Party APIs Calculate The Change In The Market Value.</li>
</ul>
<div className="card-action">
<a aria-label="Visit " className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Online" href="https://gleeful-praline-e8de1d.netlify.app/" target="_blank"><i className="fa fa-external-link"></i></a>
<a aria-label="Visit the GitHub repo for  project" className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Source" href="https://github.com/habte-selassie/coindom-crypto-react/tree/master" target="_blank"><i className="fa fa-github"></i></a>
</div>
</div>
</div>
</div>
<div className="col s12 m6 l4">
<div className="card medium" style={{width: '460px', marginLeft: '221px'}}>
<div className="card-image waves-effect waves-block waves-light">
<img alt="Dice (Pig) Game" className="activator" src=".//images/projects/dice(pig).png" style={{height: '100%', width: '100%'}}/>
</div>
<div className="card-content">
<span className="card-title activator teal-text hoverline">Pig Game(Dice Game)<i className="mdi-navigation-more-vert right"></i></span>
<p>
                  A Pig Game App based on HTML,CSS and JavaScript
                </p>
</div>
<div className="card-reveal">
<span className="card-title grey-text"><small>Accomplishments</small><i className="mdi-navigation-close right"></i></span>
<ul>
<li><b>Tools:</b>  HTML, CSS, JavaScript</li>
<li> I used HTML, CSS, and JavaScript to create a simple dice game where two players take turns rolling a dice, and the goal is to reach a
                    score of 100 first.</li>
<li>Then, it defines the starting conditions of the game, which sets the scores to 0, the current score to 0, and the active player to 0. It
                    also hides the dice image and removes any winners or active classes from the players.</li>
<li>when the player clicks the "Roll Dice" button If the game is still playing, it generates a random number between 1 and 6, displays the
                    corresponding dice image, and updates the current score accordingly.
                    </li>
<li>when the player clicks the "Hold" button If the game is still playing, it adds the current score to the active player's total score and
                    updates the score display. </li>
<li>If the active player's total score is greater than or equal to 100, the game ends, and the active player is
                    declared the winner.</li>
<li> When the player clicks the "New Game" button, It resets the game to its initial state.</li>
</ul>
<div className="card-action">
<a aria-label="Visit " className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Online" href="https://storied-tiramisu-2cb433.netlify.app/" target="_blank"><i className="fa fa-external-link"></i></a>
<a aria-label="Visit the GitHub repo for  project" className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Source" href="https://github.com/habte-selassie/Dice-Game" target="_blank"><i className="fa fa-github"></i></a>
</div>
</div>
</div>
</div>
<div className="col s12 m6 l4">
<div className="card medium" style={{width: '460px', marginTop: '460px', marginLeft: '-56px', position: 'relative'}}>
<div className="card-image waves-effect waves-block waves-light">
<img alt="Screenshot of web app" className="activator" src=".//images/projects/location-finder.png" style={{height: '100%', width: '100%'}}/>
</div>
<div className="card-content">
<span className="card-title activator teal-text hoverline">Mapty App<i className="mdi-navigation-more-vert right"></i></span>
<p>
                A simple Activity Tracker web-app based on JavaScript.
                </p>
</div>
<div className="card-reveal">
<span className="card-title teal-text"><small>Accomplishments</small><i className="mdi-navigation-close right"></i></span>
<ul>
<li><b>Tools:</b> HTML, CSS, JavaScript,Leaflet,Geo Location API</li>
<li>This is a JavaScript workout tracker application built using HTML, CSS, Vanilla JavaScript, the Geolocation API, and the Leaflet
                    Library.</li>
<li> It allows the user to add running or cycling workouts, with distance, duration, and other metrics.</li>
<li>The application uses the browser's
                    geolocation API to get the user's current location and displays a map with markers for each workout.</li>
<li>The user can click on a workout marker to see the workout details, and the application allows the user to toggle between displaying
                    the elevation gain and cadence for cycling and running workouts, respectively.</li>
<li>The application uses event listeners to handle form submissions, type changes, and clicks on workout markers.
                  </li>
<li>It also uses local storage to store the workout data, allowing the user to reload the page without losing their data.
                  </li>
<li>Users can view the location and direction of where the user starts run where is now.</li>
</ul>
<div className="card-action">
<a aria-label="Visit Blog website" className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Online" href="https://bejewelled-frangollo-83bce1.netlify.app/" target="_blank"><i className="fa fa-external-link"></i></a>
<a aria-label="Visit the GitHub repo for  project" className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Source" href="https://github.com/habte-selassie/Location-FInder" target="_blank"><i className="fa fa-github"></i></a>
</div>
</div>
</div>
</div>
<div className="col s12 m6 l4">
<div className="card medium" style={{width: '460px', marginTop: '-420px', marginLeft: '-21px', position: 'relative'}}>
<div className="card-image waves-effect waves-block waves-light">
<img alt="Screenshot of  web app" className="activator" src=".//images/projects/bankist.png" style={{height: '100%', width: '100%'}}/>
</div>
<div className="card-content">
<span className="card-title activator teal-text hoverline">Simple Bankist Application<i className="mdi-navigation-more-vert right"></i></span>
<p>
                  Simple Bankist Application Made Using HTML, CSS, and Vanilla JavaScript
                </p>
</div>
<div className="card-reveal">
<span className="card-title teal-text"><small>Accomplishments</small><i className="mdi-navigation-close right"></i></span>
<ul>
<li>
                    Account Overview: Users can view their account details, including the account owner's name, account balance, and interest rate.
                  </li>
<li>
                    Transaction History: Users can see a list of their transactions, including the transaction date, type (deposit or withdrawal), and amount.
                  </li>
<li>
                    Sorting Transactions: Users can sort their transactions in ascending order based on date or amount.
                  </li>
<li>
                    Login and Logout: Users can log in to their account using a username and password, and log out when they are finished.
                  </li>
<li>
                    Account Management: Users can update their account information, such as their name, PIN number, or currency.
                  </li>
<li>
                    Internationalization: The application supports localization by allowing users to select their preferred locale for displaying dates, currency formats, and other language-specific settings.
                  </li>
</ul>
<div className="card-action">
<a aria-label="Visit Blog website" className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Online" href="https://tiny-khapse-c25ab9.netlify.app/" target="_blank"><i className="fa fa-external-link"></i></a>
<a aria-label="Visit the GitHub repo for  project" className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Source" href="https://github.com/habte-selassie/Bankist-Application" target="_blank"><i className="fa fa-github"></i></a>
</div>
</div>
</div>
<div className="col s12 m6 l4">
<div className="card medium" style={{width: '460px', marginTop: '20px', marginLeft: '-35px', position: 'relative'}}>
<div className="card-image waves-effect waves-block waves-light">
<img alt="Screenshot of  web app" className="activator" src=".//images/projects/Natours.png" style={{height: '100%', width: '100%'}}/>
</div>
<div className="card-content">
<span className="card-title activator teal-text hoverline">Natours Tour Application<i className="mdi-navigation-more-vert right"></i></span>
<p>
                    Tour Application Made Using HTML,Pug, CSS, Nodejs, Expressjs, Mongodb  and other JavaScript Libraries
                  </p>
</div>
<div className="card-reveal">
<span className="card-title teal-text"><small>Accomplishments</small><i className="mdi-navigation-close right"></i></span>
<ul>
<li>A highly intuitive and aesthetically pleasing home page with a visually appealing animation.
                      
                          <li>Users can view detailed information about tours, such as their ratings and reviews.</li>
</li>
<li>A streamlined payment process that allows users to pay for their tours quickly and easily.
                      
                          <li>Users can view a list of all the tours they have booked.</li>
</li>
<li>Users can update their profiles, including their names, profile pictures, email addresses, and passwords.</li>
<li>Tour Guides and Ratings:
                      
                          <li>In addition to tour details, users can access information about tour guides, including their profiles, experience, and reviews.</li>
<li>They can also rate and provide feedback on their tour guide's performance, enabling other users to make informed decisions when selecting tours.</li>
</li>
<li>Administrators can manage the website and view detailed information about the tours and users.</li>
</ul>
<div className="card-action">
<a aria-label="Visit Blog website" className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Online" href="https://natours-pw5m.onrender.com/" target="_blank"><i className="fa fa-external-link"></i></a>
<a aria-label="Visit the GitHub repo for project" className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Source" href="https://github.com/habte-selassie/Natours" target="_blank"><i className="fa fa-github"></i></a>
</div>
</div>
</div>
<div className="col s12 m6 l4">
<div className="card medium" style={{width: '460px', marginTop: '-415px', marginLeft: '470px', position: 'relative'}}>
<div className="card-image waves-effect waves-block waves-light">
<img alt="Screenshot of  web app" className="activator" src=".//images/projects/Hr.png" style={{height: '100%', width: '100%'}}/>
</div>
<div className="card-content">
<span className="card-title activator teal-text hoverline">Human Resource Management App<i className="mdi-navigation-more-vert right"></i></span>
<p>
                      Human Resource Management Application Made Using Angular,Angular Material,Nodejs,Expressjs,MongoDB and Other Javascript Libraries
                    </p>
</div>
<div className="card-reveal">
<span className="card-title teal-text"><small>Accomplishments</small><i className="mdi-navigation-close right"></i></span>
<ul>
<li>User Authentication: Allow users to register, log in, and manage their accounts securely.</li>
<li>Employee Management: Provide a centralized database to manage employee information such as personal details, contact information, employment history, and documents.</li>
<li>Candidate Management: Provide a platform for HR personnel to manage candidate information during the recruitment process. This includes storing candidate resumes, tracking interview stages, adding interview feedback, and updating candidate statuses.</li>
<li>CRUD Operations on Employee and Candidate: Implement Create, Read, Update, and Delete operations for both employee and candidate records. This allows HR administrators to add new employees, update existing employee information, delete employee records, and perform similar actions for candidate records.</li>
<li>Profile Management: Enable employees to manage their profiles by allowing them to update personal details, contact information, emergency contacts, and other relevant information. This helps keep employee profiles up to date and accurate.</li>
<li>Login and Logout: Implement secure login and logout functionality to ensure that only authorized users can access the HR app. Users should be able to log in with their credentials and log out when they are done using the application.</li>
</ul>
<div className="card-action">
<a aria-label="Visit Blog website" className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Online" href="/images/projects/under (1).png" target="_blank"><i className="fa fa-external-link"></i></a>
<a aria-label="Visit the GitHub repo for  project" className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-position="top" data-tooltip="View Source" href="https://github.com/habte-selassie/angular-project-master" target="_blank"><i className="fa fa-github"></i></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div></div></section>
    </>
  );
}
