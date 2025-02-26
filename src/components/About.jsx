import React from 'react';
import githubIcon from '../assets/GitHub.jpg';
import linkedinIcon from '../assets/LinkedIn.jpg';

const About = () => {
  return (
    <div className="about center">
      <h1>Hi, I am <span className="about__name">Jonathan Pham!</span></h1>
      <h2 className="about__role">A Computer Scientist.</h2>
      <p className="about__desc">
        I am a highly motivated Computer Science student with a deep-rooted passion for the field. My enthusiasm stems from a strong interest in problem-solving, driving my desire to learn, push my boundaries, and continually take on new challenges.
      </p>
      <div className="about__contact center">
        <a href="https://example.com" className="btn btn--outline">Resume</a>
        <a
          href="https://github.com/Taejin1"
          target="_blank"
          rel="noopener noreferrer"
          className="link link--icon"
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="icon"
          />
        </a>

        <a
          href="https://linkedin.com/in/jjpham"
          target="_blank"
          rel="noopener noreferrer"
          className="link link--icon"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="icon"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
