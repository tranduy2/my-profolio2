import React from 'react';
import { experience } from '../../data/contants';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((job, index) => (
        <div key={index}>
          <h3>{job.position} at {job.company}</h3>
          <p>{job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
