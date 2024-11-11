import React from 'react';
import { education } from '../../data/contants';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((item, index) => (
        <div key={index}>
          <h3>{item.institution}</h3>
          <p>{item.degree} - {item.year}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
