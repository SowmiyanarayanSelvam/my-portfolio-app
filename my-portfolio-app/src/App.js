// import logo from './logo.svg';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import yourImage from "../src/SelvamS.jpg";
import yourImage from "../src/Sowmi2.jpeg";
import bidsyGifUrl from "../src/projects/Bidsy.gif";
import scrGifUrl1 from "../src/projects/SCR-1.gif";
import scrGifUrl2 from "../src/projects/SCR-2.gif";
import ARGifUrl from "../src/projects/AR.gif";

function App() {
  return (
    <div className="App">
      {/* Section 1: Home */}
      <header className="hero" id="home">
        <Container>
          <Row>
            <h1>Sowmiyanarayan Selvam</h1>
            <div className="profile-picture">
              <img src={yourImage} alt="Profile" />
            </div>
            <p>Software Engineer</p>
          </Row>
        </Container>
      </header>

      {/* Navigation bar */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Container>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-me">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blogs">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link resume-button"
                  href="/Selvam-Resume.pdf"
                  download="Selvam-Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>

      {/* Section 2: About Me */}
      <section className="about-me" id="about-me">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-left">
              <h2>About Me</h2>
              <p>
                வணக்கம்<span role="img" >🙏🏽</span>or Hello! I'm a Comp Sci grad student at
                Rutgers New Brunswick. I had the opportunity to intern at SPAN
                Technologies this summer. During my time there, I worked with
                the MERN stack. I was a part of the dev team building a tax prep
                app for TaxBandits. I contributed a mail scheduling module using
                Node.js, Express, AWS Lambda, AWS EventBridge Scheduler, AWS
                SQS, and AWS SES. I have taken a wide range of courses at
                Rutgers, from Operating Systems to Advanced Robotics. 
                I am a Course Assistant for CS211 Software Methodologies too!
                <br />
                When I'm not in front of my laptop, you can find me on the
                court, cheering on the Lakers, vibing to some music, watching
                Luffy make his way to the One Piece, or nerding out with my
                friends.
                <br />
                I'm fascinated by how Computer Science has started evolving into
                a language, becoming simple and intricate simultaneously.
                Computer Science is not just a field of study but a powerful
                language that can support and enhance any task, menial or grand.
                I'm excited to continue my journey as a software engineer, creating 
                solutions and pushing the boundaries of what I could achieve with the 
                technologies I have learned.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 3: Education */}
      <section className="education" id="education">
        <Container>
          <h2 className="text-center">Education</h2>
          <Row>
            <div className="education-item">
              <h3>Rutgers-New Brunswick</h3>
              <p>Degree: Master of Science</p>
              <p>Field of Study: Computer Science</p>
              <p>Period of Study: 2022 - 2024</p>
              <p>GPA: 3.78/4.0</p>
            </div>
            <div className="education-item">
              <h3>Amrita Vishwa Vidyapeetham</h3>
              <p>Degree: Bachelors of Technology</p>
              <p>Field of Study: Computer Science</p>
              <p>Period of Study: 2018 - 2022</p>
              <p>GPA: 3.5/4.0</p>
            </div>
          </Row>
        </Container>
      </section>

      {/* Section 4: My Projects */}
      <section className="projects" id="projects">
        <Container>
          <h2 className="text-center">Projects</h2>
          <div className="project-grid">

            {/* Project 1: Advanced Robotics */}
            <div className="col-md-6 offset-md-3 project-slot double">
            <img src={ARGifUrl} alt="AR Project" />
              <h3>Project : Legged Robot Locomotion</h3>
              <p>
              Tasked with building a Neural Network policy for a quadruped robot,
              employing Python, PyTorch, Tensorflow, and Isaac Gym. The primary goal
              was to train the robot for autonomous hallway navigation using Actor-Critic 
              and Proximal Policy Optimization algorithms. The project featured the 
              development of a sophisticated reward function, guiding the robot to 
              reach goals while avoiding collisions with walls and obstacles.
              </p>
            </div>

            {/* Project 2: Bidsy */}
            <div className="col-md-6 offset-md-3 project-slot">
              <img src={bidsyGifUrl} alt="Bidsy Project" />
              <h3>Project 2: Bidsy</h3>
              <p>
                This website operates with automated bidding, setting up
                auctions for items spanning various categories. Bids can be
                manual or automatic, and buyers have the option to receive
                notifications if they are outbid. The marketplace offers sorting
                and searching algorithms for buyers to explore and find items.
                Sellers can list their items on the shared marketplace,
                specifying a lower and upper price along with the bid expiration
                time.
              </p>
            </div>

            
          </div>

          <div className="project-grid">
            {/* Project 3: SCR */}
            <div className="col-md-6 offset-md-3 project-slot double">
              <img src={scrGifUrl1} alt="SCR 1" />
              <img src={scrGifUrl2} alt="SCR 2" />
              <h3>Project 3: Collision Avoidance</h3>
              <p>
                The focus of this academic project revolved around facilitating
                a robot to successfully navigate to its destination while
                prioritizing collision avoidance. The project was split into two
                segments. In the initial phase, the robot's objective was to
                travel through a narrow pathway to reach its destination,
                contending with an obstacle positioned on the opposite side of
                the path. The subsequent phase involved the robot accompanying
                its owner through a congested room while being in the amidst of
                other humans and avoiding collisions with them.
              </p>
            </div>

            {/* Project 4: Job Application Tracker */}
            <div className="col-md-6 offset-md-3 project-slot dimmed">
              <div className="typing-effect">In the workshop</div>
              <h3>Project 4: Job Application Tracker</h3>
              <p>
                {" "}
                Project to keep track of the job applicaiton statuse by reading
                the mail updated sent by companies to the gmail inbox using a
                gmail API.
              </p>
            </div>
          </div>

          {/* <div className="project-grid">
            {/* Project 3: EMS */}
            {/* <div className="col-md-6 offset-md-3 project-slot">
              <img src={emsGifUrl} alt="EMS Project" />
              <h3>Project 3: EMS</h3>
              <p>
                The Elective Management System (EMS) was developed as
                replacement for the existing system employed within my
                undergraduate university. It streamlined and expedited the
                laborious process. EMS demonstrated a consideration for
                individual elective preferences of each student and executed a
                meticulous allocation of electives.
                <br />
                This allocation was executed on the basis of a "first come,
                first serve" principle, wherein the course's available capacity
                was primary. In cases where the course capacity was fulfilled,
                students were automatically assigned their next preferred
                elective choice. Furthermore, EMS facilitated subsequent
                transfers between elective options, automatically accommodating
                any surplus slots within its algorithmic framework.
              </p>
            </div> */}

            {/* Project 4: Job Application Tracker */}
            {/* <div className="col-md-6 offset-md-3 project-slot dimmed">
              <div className="typing-effect">In the workshop</div>
              <h3>Project 4: Job Application Tracker</h3>
              <p>
                {" "}
                Project to keep track of the job applicaiton statuse by reading
                the mail updated sent by companies to the gmail inbox using a
                gmail API.
              </p>
            </div> */}
          {/* </div> */}
        </Container>
      </section>

      {/* Section 5: Blog */}
      <section className="blog" id="blogs">
        <Container>
          <h2>Blogs</h2>
          <p>
            Check out my latest blog post on Medium!
            <br />
            <a
              href="https://medium.com/@selvamsowmiyanarayan/the-science-behind-invisalign-for-dummies-by-a-dummy-6365feed50fe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Now
            </a>
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <h2>Contact Me</h2>
          <p>Reach out to me at.</p>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/sowmiyanarayan-selvam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/SowmiyanarayanSelvam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:selvamsowmiyanarayan@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <p>Last Updated on: Feb 19 2024</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
