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
          <p>Software Engineer</p>
        </Container>
      </header>

      {/* Section 2: About Me */}
      <section className="about-me">
        <Container>
          <Row>
            <Col md={6}>
              <h2>About Me</h2>
              <div className="profile-picture">
                <img src={yourImage} alt="Profile" />
              </div>
              <p>
              வணக்கம் 🙏🏽 or Greetings, I am a passionate software engineer with experience in developing
              web applications using MERN stack.
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
