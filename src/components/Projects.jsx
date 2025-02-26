import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {Array(3).fill(null).map((_, idx) => (
          <div className="project" key={idx}>
            <h3>Project {idx + 1}</h3>
            <p className="project__description">
              Ipsum accusamus ea excepturi aliquid eligendi amet.
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">SASS</li>
              <li className="project__stack-item">TypeScript</li>
              <li className="project__stack-item">React</li>
            </ul>
            <a href="https://github.com" className="link link--icon"><i className="fab fa-github"></i></a>
            <a href="https://example.com" className="link link--icon"><i className="fas fa-external-link-alt"></i></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
