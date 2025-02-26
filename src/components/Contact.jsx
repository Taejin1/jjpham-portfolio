import React from 'react';
import githubIcon from '../assets/GitHub.jpg';
import linkedinIcon from '../assets/LinkedIn.jpg';

const Contact = () => {
  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="about__contact center">
        <a href="https://example.com" className="btn btn--outline">Email Me</a>
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
    </section>
  );
};

export default Contact;
