import React from 'react';
import { projects } from '../../data/contants';

const ProjectDetail = ({ match }) => {
    const project = projects.find(p => p.id === match.params.id);
  
    return (
      <section>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>{project.use}</p>
      </section>
    );
  };
  
  export default ProjectDetail;
