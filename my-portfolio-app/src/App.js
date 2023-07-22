// import logo from './logo.svg';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import yourImage from '../src/SelvamS.jpg'

function App() {
  return (
    <div className="App">
      {/* Section 1: Home */}
      <header className="hero" id='home'>
        <Container>
          <h1>Sowmiyanarayan Selvam</h1>
          <div className="profile-picture">
                <img src={yourImage} alt="Profile" />
              </div>
          <p>Software Engineer</p>
        </Container>
      </header>

         {/* Navigation bar */}
         <nav className="navbar">
        <Container>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              {/* Download Resume button */}
              <a href="/Selvam-Resume.pdf" download="Selvam-Resume.pdf" className="resume-button">
              Resume
            </a>
            </li>

          </ul>
        </Container>
      </nav>

      {/* Section 2: About Me */}
      <section className="about-me" id='about-me'>
        <Container>
          <Row>
            <Col md={6}>
              <h2>About Me</h2>
              <p>
              வணக்கம் 🙏🏽 or Hello! I'm a Computer Science graduate student at Rutgers New Brunswick. 
              I had the incredible opportunity to intern at SPAN Technologies this summer. 
              During my time there, I worked with the MERN stack. I was a part of the dev team
              building a tax prep app for TaxBandits. I contributed a mail scheduling module using Node.js,
              Express, AWS Lambda, AWS EventBridge Scheduler, AWS SQS, and AWS SES. I have taken a wide 
              range of courses at Rutgers, from Operating Systems to Socially Cognizant Robotics.<br /> When 
              I'm not in front of my laptop, you can find me on the court, cheering on the Lakers, 
              vibing to some music, watching Luffy make his way to the one piece, or nerding out with my 
              friends. <br /> I'm fascinated by how language evolves in computer science, becoming simple and 
              intricate simultaneously. Computer Science is not just a field of study but a powerful language 
              that can support and enhance any task, menial or grand. I am currently looking into 
              Robotic Process Automation (RPA) and its application to automate repetitive tasks like filling 
              out forms. I'm excited to continue my journey as a software engineer, creating solutions and 
              pushing the boundaries of what I could achieve with the technologies I have learned. 
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 3: My Projects */}
      <section className="projects" id='projects'>
        <Container>
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-slot">
              <img src="project1.jpg" alt="Project 1" />
              <h3>Project 1</h3>
              <p>
                Content for Project 1.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="project-slot">
              <img src="project1.jpg" alt="Project 1" />
              <h3>Project 2</h3>
              <p>
              Content for Project 2.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="project-grid">
            <div className="project-slot">
              <img src="project3.jpg" alt="Project 1" />
              <h3>Project 3</h3>
              <p>
              Content for Project 3.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="project-slot">
              <img src="project1.jpg" alt="Project 1" />
              <h3>Project 4</h3>
              <p>
              Content for Project 4.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </Container>
      </section>

        {/* Section 4: Blog */}
            <section className="blog" id="blogs">
        <Container>
          <h2>Blogs</h2>
          <p>
            Check out my latest blog post on Medium!
            <br />
            <a href="https://medium.com/@selvamsowmiyanarayan/the-science-behind-invisalign-for-dummies-by-a-dummy-6365feed50fe" target="_blank" rel="noopener noreferrer">
              Read Now
            </a>
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
        <h2>Contact Me</h2>
          <p>
            Reach out to me at.
          </p>
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
        </Container>
      </footer>
    </div>
  );
}

export default App;
