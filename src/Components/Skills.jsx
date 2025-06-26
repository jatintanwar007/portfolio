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
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="row progress-circle mb-5">
          {skills.map((skill, index) => (
            <div key={skill.name} className="col-lg-4 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">{skill.name}</h2>

                {/* <div className="progress mx-auto" data-value={skill.percent}>
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">
                      {animatedValues[index]}<sup className="small">%</sup>
                    </div>
                  </div>
                </div> */}

                {/* <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">28%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">60%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
