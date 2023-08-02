// import logo from './logo.svg';
import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import yourImage from '../src/SelvamS.jpg'
import bidsyGifUrl from '../src/projects/Bidsy.gif';
import emsGifUrl from '../src/projects/EMS.gif';
import scrGifUrl1 from  '../src/projects/SCR-1.gif';
import scrGifUrl2 from '../src/projects/SCR-2.gif';

function App() {

    return (
        <div className="App">
            {/* Section 1: Home */}
            <header className="hero" id='home'>
                <Container>
                    <h1>Sowmiyanarayan Selvam</h1>
                    <div className="profile-picture">
                        <img src={yourImage} alt="Profile"/>
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
                            <a href="#about-me">About</a>
                        </li>
                        <li>
                            <a href="#education">Education</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#blogs">Blogs</a>
                        </li>
                        <li>
                            {/* Download Resume button */}
                            <a
                                href="/Selvam-Resume.pdf"
                                download="Selvam-Resume.pdf"
                                className="resume-button">
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
                                வணக்கம் 🙏🏽 or Hello! I'm a Computer Science graduate student at Rutgers New
                                Brunswick. I had the opportunity to intern at SPAN Technologies this summer.
                                During my time there, I worked with the MERN stack. I was a part of the dev team
                                building a tax prep app for TaxBandits. I contributed a mail scheduling module
                                using Node.js, Express, AWS Lambda, AWS EventBridge Scheduler, AWS SQS, and AWS
                                SES. I have taken a wide range of courses at Rutgers, from Operating Systems to
                                Socially Cognizant Robotics.<br/>
                                When I'm not in front of my laptop, you can find me on the court, cheering on
                                the Lakers, vibing to some music, watching Luffy make his way to the One Piece,
                                or nerding out with my friends.
                                <br/>
                                I'm fascinated by how Computer Science has started evolving into a language,
                                becoming simple and intricate simultaneously. Computer Science is not just a
                                field of study but a powerful language that can support and enhance any task,
                                menial or grand. I am currently looking into Robotic Process Automation (RPA)
                                and its application to automate repetitive tasks like filling out forms. I'm
                                excited to continue my journey as a software engineer, creating solutions and
                                pushing the boundaries of what I could achieve with the technologies I have
                                learned.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

                 {/* Section 3: Education */}
                  <section className="education" id="education">
                    <Container>
                      <h2>Education</h2>
                      <div className="education-item">
                        <h3>Rutgers-New Brunswick</h3>
                        <p>Degree: Master of Science</p>
                        <p>Field of Study: Computer Science</p>
                        <p>Period of Study: 2022 - 2024</p>
                        <p>GPA: 3.83/4.0</p>
                      </div>
                      <div className="education-item">
                        <h3>Amrita Vishwa Vidyapeetham</h3>
                        <p>Degree: Bachelors of Technology</p>
                        <p>Field of Study: Computer Science</p>
                        <p>Period of Study: 2018 - 2022</p>
                        <p>GPA: 3.5/4.0</p>
                      </div>
                    </Container>
                  </section>

            {/* Section 4: My Projects */}
            <section className="projects" id="projects">
                <Container>
                    <h2>Projects</h2>
                    <div className="project-grid">
                        {/* Project 1: Bidsy */}
                        <div className="project-slot">
                            <img src={bidsyGifUrl} alt="Bidsy Project"/>
                            <h3>Project 1: Bidsy</h3>
                            <p>
                                Bidsy is an automated online auction system.
                            </p>
                        </div>

                        {/* Project 2: SCR */}
                        <div className="project-slot-double">
                          <img src={scrGifUrl1} alt="SCR 1" />
                          <img src={scrGifUrl2} alt="SCR 2" />
                            <h3>Project 2: SCR</h3>
                            <p>
                                This project has two parts.
                            </p>
                        </div>

                        {/* Project 3: EMS */}
                        <div className="project-slot">
                            <img src={emsGifUrl} alt="EMS Project"/>
                            <h3>Project 3: EMS</h3>
                            <p>
                                EMS is a cutting-edge project with a mesmerizing GIF that shows off its
                                capabilities in action.
                            </p>
                        </div>

                       {/* Project 4: Job Application Tracker */}
                      <div className="project-slot dimmed">
                        <div className="typing-effect">
                          In the workshop
                        </div>
                        <h3>Project 4: Job Application Tracker</h3>
                        <p> Project 4 Description</p>
                      </div>
                    </div>
                  </Container>
                </section>

                      {/* Section 5: Blog */}
                      <section className="blog" id="blogs">
                          <Container>
                              <h2>Blogs</h2>
                              <p>
                                  Check out my latest blog post on Medium!
                                  <br/>
                                  <a
                                      href="https://medium.com/@selvamsowmiyanarayan/the-science-behind-invisalign-for-dummies-by-a-dummy-6365feed50fe"
                                      target="_blank"
                                      rel="noopener noreferrer">
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
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a
                            href="https://github.com/SowmiyanarayanSelvam"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href="mailto:selvamsowmiyanarayan@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                    </div>
                </Container>
            </footer>
        </div>
    );
}

export default App;
