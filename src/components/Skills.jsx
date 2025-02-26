import React from 'react';

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'C Programming',
    'ReactJS', 'PostgreSQL', 'Git', 'Material UI',
  ];

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map(skill => (
          <li className="skills__list-item btn btn--plain" key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
