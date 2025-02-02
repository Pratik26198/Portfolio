// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Bootstrap', level: 75 },
    // Add more skills as needed.
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 mb-3">
              <h5>{skill.name}</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
