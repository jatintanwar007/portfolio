import React, { useEffect, useState } from 'react';

const skills = [
  { name: 'CSS', percent: 95 },
  { name: 'HTML', percent: 98 },
  { name: 'JavaScript', percent: 68 },
  { name: 'React', percent: 92 },
  { name: 'Node.js', percent: 83 },
  { name: 'Express', percent: 95 },
  { name: 'MongoDB', percent: 95 },
  { name: 'PostgreSQL', percent: 95 },
];

const Skills = () => {
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setAnimatedValues(prev => {
          const updated = [...prev];
          if (updated[index] < skill.percent) {
            updated[index] = Math.min(updated[index] + 1, skill.percent);
          }
          return updated;
        });
      }, 15); // Speed of animation
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="portfolio-section bg-light" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">Skills</span>
            <h2 className="mb-4">My Skills</h2>
            <p>Skilled Full-Stack Developer proficient in frontend and backend technologies including React, Node.js, Express, MongoDB, and PostgreSQL.</p>
          </div>
        </div>

        <div className="row progress-circle mb-5">
          {skills.map((skill, index) => (
            <div key={skill.name} className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">{skill.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
