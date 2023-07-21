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
      <header className="hero">
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
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </Container>
      </nav>

      {/* Section 2: About Me */}
      <section className="about-me">
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
      <section className="projects">
        <Container>
          <h2>My Projects</h2>
          {/* Add your project cards/grid here */}
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
