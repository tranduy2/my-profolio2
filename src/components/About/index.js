import React from 'react';
import { about } from '../../data/contants';
import '../../App.css';
import avatarProfile from '../image/tranduy.jpg';

const About = () => {
  return (
    <section id="about">
      <img src={avatarProfile} alt="Avatar" className="avatar" /><p>Trần Anh Duy</p>
      <h2>About Me</h2>
      <p>{about.description}</p>
    </section>
  );
};

export default About;
